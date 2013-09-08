Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function(){
    this.$().focus();
  }
});

// Register Component
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);