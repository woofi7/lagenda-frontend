import Service, {inject as service} from '@ember/service';
import {keepLatestTask} from "ember-concurrency-decorators";
import {tracked} from "@glimmer/tracking";
import {isBlank} from "@ember/utils";
import {timeout} from "ember-concurrency";
import {computed} from "@ember/object";

const DEBOUNCE_MS = 250;

export default class ImageService extends Service {
  @service store;
  @service fastboot;

  @tracked width;
  @tracked height;
  @tracked ratio;

  set imageUrl(url) {
    this.fetchImageData.perform(url);
  }

  @computed('width', 'height', 'ratio')
  get imageSize() {
    if (!this.width && !this.height && !this.ratio)
      return;

    return {
      width: this.width,
      height: this.height,
      ratio: this.ratio,
    };
  }

  get imageOptions() {
    return this.store.peekAll('image');
  }

  @keepLatestTask *searchImageTask (term) {
    if (isBlank(term) || term.length < 3)
      return this.store.peekAll('image');

    yield timeout(DEBOUNCE_MS);

    return yield this.store.query('image', {
      filter: 'contains(name,\'' + term + '\')',
      page: {
        size: 20
      }
    });
  }

  @keepLatestTask *fetchImageData(url) {
    if (this.fastboot.isFastBoot || !url)
      return;

    this.width = null;
    this.height = null;
    this.ratio = null;

    let img = new Image();
    img.onload = yield () => {
      const gcd = this.gcd(img.width, img.height);

      this.width = img.width;
      this.height = img.height;
      this.ratio = img. width / gcd + ":" + img.height / gcd;
      console.log('image data loaded')
    };
    img.src = url;
  }

  gcd (a, b) {
    return (b === 0) ? a : this.gcd (b, a%b);
  }
}
