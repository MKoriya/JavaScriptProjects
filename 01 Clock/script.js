const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const status = document.querySelector('#status');



window.setInterval(function () {

  var dateObject = new Date();
  var h = dateObject.getHours();
  var m = dateObject.getMinutes();
  var s = dateObject.getSeconds();

  s = s < 10 ? '0' + s : s;
  m = m < 10 ? '0' + m : m;

  if (h >= 12) {
    h = h - 12;
    status.innerText = 'PM';
  };
  h = h == 0 ? h = 12 : h;

  h = h < 10 ? '0' + h : h;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;

}, 1000);