import { refs } from './refs';

export function renderTasksList(tasks) {
  const markup = tasks
    .map(
      ({ taskName, taskDescription }) => `
    <li class="task-list-item">
    <button class="task-list-item-btn" data-taskName="${taskName}">Delete</button>
    <h3>${taskName}</h3>
    <p>${taskDescription}</p>
    </li>
    `
    )
    .join('');

  refs.tasksList.innerHTML = markup;
}

export function clearTasksList() {
  refs.tasksList.innerHTML = '';
}
