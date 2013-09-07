Todos.todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
})

Todos.Todo.FIXTURES = [
  {
    id:1,
    title: 'Practice Javascript',
    isCompleted: false
  },
  {
    id: 2,
    title: '...',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Profit?!',
    isCompleted: false
  }
];