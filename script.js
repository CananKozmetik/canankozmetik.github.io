/* GLOBAL ZAM SİSTEMİ */

const globalPriceMultiplier = 1.00;

/*
1.00 = normal fiyat
1.05 = %5 zam
1.10 = %10 zam
0.90 = %10 indirim
*/

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

    /* FİNAL FİYAT */

    const finalPrice =
    Math.round(
      product.price *
      globalPriceMultiplier
    );

    container.innerHTML += `

      <div class="product">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>${product.desc}</p>

        <div class="price">

          ${finalPrice}₺

        </div>

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