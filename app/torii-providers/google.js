import GoogleOauth2 from 'torii/providers/google-oauth2';

export default class GOOGLEToriiProvider extends GoogleOauth2 {
  fetch(data) {
    return data;
  }
}
