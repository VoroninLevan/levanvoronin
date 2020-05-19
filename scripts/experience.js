let collapsibleList;

// Onload staff happens here
window.addEventListener('load', function (){
  initCollapsibles();
  alignBitHeight();
});

// Do resize staff here
window.addEventListener('resize', function (){
  alignBitHeight();
});

function initCollapsibles (){
  collapsibleList = document.getElementsByClassName("job-collapse");

  for (let i = 0; i < collapsibleList.length; i++) {
    collapsibleList[i].addEventListener("click", function() {
    this.classList.toggle("fall-down");
    let details = this.nextElementSibling;
    details.style.maxHeight ? details.style.maxHeight = null : details.style.maxHeight = details.scrollHeight + "px";
  });
  }
}

// Align about height
function alignBitHeight (){
  if (window.innerWidth > 992) {
    elementById("right_bit").style.height = elementById("left_bit").offsetHeight + "px";
  }
}

// Sets css to the element
function setStyle (element, cssString){
  element.style.cssText = cssString;
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
