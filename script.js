//Global Variables
let screenNumber = 1;
let zIndexCounter = 0;
let arrScreens = [];
let arrmom = [];
let arrScreensCounter = 0;
let biggestZ = 0;
let biggerCounter = 0;



//document.getElementById("about").onclick = function () {
  //document.getElementById("opacity").style.display="unset";
//}

//When change ? stop resize>>>  width,height
    //          stop drag>>>>>  position - top , left
    //          click/enlarge>  zIndex
    //          doesnt change>  border , screen name , url

class Screen {
  constructor (urlScreen , screenNum , zIndexSaved) {
    this.urlScreen = urlScreen;
    this.screenNum = screenNum;
    this.widthScreen = "40vw";
    this.heightScreen = "60vh";
    this.zIndexSaved = zIndexSaved;
    this.top = "calc(50% - 38vh)";
    this.left = "calc(50% - 20vw)";
  }
}

//Header Scripts
  //Main Header = Refresh , localsotrage deleted , arrscreens reset , localstorage.saved ="false"
  document.getElementsByTagName("h1")[0].onclick = function () {
      window.location.reload(true);
      for(let counter4 = 0; counter4<arrScreens.length; counter4++)
      {
        localStorage.removeItem(['urlScreen'+counter4]);
        localStorage.removeItem(['screenNum'+counter4]);
        localStorage.removeItem(['widthScreen'+counter4]);
        localStorage.removeItem(['heightScreen'+counter4]);
        localStorage.removeItem(['zIndexSaved'+counter4]);
        localStorage.removeItem(['top'+counter4]);
        localStorage.removeItem(['left'+counter4]);
      }
      arrScreens = [];
      localStorage.saved = "false";
  }


//3 First screens
if(localStorage.saved != "true") //Non saved mode
{
  createScreenObject('https://www.imdb.com/');
  createScreenObject('https://en.wikipedia.org/wiki/Main_Page');
  createScreenObject('https://www.google.com/webhp?igu=1');

setTimeout(function(){document.getElementsByClassName("num1")[0].style.left = "1vw";},1)
setTimeout(function(){document.getElementsByClassName("num1")[0].style.top = "19vh";},1)
arrScreens[0].left = "1vw";
arrScreens[0].top = "19vh";
setTimeout(function(){document.getElementsByClassName("num1")[0].style.zIndex = "4";},1)
setTimeout(function(){document.getElementsByClassName("num2")[0].style.top = "33vh";},1)
setTimeout(function(){document.getElementsByClassName("num2")[0].style.left = "8vw";},1)
arrScreens[1].left = "8vw";
arrScreens[1].top = "33vh";
setTimeout(function(){document.getElementsByClassName("num3")[0].style.top = "23vh";},1)
setTimeout(function(){document.getElementsByClassName("num3")[0].style.left = "57vw";},1)
arrScreens[2].left = "57vw";
arrScreens[2].top = "23vh";
}


//Full Screen
  let counterFullScreen = 0;
  var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
  counterFullScreen++;
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  counterFullScreen++;
}

