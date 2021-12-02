setInterval(setClock, 1000) 

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds()
  const minuteRatio = (secondRatio + currentDate.getMinutes())
  const hourRatio = (minuteRatio + currentDate.getHours())
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()




