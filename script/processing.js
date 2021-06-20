// function setup() {
// }

let GIFw =  document.getElementById("gifAnimatieW");
let GIFa =  document.getElementById("gifAnimatieA");
let GIFs =  document.getElementById("gifAnimatieS");
let GIFd =  document.getElementById("gifAnimatieD");

function draw() {

  if (keyCode == 87){ // W
    // add title and description
    document.getElementById("title").innerHTML = titles[0];
    document.getElementById("description").innerHTML = description[0];
    $(GIFw).addClass("GIFw");
    GIFa.classList.remove('GIFa');
    GIFs.classList.remove('GIFs');
    GIFd.classList.remove('GIFd');
  }
  if (keyCode == 65){ // A
    document.getElementById("title").innerHTML = titles[1];
    document.getElementById("description").innerHTML = description[1];
    $(GIFa).addClass("GIFa");
    GIFw.classList.remove('GIFw');
    GIFs.classList.remove('GIFs');
    GIFd.classList.remove('GIFd');
  }
  if (keyCode == 83){ // S
    document.getElementById("title").innerHTML = titles[2];
    document.getElementById("description").innerHTML = description[2];
    $(GIFs).addClass("GIFs");
    GIFa.classList.remove('GIFa');
    GIFw.classList.remove('GIFw');
    GIFd.classList.remove('GIFd');
  }
  if (keyCode == 68){ // D
    document.getElementById("title").innerHTML = titles[3];
    document.getElementById("description").innerHTML = description[3];
    $(GIFd).addClass("GIFd");
    GIFa.classList.remove('GIFa');
    GIFs.classList.remove('GIFs');
    GIFw.classList.remove('GIFw');
  }

}