let url_api = 'http://localhost:4000/api/data';
// const menuIconEl = document.querySelector('.menu-icon');
// const sidenavEl = document.querySelector('.sidenav');
// const sidenavCloseEl = document.querySelector('.sidenav__close-icon');

// function setEventListeners() {
//   // Open the side nav on click
//   menuIconEl.addEventListener('click', function (e) {
//     sidenavEl.classList.toggle('active');
//   });

//   // Close the side nav on click
//   sidenavCloseEl.addEventListener('click', function (e) {
//     sidenavEl.classList.toggle('active');
//   });
// }

// setEventListeners();

let ctx = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('myChart2').getContext('2d');

// var data = {
//   labels: ['uno', 'dos', 'tres'],
//   datasets: [
//     {
//       fill: true,
//       data: [5, 7, 8],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//       ],
//       borderWidth: [1, 1],
//     },
//   ],
// };
let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Tokyo', 'Mumbai', 'Mexico City', 'Shanghai'],
    datasets: [
      {
        data: [500, 50, 2424, 14040], // Specify the data values array

        borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border
        backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height
  },
});

let myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Tokyo', 'Mumbai', 'Mexico City', 'Shanghai'],
    datasets: [
      {
        data: [500, 50, 2424, 14040], // Specify the data values array

        borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border
        backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  },
  options: {
    maintainAspectRatio: true,
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
//get data
// fetch('http://localhost:4000/api/data')
//   .then(res => res.json())
//   .then(res => {
//     res.labels.forEach((e, i, arr) => {
//       arr[i] = 'estado ' + e;
//     });
//     console.log(res);
//     let ctx = document.getElementById('myChart').getContext('2d');
//     var data = {
//       labels: res.labels,
//       datasets: [
//         {
//           fill: true,
//           backgroundColor: ['red', 'blue', 'green', 'yellow'],
//           data: res.data,
//           // Notice the borderColor
//           borderColor: ['black', 'black'],
//           borderWidth: [2, 2],
//         },
//       ],
//     };
//     let myChart = new Chart(ctx, {
//       type: 'pie',
//       data: data,
//       options: {
//         responsive: true,
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart',
//         },
//         tooltips: {
//           mode: 'index',
//           intersect: false,
//         },
//         hover: {
//           mode: 'nearest',
//           intersect: true,
//         },
//       },
//     });
//   })
//   .catch(e => console.log(`ocurrio un error: ${e}`));

//chart
