document.addEventListener('DOMContentLoaded', function() {
  const gridColor = window.getComputedStyle(document.getElementById('grid')).backgroundColor;
  const invertedColor = invertColor(gridColor);
  document.getElementById('grid2').style.backgroundColor = invertedColor;

  // Manuális idő beállítása

  const colorChangeInterval = 5; // 1000ms = 1 másodperc
  setInterval(changeBackgroundColor, colorChangeInterval);
});

function invertColor(rgbColor) {
  const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
      return rgbColor;
  }
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);
  const invertedR = 255 - r;
  const invertedG = 255 - g;
  const invertedB = 255 - b;
  return `rgb(${invertedR}, ${invertedG}, ${invertedB})`;
}

function changeBackgroundColor() {
  const gridColor = window.getComputedStyle(document.getElementById('grid')).backgroundColor;
  const invertedColor = invertColor(gridColor);
  document.getElementById('grid2').style.backgroundColor = invertedColor;
}
