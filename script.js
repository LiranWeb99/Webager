//Global Variables
let addScreen = document.getElementById("addScreen");
let arrScreens = [];
let screenNumber = 0;
let zindex = 1;
let topUp = 0.7;
let leftUp = 0;
let above = 50;


//Menu
document.getElementsByTagName("h1")[0].onclick = function () {
  window.location.reload(true);
}

        //Full Screen
        let viewFullScreen = document.getElementById("fullScreen");
        if (viewFullScreen) {
        viewFullScreen.addEventListener("click", function () {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
        }, false);
        }

        //Explained ?
        document.getElementById("explained").onclick = function () {
          localStorage.removeItem("firstTime1");
          window.location.reload(true);
        }

        //Templates
        document.getElementById("templates").onclick = function () {
          alert("Coming Soon")
        }

        //ClearAll
        document.getElementById("clearAll").onclick = function () {
          for(let i1 = 0; i1<25; i1++)
          {
            document.getElementsByTagName("main")[0].removeChild(document.getElementsByClassName("screen")[0]);
          }
        }


        
//Class
class Screen {
  constructor (urlScreen , screenNum, zindex) {
      this.screenNum = screenNum;
      this.urlScreen = urlScreen;
      this.widthScreen = "10vw";
      this.heighScreen = "10vh";
      this.border = {
          default : 5,
          color : "black",
          type : "solid"
      }
    this.zindex = zindex;
  }
}

function createScreenObject (urlScreen , screenNumber , zindex) {
  //Create object + array of objects
  let newObject = new Screen (urlScreen , screenNumber+1 , zindex);
  arrScreens[screenNumber] = newObject;

  //Create Div Border include Iframe
  let newDiv = document.createElement("div");
  newDiv.classList.add("screen");
  newDiv.style.zIndex = zindex;
  zindex++; 
  newDiv.style.left+=leftUp+"vw";
  newDiv.style.top=topUp+"vh";
  document.getElementsByTagName("main")[0].appendChild(newDiv);
  leftUp+=34.2;
  if(leftUp==(34.2*3))
  {
    leftUp=0;
    topUp+=63;
  }

  let postFrame = document.createElement("iframe");
  postFrame.setAttribute("src", urlScreen);
  newDiv.appendChild(postFrame);



  //Close Div-window Button
  let close = document.createElement("div");
  close.innerText="X";
  newDiv.appendChild(close);

   //Screen name - Center
   let screenName = document.createElement("div");
   screenNamePart1 = urlScreen.indexOf(".");
   screenNamePart1+=1;
   screenNamePart2 = urlScreen.indexOf(".",screenNamePart1);
   screenNamePart3 = urlScreen.slice(screenNamePart1,screenNamePart2); //Website Name
   screenName.innerText= "Screen " + (screenNumber+1) + " - " + screenNamePart3;
   newDiv.appendChild(screenName);

  //Enlarge Button
  let bigger = document.createElement("img");
  bigger.setAttribute("src" , "enlargeButton2.png");
  newDiv.appendChild(bigger);

  //Resizable + Draggable
  let resizeOpts = { 
    handles: "all" ,autoHide:true
  }; 
  $('.screen')
.draggable({
  stop: function( event, ui ) {
      if(parseInt(event.target.offsetTop)<-1)
      {
        event.target.style.top = '0px'; //Don't pass the grey line. <hr/> tag.
      }
  } 
})
.resizable(resizeOpts);

$('.screen')
.resizable({
  start: function(e, ui) {
    alert('resizing started');
  },
  resize: function(e, ui) {
  
  },
  stop: function(e, ui) {
    alert('resizing stopped');
  }
});
}



//First Time
if(localStorage.getItem("firstTime1") == null) {
  document.getElementById("firstTimeDiv").style.display = "block";
  let video = document.getElementsByTagName("video")[0];
  let continue1 = document.getElementById("continue");
  let downloadAndPatch = document.getElementsByClassName("downloadAndPatch");
  let skipDownload = document.getElementById("skipDownload");
  let downloadPatch = document.getElementById("downloadPatch");
  let startWebager = document.getElementById("startWebager");
  let pPatch = document.getElementById("pPatch");

  continue1.onclick = function () {
    video.style.display = "none";
    continue1.style.display = "none";
    downloadAndPatch[0].style.display = "inherit";
    downloadAndPatch[1].style.display = "inherit";
    downloadAndPatch[2].style.display = "inherit";
  }

  skipDownload.onclick = function () {
    skipDownload.style.display = "none";
    pPatch.style.display = "none";
    downloadPatch.style.display = "none";
    startWebager.style.display = "inherit";
  }

  downloadPatch.onclick = function () {
    skipDownload.style.display = "none";
    pPatch.style.display = "none";
    downloadPatch.style.display = "none";
    startWebager.style.display = "inherit";
  }

  startWebager.onclick = function () {
    document.getElementById("firstTimeDiv").style.display = "none";
    localStorage.firstTime1 = "false";
    window.location.reload(true);
  }
}


//Examples
let screen0 = createScreenObject("https://www.youtube.com/" , screenNumber , zindex);
screenNumber++;
zindex++;
let screen1 = createScreenObject("https://www.twitter.com/" , screenNumber , zindex);
screenNumber++;
zindex++;
let screen2 = createScreenObject("https://www.google.com/" , screenNumber , zindex);
screenNumber++;
zindex++;


//Prompt Url And Activate the creation
if(localStorage.firstTime1 == "false")
{
  addScreen.onclick = function () {
    let m = prompt("URL of the website : ");
    if(m.includes("http")==true) {
      createScreenObject(m,screenNumber,zindex);
      screenNumber++;
      zindex++;
    }
  
    else {
      if((m.includes(".") == true && m.length>2)) {
        m = "http://www." + m;
        createScreenObject(m,screenNumber,zindex);
        screenNumber++;
        zindex++;
      }
      else {
        alert("wrong");
      }
    }
  }
}

if(localStorage.firstTime1 != "false")
{
  addScreen.onclick = function () {
    alert("You are during Tutorial");
  }

  document.getElementById("explained").onclick = function () {
    alert("You are already during Tutorial, you can back every time using this button");
  }

  document.getElementById("clearAll").onclick = function () {
    alert("You are during Tutorial");
  }

  document.getElementById("templates").onclick = function () {
    alert("You are during Tutorial");
  }
}



//Close - Javascript
window.addEventListener("click" , function (e) {
  if(e.srcElement.innerText == "X")
  {
    let a = e.srcElement.offsetParent;
    document.getElementsByTagName("main")[0].removeChild(a);
  }

  //Enlarge Screen - Javascript
  if(e.srcElement.outerHTML == `<img src="enlargeButton2.png">`)
  {
    let b = e.srcElement.offsetParent;
    b.style.width = "60vw";
    b.style.height = "70vh";
  }
})

//Browser Alerts

if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         alert('Please use Chrome browser for full expirence');
    }
if(navigator.userAgent.indexOf("Opera") != -1 ) 
    {
         alert('Please use Chrome browser for full expirence');
    }
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
    {
      alert('Please use Chrome browser for full expirence');
    }
 
//explorer / EDGE ??

//Above
$(".screen").mousedown(function(e){ 
  above+=50;
  //e.toElement.parentElement.style.zIndex 
  if(e.toElement.className == "screen ui-draggable ui-resizable")
  {
    e.toElement.style.zIndex = above;
  }
  
  else {
    e.toElement.parentElement.style.zIndex = above;
  }
  //screen ui-draggable ui-resizable
});
