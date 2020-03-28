const body = document.querySelector("body"),
   clock = body.querySelector(".clock"),
   clockTitle = clock.querySelector("h1");


function getTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  clockTitle.textContent = `${
    hours < 10 ? `0${hours}` : hours
    }:${
    minutes < 10 ? `0${minutes}` : minutes
    }:${
    seconds < 10 ? `0${seconds}` : seconds
    }`;
  setInterval("getTime()", 100);
}

function init() {
    getTime();
}

init();
