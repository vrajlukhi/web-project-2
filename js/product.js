import Navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = Navbar()

let arr=[]

const display = (data) => {
  data.map((product) => {
    let img = document.createElement("img");
    img.src = product.image;
    let title = document.createElement("h6");
    title.innerHTML = product.title;
    let price = document.createElement("p");
    price.innerHTML = product.price;
    let category = document.createElement("p");
    category.innerHTML = product.category;
    let rating = document.createElement("p");
    rating.innerHTML = product.rating.rate;
    if (product.rating.rate > 4) {
      rating.style.color = "green";
    } else if (product.rating.rate <= 4 && product.rating.rate >= 3) {
      rating.style.color = "yellow";
    }else if (product.rating.rate <3 && product.rating.rate >= 2) {
      rating.style.color = "orange";
    } else {
      rating.style.color = "red";
    }
    let btn = document.createElement("button");
    btn.innerHTML ="Buy Now"
    btn.addEventListener("click", () => {
      if (localStorage.getItem("user")) {
        fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(product)
        })
      }
      else{
        alert("please first login then you can add to cart")
        setTimeout(
          window.location.href="../pages/login.html"
        ,1000)
      }
    })
    let div = document.createElement("div");
    div.append(img,title,category,price,rating,btn);
    document.getElementById("ui-box").append(div)
  })
};
document.getElementById("lth").addEventListener("click", () => {
  let data=products.sort((a, b) => a.price - b.price)
  display(data)
})
document.getElementById("htl").addEventListener("click", () => {
  let data=products.sort((a, b) => b.price - a.price)
  display(data)
})

const get = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {display(data)});
};
get();