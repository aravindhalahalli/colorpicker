// function elt(type, ...children) {
//   let node = document.createElement(type);
//   for (let child of children) {
//     if (typeof child != "string") node.appendChild(child);
//     else node.appendChild(document.createTextNode(child));
//   }
//   return node;
// }

// document.getElementById("quote").appendChild(elt("footer","—",elt("strong", "Karl Popper"),", preface to the second edition of ",elt("em", "The Open Society and Its Enemies"),", 1950"));

// let paras = document.body.getElementsByTagName("p");
// let paras0 = document.body.getElementsByTagName("p")[1];

// for(let para of Array.from(paras)){
//     if(para.getAttribute("data-classified") == "secret"){
//         para.remove();
//     }
// }

// console.log("clientHeight",paras0.clientHeight)
// console.log("offsetHeight",paras0.offsetHeight)

// function time(name, action) {
//   let start = Date.now();
//   action();
//   console.log(name, "took", Date.now() - start, "ms");
// }
// time("naive", () => {
//   let target = document.getElementById("one");
//   while (target.offsetWidth < 2000) {
//     target.appendChild(document.createTextNode("X"));
//   }
// });

// time("clever", () => {
//   let target = document.getElementById("two");
//   target.appendChild(document.createTextNode("XXXXX"));
//   let total = Math.ceil(2000 / (target.offsetWidth / 5));
//   target.firstChild.nodeValue = "X".repeat(total);
// });

let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  cat.style.top = Math.sin(angle) * 20 + "px";
  cat.style.left = Math.cos(angle) * 200 + "px";
  requestAnimationFrame((newTime) => animate(newTime, time));
}
requestAnimationFrame(animate);
