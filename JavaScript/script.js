// // const title = document.querySelector("#title");
// const heading = document.querySelector(".pera");

// // console.log(title);
// console.log(heading);

// // const query = document.querySelectorAll(".pera");
// // console.log(query);


// const para = document.getElementsByTagName("p");
// console.log(para);

// const list = document.querySelectorAll(".l1");
// list.forEach((e)=>e.style.color="red")

//css selector combination
// const card = document.querySelector("card.li");
// const list = document.querySelectorAll("ul > li.l1");
// const para = document.querySelectorAll("h1 + p");
// const multi = document.querySelectorAll("div, p, h1");

// console.log(card);
// console.log(list);
// console.log(para);
// console.log(multi);

// const list = document.querySelectorAll(
//   ".l2:first-child , .l2:last-child , .l2:nth-child(3)",
// );
// list.forEach((e) => (e.style.color = "red"));

//text content
// const heading = document.querySelector("h1");
// heading.textContent = "Hello World";
// heading.textContent = "Hello <strong>World</strong>";
//inner HTML
// heading.innerHTML = "Hello <strong>World</strong> and <i> italic</i>";

//xss - cross site scripting
// const para = document.querySelector("p");
// para.innerHTML = "<img src='https://picsum.photos/200' onerror='alert(`Hacked`)'>";.

// const link = document.querySelector("a");
// link.setAttribute("href", "https://www.google.com");

//get attribute
// const img = document.querySelector("#img1");
// console.log(img.getAttribute("src"));
// console.log(img.setAttribute("alt", "image not found"));

//has attribute
// img.hasAttribute("src");
// img.removeAttribute("alt");

//click events
const input = document.querySelector("#input1");
const output = document.querySelector("#output1");

document.querySelector("#btn1").addEventListener("click", () => {
  output.textContent = input.value.toUpperCase();
});

document.querySelector("#btn2").addEventListener("click", () => {
  output.textContent = input.value.toLowerCase();
});

document.querySelector("#btn3").addEventListener("click", () => {
  output.textContent = input.value.split("").reverse().join("");
});