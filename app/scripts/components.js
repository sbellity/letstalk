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



//--------


Hull.component('letstalk', {

  templates: ['loading', 'subjects', 'subject', 'new', 'header'],

  events: {
    'submit form.new-convo' : 'createNewConvo'
  },

  datasources: {
    subjects: function() {
      return this.api('entities', { where: { object_type: 'talk-category' } });
    }
  },

  actions: {
    back: function() {
      this.router.navigate('/', { trigger: true });
    },
    newConvo: function() {
      this.convoForm.modal('show');
      this.$find('input[name="name"]').focus();
    },
    createNewConvo: 'createNewConvo'
  },

  initialize: function() {
    var Backbone = Hull.require('backbone');
    var self = this;

    var Router = Backbone.Router.extend({
      routes: {
        ''                : 'subjects',
        ':subject'        : 'subject',
        ':subject/:convo' : 'convo'
      }
    });

    var router = new Router();

    router.on('route:subjects', function() {
      self.convo = null;
      self.subject = null;
      self.render('subjects');
    });

    router.on('route:subject', function(subject) {
      self.convo = null;
      self.subject = subject;
      self.render('subject', { subject: subject });
    });

    router.on('route:convo', function(subject, convo) {
      self.subject = subject;
      self.convo = convo;
      self.render('subject', { subject: subject, convo: convo });
    });

    this.sandbox.on('hull.conversation.select', function(convo) {
      if (!convo) {
        router.navigate('/', { trigger: true });
      } else if (convo.subject.uid) {
        if (this.subject != convo.subject.uid) {
          var trigger = true;
        }
        router.navigate([convo.subject.uid, convo.id].join('/'), { trigger: trigger });
      }
    }, this);

    this.router = router;
    
    setTimeout(function() {
      Backbone.history.start({ pushState: self.options.pushState });
    }, 1000);

  },

  createNewConvo: function(e) {
    e && e.preventDefault();
    var $form = this.$find("#" + this.modalId + " form");
    var self = this;
    var attrs = { public: true }, input = $form.serializeArray();
    this.sandbox.util._.map(input, function(i) {
      attrs[i.name] = i.value;
    });
    this.api('entity/conversations', attrs, 'post', function(convo) {
      self.convoForm.modal('hide');
      self.router.navigate([attrs.uid, convo.id].join('/'), { trigger: true });
    });
  },

  beforeRender: function(data) {
    var _ = this.sandbox.util._;
    this.modalId = this.sandbox.util._.uniqueId('convo-form-');
    data.modalId = this.modalId;
    var subjectIds = _.pluck(data.subjects, "id");
    data.filter = {
      order_by: 'last_message_at DESC',
      visibility: 'public',
      where: {
        'subject_id.$in': subjectIds
      }
    }
  },

  afterRender: function() {
    this.convoForm = this.$find("#" + this.modalId);
    this.convoForm.modal({ show: false });
  }

});