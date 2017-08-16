// My beautiful functional app

const store = createStateTree({
  todos: ["Learn createStateTree", "learn React", "Some other thingy!"],
  foo: "bar"
});

const $todosList = $('.todos-list');
const $fooThing = $('#fooThing');

const todoList = todos =>
  todos.map(
    (t, index) => `
        <li>
          ${t}
          <button data-index="${index}" class="remove-todo">
            Trash
          </button>
        </li>
      `
  );

const renderTodos = todos => {
  $todosList.html(todoList(todos));
};

const renderFooThing = foo => {
  $fooThing.html(foo);
};

store.subscribe((state, prevState) => {
  if (state.todos !== prevState.todos) {
    renderTodos(state.todos);
  }

  if (state.foo !== prevState.foo) {
    renderFooThing(state.foo);
  }
});sp
