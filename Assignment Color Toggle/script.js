// -----Mouse Events-----
const button = document.getElementById('openMenu');
button.addEventListener('mouseover', slideMenuOpen);
const button2 = document.getElementById('popUpMenu');
button2.addEventListener('mouseleave', slideMenuClose);

function slideMenuOpen() {
  document.getElementById("popUpMenu").style.width = "350px";
}
function slideMenuClose() {
  document.getElementById("popUpMenu").style.width = "0px";
}


  
  // -----KeyboardEvent-----

  document.addEventListener("keydown", (selected) => {
    const keyPressed = selected.key;
    if (keyPressed === "1") {
      bodyElement.style.background = "beige";
      homeText();
    } else if (keyPressed === "2") {
      bodyElement.style.background = "red";
      redText();
    } else if (keyPressed === "3") {
      bodyElement.style.background = "yellow";
      yellowText();
    } else if (keyPressed === "4") {
      bodyElement.style.background = "blue";
      blueText();
    }
    return;
  });

  // -----Change Color/Close Menu onclick-----
  
  const backgroundHome = document.getElementById("home");
  const bodyElement = document.body;
  backgroundHome.addEventListener('click',function()
  {bodyElement.style.background = "beige"});
  button2.addEventListener('click',slideMenuClose); //Target ul instead of each li

  const homeText = function(){choosedColor.innerHTML = "Home"};
  backgroundHome.addEventListener('click',homeText);

  const backgroundRed = document.getElementById("red");
  backgroundRed.addEventListener('click',function()
  {bodyElement.style.background = "red"});
  //backgroundRed.addEventListener('click',slideMenuClose);
  
  const redText = function(){choosedColor.innerHTML = "Red"};
  backgroundRed.addEventListener('click',redText);

  const backgroundYellow = document.getElementById("yellow");
  backgroundYellow.addEventListener('click',function()
  {bodyElement.style.background = "yellow"});
  //backgroundYellow.addEventListener('click',slideMenuClose);

  const yellowText = function(){choosedColor.innerHTML = "Yellow"};
  backgroundYellow.addEventListener('click',yellowText);

  const backgroundBlue = document.getElementById("blue");
  backgroundBlue.addEventListener('click',function()
  {bodyElement.style.background = "blue"});
  //backgroundBlue.addEventListener('click',slideMenuClose);

  const blueText = function(){choosedColor.textContent = "Blue"}; //textContent works too
  backgroundBlue.addEventListener('click',blueText);
