function changeColor() {
  let red = 255;
  let green = 0;
  let blue = 0;
  let time=60;
  let timevibration=20;
  
  function nextColor() {

    /*
    255,0,0->
    255,255,0->
    0,255,0->
    0,255,255->
    0,0,255->
    255,0,255->
    255,0,0
    */

    if(red==255 && green <255 && blue==0)
      {
        green++;
      }
    else if(red>0 && green==255 && blue==0)
      {
        red--;
      }
    else if(red==0 && green==255 && blue<255)
      {
        blue++;
      }
    else if(red==0 && green>0 && blue==255)
      {
        green--;
      }
    else if(red<255 && green==0 && blue==255)
      {
        red++;
      }
    else if(red==255 && green==0 && blue>0)
      {
        blue--;
      }


      var rgbColor ='rgb(255,255,255)';
      document.querySelectorAll('.backgroundDiv, .innerDiv').forEach(element=>{
        element.style.backgroundColor=rgbColor;
      });

      
      sleep(timevibration).then(()=>{


      rgbColor ='rgb(0,0,0)';
      document.querySelectorAll('.backgroundDiv, .innerDiv').forEach(element=>{
        element.style.backgroundColor=rgbColor;
      });

      sleep(timevibration).then(()=>{

     rgbColor = `rgb(${red}, ${green}, ${blue})`;

    document.querySelectorAll('.backgroundDiv, .innerDiv').forEach(element=>{
      element.style.backgroundColor=rgbColor;
    });

   // document.getElementById('grid').style.backgroundColor = rgbColor;

    setTimeout(nextColor, time); // Változtasd a színt 1 másodpercenként
  });
  });


    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }


  nextColor(); // Indítsd el a színváltoztatást

}

changeColor();

