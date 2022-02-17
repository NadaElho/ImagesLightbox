let close = document.getElementById("close");
let total = document.getElementById("total");
let num = document.getElementById("num");
let showImages = document.querySelector(".showImages");
let show = document.querySelector(".show");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let images = document.querySelectorAll(".img");
let imgNum = 0;
total.innerText=images.length;
close.onclick = () => {
  document.location.reload();
};

for (let i = 0; i < images.length; i++) {
  images[i].onclick = () => {
    console.log(i);
    showImages.style.display = "block";
    show.innerHTML = "";
    let imgs = images[i].cloneNode(true);
    show.appendChild(imgs);
    num.innerText = i + 1;
    imgNum = i;
    check();
  };
}
function check(){
  if (imgNum == 0) {
    left.style.display = "none";
  }else if (imgNum == images.length - 1) {
    right.style.display = "none";
  }else {
    right.style.display = "block";
    left.style.display = "block";
  }
}
right.onclick = () => {
  console.log(imgNum);
  imgNum++;
  show.innerHTML = "";
  num.innerText = imgNum + 1;
  let imgs = images[imgNum].cloneNode(true);
  show.appendChild(imgs);
  check();
  if (imgNum >= images.length - 1) {
    right.style.display = "none";
  } else {
    right.style.display = "block";
  }
};

left.onclick = () => {
  imgNum--;
  show.innerHTML = "";
  num.innerText = imgNum + 1;
  let imgs = images[imgNum].cloneNode(true);
  show.appendChild(imgs);
  check();
 if (imgNum == 0) {
  left.style.display = "none";
} else if (imgNum > 0) {
  left.style.display = "block";
}
};
