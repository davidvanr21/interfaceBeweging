// function setup() {
// }

let GIFw =  document.getElementById("gifAnimatieW");
let GIFa =  document.getElementById("gifAnimatieA");
let GIFs =  document.getElementById("gifAnimatieS");
let GIFd =  document.getElementById("gifAnimatieD");

let svgW =  document.getElementById("SVGcirkelWit1");
let svgD =  document.getElementById("SVGcirkelWit2");
let svgS =  document.getElementById("SVGcirkelWit3");
let svgA =  document.getElementById("SVGcirkelWit4");

function draw() {

  if (keyCode == 87){ // W
    // add title and description
    document.getElementById("title").innerHTML = titles[0];
    document.getElementById("description").innerHTML = description[0];
    
    $(GIFw).addClass("GIFw");
    GIFa.classList.remove('GIFa');
    GIFs.classList.remove('GIFs');
    GIFd.classList.remove('GIFd');

    $(svgW).addClass("svgOpacityOn");
    svgD.classList.remove('svgOpacityOn');
    svgS.classList.remove('svgOpacityOn');
    svgA.classList.remove('svgOpacityOn');
  }
  if (keyCode == 65){ // A
    document.getElementById("title").innerHTML = titles[1];
    document.getElementById("description").innerHTML = description[1];
   
    $(GIFa).addClass("GIFa");
    GIFw.classList.remove('GIFw');
    GIFs.classList.remove('GIFs');
    GIFd.classList.remove('GIFd');

    $(svgA).addClass("svgOpacityOn");
    svgD.classList.remove('svgOpacityOn');
    svgS.classList.remove('svgOpacityOn');
    svgW.classList.remove('svgOpacityOn');
  }
  if (keyCode == 83){ // S
    document.getElementById("title").innerHTML = titles[2];
    document.getElementById("description").innerHTML = description[2];
    
    $(GIFs).addClass("GIFs");
    GIFa.classList.remove('GIFa');
    GIFw.classList.remove('GIFw');
    GIFd.classList.remove('GIFd');

    $(svgS).addClass("svgOpacityOn");
    svgD.classList.remove('svgOpacityOn');
    svgW.classList.remove('svgOpacityOn');
    svgA.classList.remove('svgOpacityOn');
  }
  if (keyCode == 68){ // D
    document.getElementById("title").innerHTML = titles[3];
    document.getElementById("description").innerHTML = description[3];

    $(GIFd).addClass("GIFd");
    GIFa.classList.remove('GIFa');
    GIFs.classList.remove('GIFs');
    GIFw.classList.remove('GIFw');

    $(svgD).addClass("svgOpacityOn");
    svgA.classList.remove('svgOpacityOn');
    svgS.classList.remove('svgOpacityOn');
    svgW.classList.remove('svgOpacityOn');
  }

}