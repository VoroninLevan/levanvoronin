let mMenuRow, mMenuRowHeight;
let mSmallMenuRow, mSmallMenuFlag = false;
let mMenuLeft, mMenuRight;
let menuIcon;



// Onload staff happens here
window.addEventListener('load', function (){

  initMenuElements();
  /* MENU-START */
  alignMainMenuHeight();
  getMenuRowHeight();
  menuIcon.onclick = function () {openCloseDropDownMenu();}
  /* MENU-END */

  /* FOOTER-START */
  alignFootHeight();
  setSocialLineHeight();
  /* FOOTER-END */
});

// Do resize staff here
window.addEventListener('resize', function (){
  getMenuRowHeight();
  setSmallMenuHeight();
  alignMainMenuHeight();
  alignFootHeight();
  hideDropDownMenu();
});

// Inits menu elements
function initMenuElements (){
  mMenuLeft = elementById("m_menu_left");
  mMenuRight = elementById("m_menu_right");
  // For small menu:
  mMenuRow = elementById("main_menu_row");
  mSmallMenuRow = elementById("small_menu_row");
  menuIcon = elementById("menu");
}

function setSmallMenuHeight (){
  mSmallMenuRow.style.marginTop = mMenuRowHeight + "px";
}

// Aligns right part of main menu with left one
function alignMainMenuHeight (){
  mMenuRight.style.height = mMenuLeft.offsetHeight + "px";
}

// Gets height of menu row
function getMenuRowHeight (){
  mMenuRowHeight = mMenuRow.offsetHeight;
}

// Opens/closes drop-down menu depends on flag
function openCloseDropDownMenu (){
  if (!mSmallMenuFlag) {
    setSmallMenuHeight();
    mSmallMenuRow.style.visibility = "visible";
    mSmallMenuFlag = true;
  }else {
    mSmallMenuRow.style.visibility = "hidden";
    mSmallMenuFlag = false;
  }
}

// Hides drop-down menu if viewport size is more than 992px + flag set to true
function hideDropDownMenu (){
  if (window.innerWidth > 992 && mSmallMenuFlag) {
    mSmallMenuRow.style.visibility = "hidden";
    mSmallMenuFlag = false;
  }
}

// Aligns right with left footer parts by height
function alignFootHeight (){
  elementById("f_right").style.height = elementById("f_left").offsetHeight + "px";
}

// Sets social element line-height to align center vertically
function setSocialLineHeight (){
  elementById("social_link").style.lineHeight = elementById("f_right").offsetHeight + "px";
}

// Finds element by id
function elementById (id){
  return document.getElementById(id);
}
