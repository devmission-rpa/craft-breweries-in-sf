"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("brews");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer pateG7pBF1CkfmcW7.2c666498dc7818660958fea1c0bb95e5e1d33bbdb4871fed8ee5696394e05ce5`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/app4d1fvvjII8WH8W/Breweries?&view=Stars`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let logo = data.records[i].fields["Logo"]; // here we are getting column values
        let name = data.records[i].fields["Name"]; //here we are using the Field ID to fecth the name property
        let neighborhood = data.records[i].fields["Neighborhood"];

        newHtml += `
        
         <div class="col-xl-4 cardImageText">
          <div class="card list move border-dark mb-5" style="width: 20rem;">
          <a href="breweries.html?id=${data.records[i].id}">${
          logo
            ? `<img class="card-img-top rounded" alt="${name}" src="${logo[0].url}">`
            : ``
        }
          </a>
          <p hidden class="card-key">${neighborhood}</p>
          </div>
          </div>
        </div>
    
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

//adds a comma after the 3rd digit from the left
function toCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// changes the comma in the string into a list item <li>
function formattedString(value) {
  return value.split(",").join("<li>");
}

//function to convert the number rating from Airtable to star images
// function stars(rating) {
//   if (rating === 1) {
//     return "⭐️";
//   } else if (rating === 2) {
//     return "⭐⭐";
//   } else if (rating === 3) {
//     return "⭐⭐⭐";
//   } else if (rating === 4) {
//     return "⭐⭐⭐⭐";
//   } else if (rating === 5) {
//     return "⭐⭐⭐⭐⭐";
//   }
// }

//function to convert the number rating from Airtable to star icons from Font Awesome
function stars(rating) {
  if (rating === 1) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
  } else if (rating === 2) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
  } else if (rating === 3) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
  } else if (rating === 3.6) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
  } else if (rating === 3.7) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
  } else if (rating === 3.8) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
  } else if (rating === 3.9) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
  } else if (rating === 4.1) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
  } else if (rating === 4.4) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
  } else if (rating === 4.5) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
  } else if (rating === 5) {
    return `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> <i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
  }
}

// function to remove search bar in detail view
function myFunction() {
  let x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//function to toggle between light and dark mode
function myToggle() {
  let element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}

//function to hide search bar for mobile devices
function myNeighborhood(x) {
  let n = document.getElementById("hide");
  if (x.matches) {
    // If media query matches
    n.style.display = "none";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1100px)");

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

//function for the dropdown menu
async function dropdown() {
  let dropdown = document.getElementById("menu");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer pateG7pBF1CkfmcW7.2c666498dc7818660958fea1c0bb95e5e1d33bbdb4871fed8ee5696394e05ce5`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/app4d1fvvjII8WH8W/Breweries?&view=Stars`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      dropdown.innerHTML = "";

      let otherHtml = "";
      for (let i = 0; i < data.records.length; i++) {
        let name = data.records[i].fields["Name"];
        let disabled = data.records[i].fields["Disabled"];

        otherHtml += `
    <li class="bullet">
                    <a
                      class="dropdown-item"
                      href="breweries.html?id=${data.records[i].id}">${name}</a
                    >
                  </li>
    `;

        dropdown.innerHTML = otherHtml;
      }
    });
}

