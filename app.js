const btnStart = document.querySelector("#btnStart");
const btnStop = document.querySelector("#btnStop");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const mSecond = document.querySelector("#msecond");
const btnReset = document.querySelector("#btnReset");
let saat = 0;
let dakika = 0;
let saniye = 0;
let mSaniye = 0;

btnReset.addEventListener("click", resetTimeOut);
btnStart.addEventListener("click", timer);
btnStop.addEventListener("click", timerStop);

function timer() {
  dakika = parseInt(dakika);
  saniye = parseInt(saniye);
  mSaniye = parseInt(mSaniye);
  mSaniye++;
  if (mSaniye == 99) {
    saniye++;
    mSaniye = 0;
  }
  if (saniye == 60) {
    dakika++;
    saniye = 0;
  }
  if (dakika == 60) {
    saat++;
    dakika = 0;
  }
  hour.textContent = saat;
  minute.textContent = dakika;
  second.textContent = saniye;
  mSecond.textContent = mSaniye;
  hour.textContent = hour.textContent.padStart(2, "0");
  minute.textContent = minute.textContent.padStart(2, "0");
  second.textContent = second.textContent.padStart(2, "0");
  mSecond.textContent = mSecond.textContent.padStart(2, "0");
  timeOut = setTimeout(timer, 10);
}

function timerStop() {
  clearTimeout(timeOut);
}
function resetTimeOut() {
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  mSecond.textContent = "00";
  saat = 0;
  dakika = 0;
  saniye = 0;
  mSaniye = 0;
}