let drums = document.querySelectorAll(".drum");

// detecting button presses

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml)
  });
}


// detecting keyboard presses


document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
          var crash = new Audio("./sounds/crash.wav");
          crash.play();
          break;
        case "a":
          var kickbass = new Audio("./sounds/kick-bass.wav");
          kickbass.play();
          break;
        case "s":
          var snare = new Audio("./sounds/snare.wav");
          snare.play();
          break;
        case "d":
          var tom1 = new Audio("./sounds/tom-1.wav");
          tom1.play();   
          break;
        case "j":
          var tom2 = new Audio("./sounds/tom-2.wav");
          tom2.play();   
          break;
        case "k":
          var tom3 = new Audio("./sounds/tom-3.wav");
          tom3.play();
          break;
        case "l":
          var tom4 = new Audio("./sounds/tom-4.wav");
          tom4.play();
          break;
        default: console.log(buttonInnerHtml);
          break;
      }
}

function buttonAnimation (currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add ("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}