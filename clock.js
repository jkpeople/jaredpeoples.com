(function(d) {
})(document);

var clockElements = makeClockElements(
  'b', 'span', 'span', 'i', 'i', 'i'
);function makeClockElements(tags) {
  var
    clock = d.getElementById('clock'),
    result = [];
  for (var i = 0; tagName = arguments[i]; i++) {
    var element = clock.appendChild(d.createElement(tagName));
    if (tagName === 'i') result.push(element);
  }
  return result;
}

function clockUpdate() {
  var now = new Date();
  clockElements[0].style.transform = 'rotate(' + (
    now.getHours() * 30 + (Math.floor(now.getMinutes() / 12) * 6)
  ) + 'deg)';
  clockElements[1].style.transform = 'rotate(' + (
    now.getMinutes() * 6
  ) + 'deg)';
  clockElements[2].style.transform = 'rotate(' + (
    now.getSeconds() * 6
  ) + 'deg)';
}clockUpdate();
setInterval(clockUpdate, 1000);





































/*
// Javascript is used to set the clock to your computer time.

var currentSec = getSecondsToday();

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
  (".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;
  return Math.round(diff / 1000);
}

var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('title').style.color = random_color;
*/ 
