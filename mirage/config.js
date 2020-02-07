export default function() {
  this.namespace = 'api';

  this.get('/balados', (schema, request) => {
    return schema.balados.all();
  });
}
