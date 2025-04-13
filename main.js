// Load the data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Update the page title based on JSON
    document.title = data.header.pageTitle;

    // Populate the Info Cards section (right column)
    const infoCardContainer = document.querySelector('.col-lg-4');
    infoCardContainer.innerHTML = ''; // Clear existing cards

    data.infoCards.forEach(card => {
      const div = document.createElement('div');
      div.className = 'info-box bg-light shadow-sm p-3 rounded mb-2';
      div.innerHTML = `${card.title} <span class="float-end">${card.value}</span>`;
      infoCardContainer.appendChild(div);
    });

    // Populate the Tasks section (right card list)
    const taskList = document.querySelectorAll('.list-group')[1];
    taskList.innerHTML = ''; // Clear existing list

    data.tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between';

      // Checkbox element
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      if (task.checked) checkbox.checked = true;

      // Status badge (e.g., URGENT, NEW, DEFAULT)
      const badge = document

<script>
  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