document.getElementById("fullScreen").onclick = function () {
  if(counterFullScreen%2==0) {
    openFullscreen();
  }
  else {
    closeFullscreen();
  }
}


  //About = onBoarding = First Time
  let createOpacity2;
  function applyOnBoarding () {
    let board = document.getElementById("onBoarding");
    board.style.display = "unset";
    createOpacity2 = document.createElement("div");
    createOpacity2.style.position = "absolute";
    createOpacity2.style.zIndex = 100000;
    createOpacity2.style.width = "100vw";
    createOpacity2.style.height = "100vh";
    createOpacity2.style.left = "0px";
    createOpacity2.style.top = "0px";
    createOpacity2.style.backgroundColor = "black";
    createOpacity2.style.opacity = "0.4";
    document.getElementsByTagName("body")[0].appendChild(createOpacity2); 

    document.getElementById("onBroadingX").onclick = function () {
      createOpacity2.remove();
      board.style.display = "none";
    }

    document.getElementById("start").onclick = function () {
      createOpacity2.remove();
      board.style.display = "none";
    }

  }
  
  document.getElementById("about").onclick = function () {
    applyOnBoarding();
  }



  //Options
    //open menu
  let optionsButton = document.getElementById("mainOption");
  let optionsExtension = document.getElementById("optionsExtension");
  optionsButton.onmouseover = function () {
      optionsExtension.style.display = "unset";
  }

  optionsButton.onmouseleave = function () {
    optionsExtension.style.display = "none";
  }

  optionsExtension.onmouseover = function () {
    optionsExtension.style.display = "unset";
  }

  optionsExtension.onmouseleave = function () {
    optionsExtension.style.display = "none";
  }

  optionsExtension.onclick = function () {
    optionsExtension.style.display = "none";
  }

    //Clicked on save mode
    if(localStorage.getItem("saved") == "true")
    {
     
      $('.screen').remove();
      //How much screens we have by Local storage
let m =-9;
for(let key in localStorage)
{
  m++;
}
m = m/7;

//ReCreate the arrScreens array to default by m variable(let)
  arrScreens = [];

//inital the arrscreens to Screen Class objcts
let countYor;
  for(let yor = 0; yor<m; yor++)
  {
    arrScreens[yor] = new Screen ("something");
    arrScreens[yor].screenNum = "some2";
    arrScreens[yor].zIndexSaved = "some5";
    countYor = yor;
  }
  

  for(let key in localStorage)
  {
    if(key.slice(-1) == "1" || key.slice(-1) == "2" ||key.slice(-1) == "3" ||key.slice(-1) == "4" ||key.slice(-1) == "5"
    ||key.slice(-1) == "5"||key.slice(-1) == "6"||key.slice(-1) == "7"||key.slice(-1) == "8" ||key.slice(-1) == "9"
    ||key.slice(-1) == "0")
    {
      arrScreens[parseInt(key.slice(-1))].urlScreen = localStorage.getItem("urlScreen"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].screenNum = localStorage.getItem("screenNum"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].widthScreen = localStorage.getItem("widthScreen"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].heightScreen = localStorage.getItem("heightScreen"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].zIndexSaved = localStorage.getItem("zIndexSaved"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].top = localStorage.getItem("top"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].left = localStorage.getItem("left"+key.slice(-1));
    }
  }

  //make empty items setted as "deleted"
  for(let check = 0; check<arrScreens.length; check++)
  {
    if(arrScreens[check].urlScreen == "undefined")
    {
      arrScreens[check] = "deleted";
    }
  }
 
  let c1 =0;

  for(let check2 = 0; check2<arrScreens.length; check2++)
  {
    if(arrScreens[check2] != "deleted")
    {
      //createScreenObject(arrScreens[check2].urlScreen);
      arrmom[c1] = arrScreens[check2].urlScreen;
      c1++;
    }
  }

  screenNumber = 1;

  for(let d = 0; d<arrmom.length; d++)
  {
    createScreenObject(arrmom[d]);
  }

  for(let key in localStorage)
  {
    if(key.slice(-1) == "1" || key.slice(-1) == "2" ||key.slice(-1) == "3" ||key.slice(-1) == "4" ||key.slice(-1) == "5"
    ||key.slice(-1) == "5"||key.slice(-1) == "6"||key.slice(-1) == "7"||key.slice(-1) == "8" ||key.slice(-1) == "9"
    ||key.slice(-1) == "0")
    {
      arrScreens[parseInt(key.slice(-1))].urlScreen = localStorage.getItem("urlScreen"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].screenNum = localStorage.getItem("screenNum"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].zIndexSaved = localStorage.getItem("zIndexSaved"+key.slice(-1));

      arrScreens[parseInt(key.slice(-1))].widthScreen = localStorage.getItem("widthScreen"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].heightScreen = localStorage.getItem("heightScreen"+key.slice(-1));

      arrScreens[parseInt(key.slice(-1))].top = localStorage.getItem("top"+key.slice(-1));
      arrScreens[parseInt(key.slice(-1))].left = localStorage.getItem("left"+key.slice(-1));
    }
  }

 setTimeout(() => {
  for(let counter9=0; counter9<arrScreens.length; counter9++)
  { 
    if(arrScreens[counter9] != "deleted")
    {
      document.getElementsByClassName("screen")[counter9].style.top = arrScreens[counter9].top;
      document.getElementsByClassName("screen")[counter9].style.left = arrScreens[counter9].left;
      document.getElementsByClassName("screen")[counter9].style.width = arrScreens[counter9].widthScreen;
      document.getElementsByClassName("screen")[counter9].style.height= arrScreens[counter9].heightScreen;
    }
  }
 }, 100);

    }

    //explain save mode - black div
    let explainSave = document.createElement("div");
    let save1 = document.getElementById("save");
    save1.onmouseenter = function () {
      explainSave.innerHTML = "Keep the current state you use Webager next time. Click on the logo or clear all button for cancel.";
      explainSave.style.position = "absolute";
      explainSave.style.top = "20vh";
      explainSave.style.zIndex = "1000000";
      explainSave.style.right = "10vw";
      explainSave.style.width = "15vw";
      explainSave.style.backgroundColor = "white";
      explainSave.style.height = "9vh";
      explainSave.style.border = "2px solid black";
      document.getElementsByTagName("nav")[0].appendChild(explainSave);
    }

    save1.onmouseleave = function () {
      explainSave.remove();
    }

    save1.onclick = function () {
      localStorage.saved = "true";
      for(let lol = 0; lol<arrScreens.length; lol++)
      {
        if(arrScreens[lol] != "deleted")
        {
          localStorage.number = arrScreens[lol].screenNum;
          break;
        }
      }


      if(document.getElementsByClassName("screen")[0] == undefined)
       {
        localStorage.number = "nothing";
       }

      for(let counter3 = 0; counter3<arrScreens.length; counter3++)
      {
        localStorage['urlScreen'+counter3] = arrScreens[counter3].urlScreen;
        localStorage['screenNum'+counter3] = arrScreens[counter3].screenNum;
        localStorage['widthScreen'+counter3] = arrScreens[counter3].widthScreen;
        localStorage['heightScreen'+counter3] = arrScreens[counter3].heightScreen;
        localStorage['zIndexSaved'+counter3] = arrScreens[counter3].zIndexSaved;
        localStorage['top'+counter3] = arrScreens[counter3].top;
        localStorage['left'+counter3] = arrScreens[counter3].left;
      }
    
    }


    //templates - buting mode
    document.getElementById("buy").onclick = function () {
      document.getElementById("clearAll").click();
      createScreenObject("https://www.aliexpress.com/");
      createScreenObject("https://www.amazon.com/");
      createScreenObject("https://www.ebay.com/");
      
setTimeout(function(){document.getElementsByClassName("num1")[0].style.left = "1vw";},1)
setTimeout(function(){document.getElementsByClassName("num1")[0].style.top = "19vh";},1)
arrScreens[0].left = "1vw";
arrScreens[0].top = "19vh";
setTimeout(function(){document.getElementsByClassName("num1")[0].style.zIndex = "4";},1)
setTimeout(function(){document.getElementsByClassName("num2")[0].style.top = "33vh";},1)
setTimeout(function(){document.getElementsByClassName("num2")[0].style.left = "8vw";},1)
arrScreens[1].left = "8vw";
arrScreens[1].top = "33vh";
setTimeout(function(){document.getElementsByClassName("num3")[0].style.top = "23vh";},1)
setTimeout(function(){document.getElementsByClassName("num3")[0].style.left = "57vw";},1)
arrScreens[2].left = "57vw";
arrScreens[2].top = "23vh";
    }

    //clear all
    document.getElementById("clearAll").onclick = function () {
      $('.screen').remove();
      screenNumber = 1;
      for(let lol3 = 0; lol3<arrScreens.length; lol3++) //enlarge button problem, without it no probem. fix save proble. this is issue
      {
        arrScreens[lol3] = "deleted";         
      }
      
      for(let counter4 = 0; counter4<arrScreens.length; counter4++)
      {
        localStorage.removeItem(['urlScreen'+counter4]);
        localStorage.removeItem(['screenNum'+counter4]);
        localStorage.removeItem(['widthScreen'+counter4]);
        localStorage.removeItem(['heightScreen'+counter4]);
        localStorage.removeItem(['zIndexSaved'+counter4]);
        localStorage.removeItem(['top'+counter4]);
        localStorage.removeItem(['left'+counter4]);
        //arrScreens[counter4] = "deleted";
        biggestZ = 0;
      }
      localStorage.saved = "false";
    }


