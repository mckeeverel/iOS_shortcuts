//gyroscrolling section is pulled straight from Chris' Medium article linked in my post
//a quick google search will fill you in on what's going on here (eg alpha/beta). Adds listener for orientation. 
const handleOrientation = event => {
    const x = event.beta;
    if (x < 40 && x > 20) return;
    if (x > 40 && x <= 60) {
    window.scrollBy(0, 1);
   } else if (x > 60) {
    window.scrollBy(0, 2);
   } else {
    window.scrollBy(0, -1);
   }
   };
   window.addEventListener("deviceorientation", handleOrientation);
   
//code is adapted from W3schools article on progress bars. You need to create the appropriate div/style/script tags 
// and append. be sure to call completion() for shortcuts. 
   var progDiv = document.createElement("div");
   
   var progBar = document.createElement("div");
   
   progDiv.setAttribute("id","_div");
   progBar.setAttribute("id","_bar");
   
   document.body.appendChild(progDiv);
   
   (document.getElementById("_div")).appendChild(progBar);
   
   var progStyle = document.createElement("style");
   
   progStyle.innerText = `
      #_div {
          position: fixed;
          bottom: 0px;
          z-index: 100;
          width: 100%;
          height: 10px;
          background: #f1f1f1;
      }
      #_bar {
          height: 10px;
          background: #4caf50;
          width: 0%;
      }
   `;
   
   document.head.appendChild(progStyle);
   
   var myScript = document.createElement("script");
   
   myScript.innerText = `
   
   window.onscroll = function() {
      myFunction()
   };
   
   function myFunction(){
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll/height)*100;
    document.getElementById("_bar").style.width = scrolled + "%";
   }
   `;
   
   document.head.appendChild(myScript);
   
   completion();
