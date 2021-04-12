export function initialize(application) {
  application.inject('controller', 'notifications', 'service:notifications');
}

export default {
  initialize
};
