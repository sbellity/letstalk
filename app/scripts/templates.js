this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["letstalk-admin/categories"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <tr>\n        <td>";
  if (stack1 = helpers.uid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.uid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.extra),stack1 == null || stack1 === false ? stack1 : stack1.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n      </tr>\n      ";
  return buffer;
  }

  buffer += "\n<div class=\"row\">\n\n  <div class=\"span8\">\n    <table class='table'>\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.categories) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.categories; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.categories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n  </div>\n  <div class=\"span4\">\n    ";
  stack1 = self.invokePartial(partials['letstalk-admin.form'], 'letstalk-admin.form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["letstalk-admin/form"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form class=\"form-horizontal\">\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputUID\">UID</label>\n    <div class=\"controls\">\n      <input type=\"text\" name='uid' id='inputUID' placeholder=\"UID\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputName\">Name</label>\n    <div class=\"controls\">\n      <input type=\"text\" name=\"name\" id=\"inputName\" placeholder=\"Name\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputColor\">Color</label>\n    <div class=\"controls\">\n      <input type=\"text\" name=\"extra.color\" id=\"inputColor\" placeholder=\"Color\">\n      <button type=\"submit\" class=\"btn\">Create Category</button>\n    </div>\n  </div>\n</form>\n";
  };

this["Hull"]["templates"]["letstalk/header"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "<a data-hull-action='back' class='btn'>Back</a>";
  }

  buffer += "<div>\n  <a data-hull-action='newConvo' class='btn pull-right'>+ New Conversation</a>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.subject, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  &nbsp;\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["letstalk/loading"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Loading...";
  };

this["Hull"]["templates"]["letstalk/new"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\"";
  if (stack1 = helpers.uid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.uid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

  buffer += "<div class=\"modal hide fade\" id='";
  if (stack1 = helpers.modalId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.modalId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>New Conversation</h3>\n  </div>\n  <div class=\"modal-body\">\n    <form class='new-convo'>\n      <fieldset>\n        <input type='text' name='name' placeholder='Give it a name'/>\n        <select name='uid'>\n          ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.subjects) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.subjects; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.subjects) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </fieldset>\n      <fieldset>\n        <textarea class=\"input-block-level\" name='message_body' placeholder='Type your message here...'></textarea>\n      </fieldset>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"btn\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</a>\n    <a class='btn btn-primary' data-hull-action=\"createNewConvo\">Create</a>\n  </div>\n</div>";
  return buffer;
  };

this["Hull"]["templates"]["letstalk/subject"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-hull-id=\"";
  if (stack1 = helpers.convo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.convo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  stack1 = self.invokePartial(partials['letstalk.header'], 'letstalk.header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"row\">\n  <div class=\"span4\">\n    <section data-hull-component=\"conversations/list@hull\" data-hull-visibility='public' data-hull-uid=\"";
  if (stack1 = helpers.subject) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subject; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></section>\n    <hr />\n  </div>\n  <div class=\"span8\">\n    <section data-hull-component=\"conversations/thread@hull\" ";
  stack1 = helpers['if'].call(depth0, depth0.convo, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-hull-order=\"asc\" data-hull-limit=\"0\" data-hull-focus=\"false\">\n    </section>\n  </div>\n</div>\n\n";
  stack1 = self.invokePartial(partials['letstalk.new'], 'letstalk.new', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  };

this["Hull"]["templates"]["letstalk/subjects"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials['letstalk.header'], 'letstalk.header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div data-hull-component=\"conversations/list@hull\" \n    data-hull-visibility='public' \n    data-hull-mode='expanded'\n    data-hull-boost='score'\n    data-hull-filter='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.json || depth0.json),stack1 ? stack1.call(depth0, depth0.filter, options) : helperMissing.call(depth0, "json", depth0.filter, options)))
    + "'></div>\n\n";
  stack2 = self.invokePartial(partials['letstalk.new'], 'letstalk.new', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  };