//Input domain names + Activate create screens
  let inputDomains = document.getElementById("inputDomains");
  document.getElementById("addScreen").onclick = function () {
      inputDomains.style.display = "unset";
      document.getElementById("inputDomainName").focus();
      //Cancel button
      document.getElementById("cancelSubmitDomain").onclick = function () {
        inputDomains.style.display = "none";
        document.getElementById("inputDomainName").value = "";
      }
  }

  //In case of enter key
  let submitDomain = document.getElementById("submitDomain");
  document.getElementById("inputDomainName").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitDomain.click();
    }
  });

  submitDomain.onclick = function () {
      let urlDomain = document.getElementById("inputDomainName").value;
      if(urlDomain.includes(".") == true && urlDomain.length>2) {
        if(urlDomain.includes("http")==true) { //Check if the inpus is URL
          if(urlDomain.includes("www") == false)
          {
            if(urlDomain.includes("https") == true)
            {
              urlDomain = urlDomain.slice(0,5) + "://www." + urlDomain.slice(8,urlDomain.length-1);
            }
            else {
              urlDomain = urlDomain.slice(0,4) + "://www." + urlDomain.slice(7,urlDomain.length-1);
            }
              
          }
            createScreenObject(urlDomain);
            document.getElementById("inputDomainName").value = "";
            inputDomains.style.display = "none";
        }

        else {
            urlDomain = "http://www." + urlDomain; //It's Domain Name
            createScreenObject(urlDomain);
            document.getElementById("inputDomainName").value = "";
            inputDomains.style.display = "none";
        }
      }
      else {
          alert("The input is probably wrong. Please try again."); 
      }
    }//)



