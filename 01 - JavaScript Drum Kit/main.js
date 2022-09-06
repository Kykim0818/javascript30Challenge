window.addEventListener("keypress", (e) => {
  const dataKey = getDataKeys(e.key);
  const keyElement = getKeyElement(dataKey);
  keyElement.classList.add("playing");
  //   keyElement.classList.add("sound");
  removeClassName(keyElement);

  const audioElement = getAudioElement(dataKey);
  audioElement.play();
});

const removeClassName = (element) => {
  window.addEventListener("keyup", () => {
    element.classList.remove("playing");
    // element.classList.remove("sound");
  });
};

const playSound = (e) => {};

const getDataKeys = (key) => {
  switch (key) {
    case "a":
    case "A":
      return 65;
    case "s":
    case "S":
      return 83;
    case "d":
    case "D":
      return 68;
    case "f":
    case "F":
      return 70;
    case "g":
    case "G":
      return 71;
    case "h":
    case "H":
      return 72;
    case "j":
    case "J":
      return 74;
    case "k":
    case "K":
      return 75;
    case "l":
    case "L":
      return 76;

    default:
      return 0;
  }
};

const getKeyElement = (dataKey) => {
  const collections = document.getElementsByClassName("key");
  for (let i = 0; i < collections.length; i++) {
    if (String(dataKey) === collections.item(i).dataset.key) {
      return collections.item(i);
    }
  }
};

const getAudioElement = (dataKey) => {
  const list = document.querySelectorAll("audio");
  for (let i = 0; i < list.length; i++) {
    if (list[i].dataset.key === String(dataKey)) {
      return list[i];
    }
  }
};
