import Route from '@ember/routing/route';

export default class List extends Route {
  queryParams = {
    page: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    },
  };
  computeParams(params) {
    return {...params, page: {number: params.page, size: 18}};
  }

  model(params) {
    return this.store.query('article', this.computeParams(params));
  }
}

