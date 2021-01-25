import { inject as service } from '@ember/service';
import Torii from 'ember-simple-auth/authenticators/torii';
import config from '../config/environment';

export default class ToriiAuthenticator extends Torii {
  @service torii;
  @service router;

  async authenticate() {
    const tokenExchangeUri = config.torii.providers['google-oauth2'].tokenExchangeUri;
    let data = await super.authenticate(...arguments);

    const response = await fetch(tokenExchangeUri, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        authorizationCode: data.authorizationCode,
        provider: data.provider,
        redirectUri: data.redirectUri
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseBody = await response.json();

    return {
      access_token: responseBody.accessToken,
      user_info: responseBody.userInfo,
      provider: data.provider
    };
  }
}
