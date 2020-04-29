import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default class LaTribuneListController extends Controller {
  @sort('model', (a,b) => b.updateDatetime - a.updateDatetime)
  articles;
}
