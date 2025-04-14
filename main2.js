async function loadContent() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    // Set page title
    document.title = data.header.pageTitle;

    // Info Cards
    const infoCardContainer = document.querySelector('.col-lg-4');
    infoCardContainer.innerHTML = '';
    data.infoCards.forEach(card => {
      const div = document.createElement('div');
      div.className = 'info-box bg-light shadow-sm p-3 rounded mb-2';
      div.innerHTML = `${card.title} <span class="float-end">${card.value}</span>`;
      infoCardContainer.appendChild(div);
    });

    // Tasks
    const taskList = document.querySelectorAll('.list-group')[1];
    taskList.innerHTML = '';
    data.tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      if (task.checked) checkbox.checked = true;

      const badge = document.createElement('span');
      badge.className = 'badge';
      if (task.status === "URGENT") badge.classList.add('bg-warning');
      if (task.status === "NEW") badge.classList.add('bg-success');
      if (task.status === "DEFAULT") badge.classList.add('bg-secondary');
      badge.textContent = task.status;

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(` ${task.description} `));
      li.appendChild(badge);

      taskList.appendChild(li);
    });

  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

// Run the function
loadContent();
