const menuIconEl = document.querySelector('.menu-icon');
const sidenavEl = document.querySelector('.sidenav');
const sidenavCloseEl = document.querySelector('.sidenav__close-icon');

function setEventListeners() {
  // Open the side nav on click
  menuIconEl.addEventListener('click', function (e) {
    sidenavEl.classList.toggle('active');
  });

  // Close the side nav on click
  sidenavCloseEl.addEventListener('click', function (e) {
    sidenavEl.classList.toggle('active');
  });
}

setEventListeners();

//get data
fetch('http://localhost:4000/api/data')
  .then(res => res.json())
  .then(res => {
    res.labels.forEach((e, i, arr) => {
      arr[i] = 'estado ' + e;
    });
    console.log(res);
    let ctx = document.getElementById('myChart').getContext('2d');
    var data = {
      labels: res.labels,
      datasets: [
        {
          fill: true,
          backgroundColor: ['red', 'blue', 'green', 'yellow'],
          data: res.data,
          // Notice the borderColor
          borderColor: ['black', 'black'],
          borderWidth: [2, 2],
        },
      ],
    };
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });
  })
  .catch(e => console.log(`ocurrio un error: ${e}`));

//chart
