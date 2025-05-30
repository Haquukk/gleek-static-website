const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const productsData = [
  {
    brand: "Gleek Signature",
    items: [
      {
        name: "Triple Peach Americano",
        img: "img/products/f1.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Americano",
        img: "img/products/f2.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Hot Caramel Praline Macchiato",
        img: "img/products/f3.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Hot Espresso",
        img: "img/products/f4.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Café Latte",
        img: "img/products/n1.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Nutty Oat Latte",
        img: "img/products/n2.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Caramel Praline Macchiato",
        img: "img/products/n3.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Hot Café Latte",
        img: "img/products/n4.jpeg",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Café Latte",
        img: "img/products/n5.jpeg",
        price: "Rp 29.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Bumi Latte",
        img: "img/products/n6.jpeg",
        price: "Rp 29.000",
        link: "sproduct.html",
      },
      {
        name: "Double Iced Shaken Latte",
        img: "img/products/n7.jpeg",
        price: "Rp 29.000",
        link: "sproduct.html",
      },
      {
        name: "Hot Cappuccino",
        img: "img/products/n8.jpeg",
        price: "Rp 29.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Café Latte",
        img: "img/products/n5.jpeg",
        price: "Rp 21.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Americano",
        img: "img/products/f2.jpeg",
        price: "Rp 21.000",
        link: "sproduct.html",
      },
      {
        name: "Hot Café Latte",
        img: "img/products/g1.jpeg",
        price: "Rp 21.000",
        link: "sproduct.html",
      },
      {
        name: "Hot Cappuccino",
        img: "img/products/g2.jpeg",
        price: "Rp 21.000",
        link: "sproduct.html",
      },
    ],
  },
  {
    brand: "Signature Beans",
    items: [
      {
        name: "Machiato",
        img: "img/products/u1.jpg",
        price: "Rp 59.000",
        link: "sproduct.html",
      },
      {
        name: "Arabica Beans",
        img: "img/products/u2.jpg",
        price: "Rp 59.000",
        link: "sproduct.html",
      },
      {
        name: "Expresso ",
        img: "img/products/u3.jpg",
        price: "Rp 59.000",
        link: "sproduct.html",
      },
      {
        name: "Americano Beans",
        img: "img/products/u4.jpg",
        price: "Rp 59.000",
        link: "sproduct.html",
      },
    ],
  },
  {
    brand: "Coffee",
    items: [
      {
        name: "Butterscotch Latte",
        img: "img/products/coffee1.png",
        price: "Rp 25.000",
        link: "sproduct.html",
      },
      {
        name: "Salted Caramel Mocha Latte",
        img: "img/products/coffee2.png",
        price: "Rp 27.000",
        link: "sproduct.html",
      },
      {
        name: "Caramel Java Chip Frappuccino",
        img: "img/products/coffee3.png",
        price: "Rp 29.000",
        link: "sproduct.html",
      },
      {
        name: "Buttercream Tiramisu Latte",
        img: "img/products/coffee4.png",
        price: "Rp 26.000",
        link: "sproduct.html",
      },
      {
        name: "Nutty Oat Latte",
        img: "img/products/coffee5.png",
        price: "Rp 28.000",
        link: "sproduct.html",
      },
    ],
  },
  {
    brand: "Sweet Drink",
    items: [
      {
        name: "Caramel Regal",
        img: "img/products/sweet1.png",
        price: "Rp 24.000",
        link: "sproduct.html",
      },
      {
        name: "Oreo Cookies and Cream",
        img: "img/products/sweet2.png",
        price: "Rp 26.000",
        link: "sproduct.html",
      },
      {
        name: "Beng Beng Sweet",
        img: "img/products/sweet3.png",
        price: "Rp 23.000",
        link: "sproduct.html",
      },
      {
        name: "Iced Matcha Green Tea",
        img: "img/products/sweet4.png",
        price: "Rp 25.000",
        link: "sproduct.html",
      },
      {
        name: "Almond Choco Drink",
        img: "img/products/sweet5.png",
        price: "Rp 27.000",
        link: "sproduct.html",
      },
    ],
  },
  {
    brand: "Fresh Drink",
    items: [
      {
        name: "Magic Water",
        img: "img/products/fresh1.png",
        price: "Rp 20.000",
        link: "sproduct.html",
      },
      {
        name: "Mocktail Galaxy Lemonade",
        img: "img/products/fresh2.png",
        price: "Rp 22.000",
        link: "sproduct.html",
      },
      {
        name: "Blu Ocean Mojito",
        img: "img/products/fresh3.png",
        price: "Rp 22.000",
        link: "sproduct.html",
      },
    ],
  },
  {
    brand: "Pastry",
    items: [
      {
        name: "Chocolate Croissant",
        img: "img/products/pastry1.png",
        price: "Rp 18.000",
        link: "sproduct.html",
      },
      {
        name: "Almond Croissant",
        img: "img/products/pastry2.png",
        price: "Rp 20.000",
        link: "sproduct.html",
      },
      {
        name: "Smoke Beef and Cheese Sandwich",
        img: "img/products/pastry3.png",
        price: "Rp 22.000",
        link: "sproduct.html",
      },
      {
        name: "Spicy Tuna Sandwich",
        img: "img/products/pastry2.png",
        price: "Rp 20.000",
        link: "sproduct.html",
      },
      {
        name: "Banana Chocolate Cake",
        img: "img/products/pastry3.png",
        price: "Rp 22.000",
        link: "sproduct.html",
      },
    ],
  },
];

const categoriesContainer = document.getElementById("product-categories");

productsData.forEach((category) => {
  const brandSection = document.createElement("div");
  brandSection.className = "brand-section";

  const title = document.createElement("h3");
  title.textContent = category.brand;
  brandSection.appendChild(title);

  const proContainer = document.createElement("div");
  proContainer.className = "pro-container";

  category.items.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "pro";
    productDiv.onclick = () => (window.location.href = product.link);

    productDiv.innerHTML = `
      <img class="shirt" src="${product.img}" onerror="this.src='https://via.placeholder.com/300x300?text=Loading...'" alt="">
      <div class="des">
        <span>${category.brand}</span>
        <h5>${product.name}</h5>
        <div class="star">
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
        </div>
        <h4>${product.price}</h4>
      </div>
      <a href="#"><i class='bx bx-cart cart'></i></a>
    `;
    proContainer.appendChild(productDiv);
  });

  brandSection.appendChild(proContainer);
  categoriesContainer.appendChild(brandSection);
});
