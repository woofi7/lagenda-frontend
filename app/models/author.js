import Model, {attr} from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') desc;
  @attr('string') photo;
}
