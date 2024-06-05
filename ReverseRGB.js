document.addEventListener('DOMContentLoaded', function() {
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
  const backgroundDiv=document.querySelector('.backgroundDiv');
  if(backgroundDiv){
    const backgroundColor=window.getComputedStyle(backgroundDiv).backgroundColor;
    const invertedColor = invertColor(backgroundColor);

    // Alkalmazd az invertált színt az összes .reverseDiv elemre
    document.querySelectorAll('.reverseDiv').forEach(element => {
      element.style.backgroundColor = invertedColor;
  });
  }

  // Vedd az első .innerDiv elem színét
  const innerDiv = document.querySelector('.innerDiv');
  if (innerDiv) {
      const innerDivColor = window.getComputedStyle(innerDiv).backgroundColor;
      const invertedInnerDivColor = invertColor(innerDivColor);

      // Alkalmazd az invertált színt az összes .reverseDiv elemre (hozzáadva a háttérszínhez)
      document.querySelectorAll('.reverseDiv').forEach(element => {
          element.style.borderColor = invertedInnerDivColor;
      });
  }
}
