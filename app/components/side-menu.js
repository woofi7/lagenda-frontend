import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action, computed } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SideMenuComponent extends Component {
  @service screen;

  @tracked collabCollapsed = true;
  @tracked collabOtherCollapsed = true;
  @tracked partnersCollapsed = true;

  @computed('args.categories')
  get filteredCategories() {
    let filteredCategories = this.args.categories.filter(c => !c.isPartner).filter(c => c.order < 100).slice(0, 3);

    filteredCategories.pushObjects(this.args.categories
      .filter(c => !c.isPartner)
      .filter(c => !filteredCategories.map(c => c.id).includes(c.id))
      .map(c => c.articles.toArray())
      .flat()
      .sortBy('postDatetime')
      .slice(-2)
      .map(a => a.get('articleCategory'))
      .filter((v, i, a) => a.findIndex(e => e.Id === v.Id) === i));

    return filteredCategories;
  }

  @computed('filteredCategories')
  get otherFilteredCategories() {
    return this.args.categories.filter(c => !c.isPartner).filter(c => !this.filteredCategories.map(c => c.get('id')).includes(c.id));
  }

  @computed('args.categories')
  get partnersCatagories() {
    return this.args.categories.filter(c => c.isPartner);
  }

  @action
  toggleCollapsedCollab() {
    this.collabCollapsed = !this.collabCollapsed;
  }

  @action
  toggleCollapsedPartners() {
    this.partnersCollapsed = !this.partnersCollapsed;
  }

  @action
  toggleCollapseOtherCollab() {
    this.collabOtherCollapsed = !this.collabOtherCollapsed;
  }
}
