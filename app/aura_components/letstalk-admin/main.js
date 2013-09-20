Hull.component('letstalk-admin', {

  templates: ['categories', 'form'],

  datasources: {
    categories: function() {
      return this.api('entities', { where: { object_type: 'talk-category' } });
    }
  },

  events: {
    'submit form': 'createCategory'
  },

  afterRender: function() {
    this.$find('input[name="uid"]').focus();
  },

  createCategory: function(e) {
    var self = this, _ = this.sandbox.util._;
    e.preventDefault();
    var vals = $(e.target).serializeArray();
    var attrs = { extra: {}, object_type: 'talk-category' };
    _.each(vals, function(v) {
      if (/extra\./.test(v.name)) {
        attrs.extra[v.name.split('.')[1]] = v.value;
      } else {
        attrs[v.name] = v.value;
      }
    });
    this.api('entity', attrs, 'put', function() {
      self.render();
    });
  }
});