let $pick = (selector) => document.querySelectorAll(selector),
  chars = $pick(".splashScreen_char"),
  fillChar = $pick(".fillChar"),
  svg = $pick("svg#splashScreen")[0],
  text = $pick("text.hide")[0];

let time = {
  5000: () => (svg.style.backgroundSize = "20px 20px"),
  5500: () => fillChar[0].classList.add("splashScreen_char_fillOnDrop"),
  6000: () => fillChar[1].classList.add("splashScreen_char_fillOnDrop"),
  6500: () => fillChar[2].classList.add("splashScreen_char_fillOnDrop"),
  7000: () => text.classList.remove("hide"),
};
for (let j = 0; j < Object.keys(time).length; j++) {
  setTimeout(Object.values(time)[j], +Object.keys(time)[j]);
}

for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    chars[i].classList.add("splashScreen_char_draw");
  }, 1000 * i);
}
