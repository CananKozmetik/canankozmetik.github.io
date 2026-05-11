const products = [

  {
    name: "Bambu Çubuklu Oda Kokusu",
    image: "images/Kokular.jpg",
    desc: "Kalıcı ve ferah ortam kokuları",
    category: "oda-kokusu",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  {
    name: "Dalbeyoğlu Esansiyel Yağlar",
    image: "images/Esanslar.jpg",
    desc: "Yoğun ve doğal esans çeşitleri",
    category: "esansiyel",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  {
    name: "CrazyJhon Şampuan Erkek 2In1",
    image: "images/CJ_Man.jpg",
    desc: "Erkek Şampuanı",
    category: "sampuan",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  {
    name: "CrazyJhon Şampuan Meyve Karışımı 2In1",
    image: "images/CJ_Meyve.jpg",
    desc: "Meyve Kokulu Şampuan",
    category: "sampuan",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  }

];

/* ELEMENTLER */

const container =
document.getElementById("product-list");

const searchInput =
document.getElementById("search");

const categoryButtons =
document.querySelectorAll(".category-btn");

let selectedCategory = "all";

/* ÜRÜNLERİ GÖSTER */

function showProducts(list) {

  container.innerHTML = "";

  if (list.length === 0) {

    container.innerHTML =
    "<p>Ürün bulunamadı</p>";

    return;
  }

  list.forEach(product => {

    container.innerHTML += `

      <div class="product">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>${product.desc}</p>

        <a href="${product.link}" target="_blank">

          Satın Al

        </a>

      </div>

    `;
  });
}

/* FİLTRELE */

function filterProducts() {

  const searchValue =
  searchInput.value.toLowerCase();

  const categoryValue =
  selectedCategory;

  const filtered =
  products.filter(product => {

    const matchesSearch =

      product.name
      .toLowerCase()
      .includes(searchValue)

      ||

      product.desc
      .toLowerCase()
      .includes(searchValue);

    const matchesCategory =

      categoryValue === "all"

      ||

      product.category === categoryValue;

    return (
      matchesSearch &&
      matchesCategory
    );

  });

  showProducts(filtered);
}

/* SEARCH EVENT */

searchInput.addEventListener(
  "input",
  filterProducts
);

/* CATEGORY EVENTS */

categoryButtons.forEach(button => {

  button.addEventListener(
    "click",

    () => {

      selectedCategory =
      button.dataset.category;

      categoryButtons.forEach(btn => {

        btn.classList.remove("active");

      });

      button.classList.add("active");

      filterProducts();

    }

  );

});

/* İLK YÜKLEME */

showProducts(products);