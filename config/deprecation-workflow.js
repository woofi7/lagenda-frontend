self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchId: "ember-app-scheduler.setupRouter" },
    { handler: "silence", matchId: "deprecate-router-events" },
    { handler: "silence", matchId: "ember-data:default-serializer" },
    { handler: "silence", matchId: "ember-simple-auth.mixins.application-route-mixin" },
    { handler: "silence", matchId: "ember-simple-auth.events.session-service" }
  ]
};
