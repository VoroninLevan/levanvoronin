let overlay, popUp, popClose;
let eduPort, skillPort, achivePort,
popEducation, popSkills, popAchivements;

let closeFlag;

let portIds = ["education", "skills", "achivements"];

let dBlock = "display: block;", dNone = "display: none;";
let vVis = "visibility: visible;", vHid = "visibility: hidden;";
let height = "height: ", px = "px;";


// Onload staff happens here
window.addEventListener('load', function (){
  initElements();
  eduPort.addEventListener("click", function(){
    openPopUp(1);
  }, false);
  skillPort.addEventListener("click", function(){
    openPopUp(2);
  }, false);
  achivePort.addEventListener("click", function(){
    openPopUp(3);
  }, false);

  popClose.addEventListener("click", closePopUp, false);
  overlay.addEventListener("click", closePopUp, false);
});

// Do resize staff here
window.addEventListener('resize', function (){
  //alignBitHeight();
});

function initElements () {
  initTiles();
  initPopUp();
  initPopElements();
}

// Initializes pop-up elements
function initPopUp (){
  overlay = elementById("scr_overlay");
  popUp = elementById("pop_up");
  popClose = elementById("pop_close");
}

// Initializes tile vars
function initTiles (){
  eduPort = elementById("education");
  skillPort = elementById("skills");
  achivePort = elementById("achivements");
}

function initPopElements (){
  popEducation = elementById("pop_education");
  popSkills = elementById("pop_skills");
  popAchivements = elementById("pop_achievements");
}

//Opens pop-up
function openPopUp (option){
  toggleClass(overlay, "show", true);
  toggleClass(popUp, "show", true);

  switch (option) {
    case 1:
    toggleClass(popEducation, "pop-invisible", false);
    toggleClass(popEducation, "pop-visible", true);
    closeFlag = 1;
    break;
    case 2:
    toggleClass(popSkills, "pop-invisible", false);
    toggleClass(popSkills, "pop-visible", true);
    closeFlag = 2;
    break;
    case 3:
    toggleClass(popAchivements, "pop-invisible", false);
    toggleClass(popAchivements, "pop-visible", true);
    closeFlag = 3;
    break;
    default:
    break;
  }
}

function closePopUp (){

  switch (closeFlag) {
    case 1:
    toggleClass(popEducation, "pop-invisible", true);
    toggleClass(popEducation, "pop-visible", true);
    break;
    case 2:
    toggleClass(popSkills, "pop-invisible", true);
    toggleClass(popSkills, "pop-visible", false);
    break;
    case 3:
    toggleClass(popAchivements, "pop-invisible", true);
    toggleClass(popAchivements, "pop-visible", false);
    break;
    default:
    break;
  }

  toggleClass(overlay, "show", false);
  toggleClass(popUp, "show", false);
}

// Align about height
function alignBitHeight (){
  if (window.innerWidth > 992) {
    elementById("right_bit").style.height = elementById("left_bit").offsetHeight + "px";
  }
}

// Toggle / untoggle class
function toggleClass(element, className, toggle){
  if (toggle) {
    element.classList.toggle(className);
  } else {
    element.classList.remove(className);
  }
}

// Finds element by id
function elementById (id){
  return document.getElementById(id);
}
