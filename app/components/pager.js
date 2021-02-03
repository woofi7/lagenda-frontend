import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {alias} from "@ember/object/computed";
import {inject as service} from "@ember/service";

export default class PagerComponent extends Component {
  @service loading;

  @alias('args.page') page;
  @alias('args.links') links;
  @alias('args.totalResources') totalResources;
  @alias('args.pageSize') pageSize;
  @alias('args.setPage') setPage;

  @computed('totalRessources')
  get lastPage() {
    return Math.ceil(this.totalResources / this.pageSize);
  }

  @computed('page')
  get first() {
    if (this.page <= 1)
      return null;

    return {
      style: "light",
      text: "1"
    };
  }

  @computed('page')
  get prev() {
    if (this.page <= 2)
      return null;

    return {
      style: "light",
      text: this.page - 1
    };
  }

  @computed('page')
  get self() {
    return {
      style: "primary",
      text: this.page
    };
  }

  @computed('page')
  get next() {
    if (this.page >= this.lastPage - 1)
      return null;

    return {
      style: "light",
      text: this.page + 1
    };
  }

  @computed('page')
  get last() {
    if (this.page >= this.lastPage)
      return null;

    return {
      style: "light",
      text: this.lastPage
    };
  }

  @computed('next', 'last')
  get isNextPreviousOfLast() {
    return this.page + 2 < this.lastPage;
  }

  @computed('prev', 'first')
  get isPrevNextOfFirst() {
    return this.page - 2 > 1;
  }

  @action
  changePage(link) {
    switch (link) {
      case 'first':
        if (this.links.first) {
          this.args.setPage(1);
        }
        break;
      case 'prev':
        if (this.links.prev && this.page > 1) {
          this.setPage(this.page - 1);
        }
        break;
      case 'next':
        if (this.links.next) {
          this.setPage(this.page + 1);
        }
        break;
      case 'last':
        if (this.links.last) {
          this.setPage(this.lastPage);
        }
        break;
    }
  }
}
