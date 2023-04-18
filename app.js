// generate a random hexadecimal color code
function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// calculate the brightness of a color
function colorBrightness(hexColor) {
  // convert the hexColor code to RGB
  const red = parseInt(hexColor.substr(1, 2), 16);
  const green = parseInt(hexColor.substr(3, 2), 16);
  const blue = parseInt(hexColor.substr(5, 2), 16);

  // calculate the brightness of the color based on the human eye's sensitivity to each color
  return (red * 299 + green * 587 + blue * 114) / 1000;
}

// get the .links li elements
const linksUL = document.querySelector(".links");
const links = linksUL.querySelectorAll("li");

// loop through the list items and assign a random background color to each with a text color that contrasts
links.forEach((link) => {
  const backgroundColor = getRandomHexColor();
  link.style.backgroundColor = backgroundColor;

  const brightness = colorBrightness(backgroundColor);
  const textColor = brightness > 128 ? "black" : "white";
  const linkAnchor = link.querySelector("a");
  linkAnchor.style.color = textColor;
});