// function for our detail view
async function getOneRecord(id) {
  let jobsResultElement = document.getElementById("brews");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer pateG7pBF1CkfmcW7.2c666498dc7818660958fea1c0bb95e5e1d33bbdb4871fed8ee5696394e05ce5`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/app4d1fvvjII8WH8W/Breweries/${id}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is a single object

      let picture = data.fields["Picture"];
      let name = data.fields["Name"];
      let address = data.fields["Address"];
      let zip = data.fields["Zip"];
      let neighborhood = data.fields["Neighborhood"];
      let description = data.fields["Description"];
      let logo = data.fields["Logo"];
      let hours = data.fields["Hours"];
      let happy = data.fields["Happy"];
      let food = data.fields["Food"];
      let website = data.fields["Website"];
      let merchandise = data.fields["Merchandise"];
      let rating = data.fields["Rating"];
      let star = data.fields["Stars"];
      let outdoor = data.fields["Outdoor"];
      let yelp = data.fields["Yelp"];
      let map = data.fields["Map"];

      let newHtml = `
        <div class="card list mb-3">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center align-items-center">
     ${
       logo
         ? `<img class="img-fluid back ms-4" alt="${name}" src="${logo[0].url}">`
         : ``
     }
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center desc">
      <div class="card-body">
        <h5 class="card-title bar">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text"><small>${stars(rating)} (${rating})</small></p>
        <p class="card-text"><small>${address} <br> SF, CA ${zip}</small></p>
        <a href="${map}" target="_blank"><button type="button" class="btn btn-primary btn-sm">Get Directions</button></a>
      </div>
    </div>
  </div>
</div>

<div class="card list mb-3">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center ">
    ${
      picture
        ? `<img class="img-fluid front" alt="${name}" src="${picture[0].url}">`
        : ``
    }
       </div>
       <div class="col-md-6 d-flex justify-content-center align-items-center">
       <div class="card-body">
       <div class="card-group hours mx-auto">    
  <div class="card list hours shift">
    <div class="card-body">
      <h4 class="card-title">🕔 Hours</h4>
      <p class="card-text">${formattedString(hours)}</p>
      
    </div>
  </div>
  <div class="card list hours">
    <div class="card-body">
      <h4 class="card-title">😁 🕔 Happy Hours</h4>
      <p class="card-text">${formattedString(happy)}</p>
     
    </div>
  </div>
</div>
<div class="moves">
<table class="table misc">
    <tbody>
    <tr>
      <th scope="row misc">Neighborhood</th>
      <td class="card-text">${neighborhood}</td>
    </tr>
    <tr>
      <th scope="row misc">Outdoor Seating</th>
      <td>${outdoor}</td>
    </tr>
    <tr>
      <th scope="row misc">Food Served</th>
      <td colspan="2">${formattedString(food)}</td>
    </tr>
     <tr>
      <th scope="row misc">Merchandise</th>
      <td colspan="2">${formattedString(merchandise)}</td>
    </tr>
    <tr>
      <th scope="row misc">Links</th>
      <td colspan="2"><a href="${website}" target="_blank"><button type="button" class="btn btn-primary btn-sm go">Website</button></a> <a href="${yelp}" target="_blank"><button type="button" class="btn btn-primary btn-sm go">Yelp</button></a></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</div>
</div>
      `;

      jobsResultElement.innerHTML = newHtml;
    });
}

// function to filter records by neighborhood
function searchFunction() {
  let input, filter, cardimagetext, i, x; // declare all four at once

  input = document.getElementById("myinput");
  filter = input.value.toUpperCase(); // ignore case/capitalization
  cardimagetext = document.getElementsByClassName("cardImageText");

  for (x = 0; x < cardimagetext.length; x++) {
    i = cardimagetext[x].getElementsByClassName("card-key")[0];
    if (i.innerHTML.toUpperCase().indexOf(filter) > -1) {
      cardimagetext[x].style.display = ""; // '' means show
    } else {
      cardimagetext[x].style.display = "none";
    }
  }
}

// look up window.location.search and split, so this would take
// https://dmspr2021-airtable-app.glitch.me/index.html?id=receHhOzntTGZ44I5
// and look at the ?id=receHhOzntTGZ44I5 part, then split that into an array
// ["?id=", "receHhOzntTGZ44I5"] and then we only choose the second one
let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  // call function to hide search bar
  myFunction();
  // has at least ["?id=", "OUR ID"]
  // call function for the dropdown menu
  dropdown();
  getOneRecord(idParams[1]); // create detail view HTML w/ our id
} else {
  // Call listener function to hide search bar for mobile devices
  myNeighborhood(x);
  // call function for the dropdown menu
  dropdown();
  getAllRecords(); // no id given, fetch summaries
}
