const DATA_URL = "travel_recommendation_api.json";

let data = null;
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");
const resultsEl = document.getElementById("results");
data = {
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "enter_your_image_for_sydney.jpg",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "Melbourne, Australia",
            "imageUrl": "enter_your_image_for_melbourne.jpg",
            "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        "id": 2,
        "name": "Japan",
        "cities": [
          {
            "name": "Tokyo, Japan",
            "imageUrl": "enter_your_image_for_tokyo.jpg",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "enter_your_image_for_kyoto.jpg",
            "description": "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        "id": 3,
        "name": "Brazil",
        "cities": [
          {
            "name": "Rio de Janeiro, Brazil",
            "imageUrl": "enter_your_image_for_rio.jpg",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "enter_your_image_for_sao-paulo.jpg",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "enter_your_image_for_angkor-wat.jpg",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "enter_your_image_for_taj-mahal.jpg",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "enter_your_image_for_bora-bora.jpg",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "enter_your_image_for_copacabana.jpg",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
  };


// Fonction d'affichage (STYLE « CARTE » COMME DANS LA MAQUETTE)
function renderCard(item) {
  return `
    <div class="card">
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="visit-btn">Visit</button>
      </div>
    </div>
  `;
}

// Recherche dans pays, temples, plages
function searchData(keyword) {
  keyword = keyword.toLowerCase();

  let results = [];

  // --- BEACHES ---
  if (keyword.includes("beach") || keyword.includes("plage")) {
    results = data.beaches;
  }

  // --- TEMPLES ---
  else if (keyword.includes("temple")) {
    results = data.temples;
  }

  // --- COUNTRIES ---
  else {
    data.countries.forEach(country => {
      if (country.name.toLowerCase().includes(keyword)) {
        results.push(...country.cities);
      }
    });
  }

  return results;
}

// Action bouton Search
function doSearch() {
  const keyword = searchInput.value.trim();
  if (!keyword) {
    resultsEl.innerHTML = "<p>Veuillez entrer un mot clé.</p>";
    return;
  }

  const results = searchData(keyword);

  if (results.length === 0) {
    resultsEl.innerHTML = "<p>Aucun résultat trouvé.</p>";
    return;
  }

  resultsEl.innerHTML = results.map(item => renderCard(item)).join("");
}

// Action Clear
function doClear() {
  searchInput.value = "";
  resultsEl.innerHTML = "";
}

searchBtn.addEventListener("click", doSearch);
resetBtn.addEventListener("click", doClear);
