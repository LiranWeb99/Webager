//Global Variables
let addScreen = document.getElementById("addScreen");
let arrScreens = [];
let screenNumber = 0;
let zindex = 1;
let topUp = 0.7;
let leftUp = 0;
let brakeLine = 0;

//Menu

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
          alert("Coming Soon")
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
   screenName.innerText= "Screen " + (screenNumber+1);
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
.draggable()
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
console.log(arrScreens);
}

//Examples
let screen0 = createScreenObject("https://www.youtube.com/" , screenNumber , zindex);
screenNumber++;
zindex++;
let screen1 = createScreenObject("https://twitter.com/home" , screenNumber , zindex);
screenNumber++;
zindex++;
let screen2 = createScreenObject("https://www.quora.com/" , screenNumber , zindex);
screenNumber++;
zindex++;


//Prompt Url And Activate the creation
addScreen.onclick = function () {
  let m = prompt("URL of the website : ");
  if(m.length>5) {
    createScreenObject(m,screenNumber,zindex);
    screenNumber++;
    zindex++;
  }
  else {
    alert("too short");
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
    b.style.width = "70vw";
    b.style.height = "70vh";
  }
})