//Create Screen
function createScreenObject (urlDomain) {
  arrScreens[arrScreensCounter] = new Screen(urlDomain,screenNumber,zIndexCounter);
  arrScreensCounter++;
  let newDiv = document.createElement("div");  //Screen - main div  
  newDiv.classList.add("screen");
  newDiv.id = screenNumber - 1;
  newDiv.style.zIndex = zIndexCounter;
  newDiv.classList.add("num" + screenNumber);
  zIndexCounter++;

  //Transition  - Fix Bag
  setTimeout (function () {
    let rar = 0;
for(let z = 0; z<arrScreens.length; z++) {   
     if(rar<arrScreens[z].zIndexSaved) 
     {
       rar =arrScreens[z].zIndexSaved 
      }                 
    }
    rar++;
    newDiv.style.zIndex = rar;
    newDiv.style.bottom= "calc(50% - 38vh)";
    newDiv.style.left= "calc(50% - 20vw)";
    newDiv.style.width= "40vw";
    newDiv.style.height= "60vh";
    newDiv.style.transition= "0.7s";
  },0.1)
  setTimeout (function () {
    newDiv.style.transition="none";
  },800)


  //Iframe inside div
  let postFrame = document.createElement("iframe");
  postFrame.setAttribute("src", urlDomain);
  newDiv.appendChild(postFrame);

  //Close button
  let close = document.createElement("div");
  close.classList.add("close");
  close.id = screenNumber - 1;
  close.innerText="X";
  newDiv.appendChild(close);
  close.onclick = function (event) {
    newDiv.remove();
    let deleteCell = parseInt(event.target.id);
    arrScreens[deleteCell] = "deleted";
    //delete arrScreens[deleteCell]; //leave empty cells // bug - after delte item - no transition
  }

  //Enlarge button
  let goToResize = document.createElement("div");
  goToResize.style.position = "absolute";
  goToResize.style.top = "-200vh";
  goToResize.style.left = "-200vw";
  goToResize.id = "forResize";
  let aTag = document.createElement("a");
  aTag.setAttribute("href" , "#forResize");
  let bigger = document.createElement("img");
  bigger.classList.add("enlargeButton");
  bigger.id = arrScreens.length - 1;
  bigger.setAttribute("src" , "enlargeButton2.png");
  aTag.appendChild(bigger);
  newDiv.appendChild(aTag);
  let createOpacity;

  bigger.onclick = function (event) {
    if(biggerCounter%2 == 0)
    {
      document.getElementsByTagName("body")[0].appendChild(goToResize); 
      document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
      biggestZ3 = 500000;
      createOpacity = document.createElement("div");
      createOpacity.style.position = "absolute";
      createOpacity.style.zIndex = biggestZ3; //500k
      createOpacity.style.width = "100vw";
      createOpacity.style.height = "100vh";
      createOpacity.style.left = "0px";
      createOpacity.style.top = "0px";
      createOpacity.style.backgroundColor = "black";
      createOpacity.style.opacity = "0.75";
      document.getElementsByTagName("body")[0].appendChild(createOpacity);
      newDiv.style.top = "4.2vh";
      newDiv.style.left = "5vw";
      newDiv.style.width = "90vw";
      newDiv.style.height = "90vh";
      newDiv.style.zIndex = "1000000"; //1 mil
      close.style.display = "none";
      $('.screen').draggable( "disable");
      $(".screen").resizable('destroy');
      arrScreens[parseInt(bigger.id)].zIndexSaved = event.toElement.parentElement.style.zIndex;
      biggerCounter++;
    }

    else {
      document.getElementsByTagName("body")[0].style.overflow = "unset"; 
      createOpacity.remove();
      newDiv.style.width = arrScreens[parseInt(bigger.id)].widthScreen;
      newDiv.style.height = arrScreens[parseInt(bigger.id)].heightScreen;
      if(arrScreens[parseInt(bigger.id)].top.toString().includes("vh")==true)
      {
        newDiv.style.top = arrScreens[parseInt(bigger.id)].top;
      }
      else {
        newDiv.style.top = newDiv.style.top = arrScreens[parseInt(bigger.id)].top;
      }
      if("calc(50% - 38vh)" == newDiv.style.top )
        {
          newDiv.style.top = "30vh";
          biggestZ = 0;
        }
      newDiv.style.bottom = "unset"; //remove top
      newDiv.style.left = arrScreens[parseInt(bigger.id)].left; //Track all the time
      newDiv.style.zIndex = arrScreens[parseInt(bigger.id)].zIndexSaved;
      close.style.display = "initial";
      $('.screen').draggable("enable");
      $('.screen')
      .resizable({handles: "all" ,autoHide:true,
        stop: function( event, ui ) {
          if(parseInt(event.target.offsetTop)<125)
          {
            event.target.style.top = '17vh'; 
          }
          arrScreens[parseInt(event.target.id)].widthScreen = event.target.style.width;
          arrScreens[parseInt(event.target.id)].heightScreen = event.target.style.height;
          arrScreens[parseInt(event.target.id)].top = event.target.style.top;
          arrScreens[parseInt(event.target.id)].left = event.target.style.left;
        }
        });
      goToResize.remove();
      biggerCounter++;
    }
  }
  //Screen Number
  let screenName = document.createElement("div");
  screenName.classList.add("screenName");
  screenNamePart1 = urlDomain.indexOf(".");
  screenNamePart1+=1;
  screenNamePart2 = urlDomain.indexOf(".",screenNamePart1);
  screenNamePart3 = urlDomain.slice(screenNamePart1,screenNamePart2); //Website Name
  screenName.innerText= "Screen " + (screenNumber) + " - " + screenNamePart3;
  newDiv.appendChild(screenName);

  document.getElementsByTagName("main")[0].appendChild(newDiv);
  screenNumber++;

  //Resizble + Draggable
  let resizeOpts = {handles: "all" ,autoHide:true};
  $('.screen')
  .draggable({
  stop: function( event, ui ) {
      //Don't pass the grey line. <hr/> tag. //Fix it !
      if(parseInt(event.target.offsetTop)<125)
      {
        event.target.style.top = '17vh'; 
      }

      arrScreens[parseInt(event.target.id)].top = event.target.style.top;
      arrScreens[parseInt(event.target.id)].left = event.target.style.left;
  }
  })
  .resizable({handles: "all" ,autoHide:true,
    stop: function( event, ui ) {
      if(parseInt(event.target.offsetTop)<125)
      {
        event.target.style.top = '17vh'; 
      }
      arrScreens[parseInt(event.target.id)].widthScreen = event.target.style.width;
      arrScreens[parseInt(event.target.id)].heightScreen = event.target.style.height;
      arrScreens[parseInt(event.target.id)].top = event.target.style.top;
      arrScreens[parseInt(event.target.id)].left = event.target.style.left;
    }
    }); // Dont pass grey

  //Screen Zindex always be in top after any click
  $(".screen").mousedown(function(e){ //remove = also remove in arr
    
    for(let counter1 = 0; counter1<arrScreens.length; counter1++)
    {
      if(arrScreens[counter1] != "deleted") 
      {
        biggestZ = Math.max(biggestZ,arrScreens[counter1].zIndexSaved);
      }
    }
    biggestZ+=5;
    arrScreens[0].zIndexSaved = biggestZ;
    
    if(e.toElement.className == "screen ui-draggable ui-resizable")
    {
      e.toElement.style.zIndex = biggestZ;
    }
    
    else {
      e.toElement.parentElement.style.zIndex = biggestZ;
    }
  });
}

//First time on website = webager pop up
if(localStorage.firstWebager == null)
{
  document.getElementById("about").click();
  localStorage.firstWebager = "yes";
}