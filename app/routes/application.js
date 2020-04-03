import { get } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Route.extend({
  session: service(),
  firebaseApp: service(),

  beforeModel: function() {
    return get(this, 'session').fetch().catch(() => {});
  },

  actions: {
    logout() {
      return get(this, 'session').close();
    },
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = await get(this, 'firebaseApp').auth();
      return auth.signInWithPopup(provider);
    }
  }
});
