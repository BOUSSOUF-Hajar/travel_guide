// Load JSON & Search Logic
document.getElementById("search-btn").addEventListener("click", searchPlaces);
document.getElementById("reset-btn").addEventListener("click", clearResults);

function searchPlaces() {
    const keyword = document.getElementById("search-input").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

data ={
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "Melbourne, Australia",
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
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
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
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
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
  }
  ;
            let results = [];

            if (keyword.includes("beach")) {
                results = data.beaches;
            } 
            else if (keyword.includes("temple")) {
                results = data.temples;
            } 
            else {
                // Country search
                data.countries.forEach(country => {
                    if (country.name.toLowerCase().includes(keyword)) {
                        results.push(...country.cities);
                    }
                });
            }

            if (results.length === 0) {
                resultsDiv.innerHTML = "<p>No results found.</p>";
                return;
            }

            results.forEach(place => {
                const card = `
                    <div class="result-card">
                        <img src="${place.imageUrl}" alt="${place.name}">
                        <h3>${place.name}</h3>
                        <p>${place.description}</p>
                        <button>Visit</button>
                    </div>
                `;
                resultsDiv.innerHTML += card;
            });
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("search-input").value = "";
}
