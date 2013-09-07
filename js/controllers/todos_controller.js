Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function(){
      // Grab the title in newtitle and set to our Title
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear field for the user
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },

  remaining: function(){
    return this.filterProperty('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining')

});