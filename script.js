/* GLOBAL ZAM SİSTEMİ */

const globalPriceMultiplier = 1.00;

/*
1.00 = normal fiyat
1.05 = %5 zam
1.10 = %10 zam
0.90 = %10 indirim
*/

/* ÜRÜNLER */

const products = [

  {
    name: "Bambu Çubuklu Oda Kokusu",
    image: "images/Kokular.jpg",
    desc: "Kalıcı ve ferah ortam kokuları",
    price: 190,
    category: "oda-kokusu",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  {
    name: "Dalbeyoğlu Esansiyel Yağlar",
    image: "images/Esanslar.jpg",
    desc: "Yoğun ve doğal esans çeşitleri",
    price: 90,
    category: "esansiyel",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  {
    name: "Erkek Şampuan CrazyJhon 2In1",
    image: "images/CJ_Man.jpg",
    desc: "Erkek Şampuanı",
    price: 150,
    category: "sampuan",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  {
    name: "Meyve Aromalı Şampuan CrazyJhon 2In1",
    image: "images/CJ_Meyve.jpg",
    desc: "Meyve Kokulu Şampuan",
    price: 150,
    category: "sampuan",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
  
  {
    name: "Arındırıcı Soyulabilir Siyah Maske - JEUNESSE ",
    image: "images/JEUN_Armask.png",
    desc: " Ciltteki kir ve yağı temizler. Ölü cilt Hücrelerinin uzaklaştırılmasına yardımcı olur",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
  
  {
    name: "Arındırıcı Soyulabilir Gümüş Maske - JEUNESSE ",
    image: "images/JEUN_Argumus.png",
    desc: "Cilt tonunu eşitlemeye ve aydınlatmaya yardımcı olur. Ölü cilt hücrelerinin giderilmesine de katkıda bulunur",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
  
  {
    name: "Kırışıklık Karşıtı Soyulabilir Altın Maske - JEUNESSE ",
    image: "images/JEUN_AltnMaske.png",
    desc: "Cildinize esneklik, yumuşaklık ve sıkılık kazandırır.",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
  
  {
    name: "Simli Soyulabilir Kolajen Maskesi - JEUNESSE ",
    image: "images/JEUN_Simlikolajen.png",
    desc: "Cildinize esneklik, yumuşaklık ve sıkılık kazandırır",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
  
  {
    name: "Derinlemesine Peeling Etkili Kahve Peelingi - JEUNESSE ",
    image: "images/JEUN_Kahve.png",
    desc: "Gözenekleri temizler ve arındırır. İçerdiği kafein cildi canlandırır ve pürüzsüz bir görünüm kazandırmaya yardımcı olur.",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
    
  {
    name: "Detoks Etkili Kil Maskesi - JEUNESSE ",
    image: "images/JEUN_DetoxMaske.png",
    desc: "  Kil ve kremsi dokusu sayesinde cilttekikiri ve pürüzleri temizler ve cildi kurutmadan detoksifikasyon sağlar.",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
    
  {
    name: "Pembe Kar Temizleyici Peeling Jeli - JEUNESSE ",
    image: "images/JEUN_Pembekar.png",
    desc: " Pembe kar temizleme peeling jeli, içeriğindeki bitki kompleksi sayesinde tıkalı gözenekleri temizler ve cildi tazeler. Ölü cilt hücrelerinin uzaklaştırılmasına yardımcı olur.",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },
  
     
  {
    name: "3'ü 1 arada Maske (Yüz Temizleyici + Peeling + Maske) - JEUNESSE ",
    image: "images/JEUN_3in1.png",
    desc: "  Cildi yoğun bir şekilde temizleyerek yağlardan arındırır, peeling etkisi gösterir, gözenekleri temizler ve arındırır",
    price: 150,
    category: "maske",
    link: "https://www.instagram.com/canankozmetik.dorsy/"
  },

  

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