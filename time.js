function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  midday = (h >= 12) ? "PM" : "AM";
  m = checkTime(m);
  s = checkTime(s);
   h = (h == 0) ? 12 : ((h > 12) ? (h- 12): h);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s +" "+ midday;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}