function create(link) {
  let img = document.createElement("img");
  img.src = link;
  img.alt = "slide";
  return img;
}
let urls = [
  "https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1685367230338-1ff5a9c34971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://plus.unsplash.com/premium_photo-1677607233939-e893bfae8974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1669557694622-4f6d0621d3a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
].map(create);
let imgIndex = 0;
const slider = document.querySelector(".slider");
console.log(slider)
  slider.append(urls[imgIndex]);
function next() {
  imgIndex++;
  if (imgIndex >  urls.length - 1) {
    imgIndex = 0;
  }
  slider.querySelector("img").remove();
    slider.append(urls[imgIndex]);
}

function prev() {
  imgIndex--;

  if (imgIndex < 0) {
    imgIndex = 0;
  }
  slider.querySelector("img").remove();
  slider.append(urls[imgIndex]);
}
document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowRight") {
    next();
  } else if (event.code == "ArrowLeft") {
    prev();
  }
});

document.addEventListener('keydown',(event) => {
  if (event.code == 'KeyX' &&  event.ctrlKey === true){
let link = prompt()
let img = create(link)
urls.push(img)
  }
})