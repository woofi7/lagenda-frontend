import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  title(i) {
    return `Title ${i}`;
  },

  postDatetime: 28,
  updateDatetime: false,

  avatar() {
    return faker.internet.avatar();
  }

});
