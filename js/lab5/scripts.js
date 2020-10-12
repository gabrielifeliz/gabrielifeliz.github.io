let myFullName = "Isaac Feliz"; // My full name
document.querySelector("body").appendChild(document.createElement("header")); // Retrieve and add a header to web page's body
document
  .querySelector("header") // Retrieve web page's header
  .appendChild(document.createTextNode(myFullName + "'s List Of Countries")); // Include text to web page's header
let myOL = document.createElement("ol"); // Create ordered list
myOL.className = "countries"; // Include class name 'countries' to empty ordered list
document.querySelector("body").appendChild(myOL); // Retrieve and add empty ordered list to the web page's body after header
let myBtn = document.createElement("button"); // Create button
myBtn.textContent = "Select 25 Random Countries"; // Add text to button
document.querySelector("body").appendChild(myBtn); // Retrieve and add button to the web page's body after empty ordered list
// Function that populates ordered list with 25 random countries in an alphabetic order
function selectCountries() {
  // All countries with name and code listed from IBAN
  let allCountries = [
    "China - CN",
    "Hong Kong - HK",
    "Macao - MO",
    "India - IN",
    "United States of America (the) - US",
    "Indonesia - ID",
    "Brazil - BR",
    "Pakistan - PK",
    "Nigeria - NG",
    "Bangladesh - BD",
    "Russian Federation (the) - RU",
    "Mexico - MX",
    "Japan - JP",
    "Philippines (the) - PH",
    "Ethiopia - ET",
    "Egypt - EG",
    "Viet Nam - VN",
    "Germany - DE",
    "Iran (Islamic Republic of) - IR",
    "Turkey - TR",
    "Congo (the Democratic Republic of the) - CD",
    "Thailand - TH",
    "France - FR",
    "United Kingdom of Great Britain and Northern Ireland (the) - GB",
    "Italy - IT",
    "South Africa - ZA",
    "Tanzania, United Republic of - TZ",
    "Myanmar - MM",
    "Korea (the Republic of) - KR",
    "Colombia - CO",
    "Kenya - KE",
    "Spain - ES",
    "Ukraine - UA",
    "Argentina - AR",
    "Uganda - UG",
    "Algeria - DZ",
    "Sudan (the) - SD",
    "Poland - PL",
    "Iraq - IQ",
    "Canada - CA",
    "Morocco - MA",
    "Afghanistan - AF",
    "Saudi Arabia - SA",
    "Peru - PE",
    "Venezuela (Bolivarian Republic of) - VE",
    "Uzbekistan	- UZ",
    "Malaysia - MY",
    "Nepal - NP",
    "Mozambique - MZ",
    "Angola - AO",
    "Ghana - GH",
    "Yemen - YE",
    "Korea (the Democratic People's Republic of) - KI",
    "Madagascar - MG",
    "Australia - AU",
    "Taiwan (Province of China) - TW",
    "Côte d'Ivoire - CI",
    "Cameroon - CM",
    "Sri Lanka - LK",
    "Niger (the) - NE",
    "Romania - RO",
    "Syrian Arab Republic - SY",
    "Burkina Faso	- BF",
    "Malawi - MW",
    "Kazakhstan - KZ",
    "Chile - CL",
    "Mali - ML",
    "Netherlands (the) - NL",
    "Guatemala - GT",
    "Zambia - ZM",
    "Ecuador - EC",
    "Zimbabwe - ZW",
    "Cambodia - KM",
    "Senegal - SN",
    "Chad - TD",
    "Somalia - SO",
    "Guinea - GN",
    "South Sudan - SS",
    "Rwanda - RW",
    "Cuba - CU",
    "Tunisia - TN",
    "Burundi - BI",
    "Belgium - BE",
    "Greece - GR",
    "Bolivia (Plurinational State of) - BO",
    "Haiti - HT",
    "Benin - BJ",
    "Dominican Republic (the) - DO",
    "Czechia - CZ",
    "Portugal - PT",
    "Sweden - SE",
    "Azerbaijan - AZ",
    "Hungary - HU",
    "Jordan - JO",
    "Belarus - BY",
    "United Arab Emirates (the) - AE",
    "Honduras - HN",
    "Serbia - RS",
    "Tajikistan - TJ",
    "Austria - AT",
    "Switzerland - CH",
    "Israel - IL"
  ];

  // Infinite loop, adding countries to list one by one, until the ordered list reaches maximum capacity
  while (true) {
    // Randomly choosen country
    let choosenCountry =
      allCountries[Math.floor(Math.random() * Math.floor(allCountries.length))];
    // String array with country name and code separate
    let countryNameCode = choosenCountry.split(" - ");
    // Create a list item
    let myLI = document.createElement("li");
    // Include text to list item
    myLI.innerHTML =
      countryNameCode[0] + " - <strong>" + countryNameCode[1] + "</strong>";
    // Retrieve ordered list
    let myCountryList = document.querySelector("ol");
    // Create boolean variable to check whether the country exists in the list
    let existingItem = false;
    // Retrieve existing list items if any
    let countriesLI = document.querySelectorAll("li");
    if (countriesLI.length > 0) {
      if (countriesLI.length != 25) {
        /* If the ordered list is not empty, but is not of length 25,
           check whether or not the randomly selected country is in the list */
        countriesLI.forEach((country) => {
          if (country.textContent === choosenCountry) {
            existingItem = true; // If randomly selected country is in the list, mark the variable as true
          }
        });
        if (!existingItem) {
          myCountryList.appendChild(myLI); // If randomly selected country is not in the list, add it
        }
      } else {
        sortList(countriesLI); // Sort list in alphabetical order
        break;
      }
    } else {
      myCountryList.appendChild(myLI); // If list is empty, add country name and code
    }
  }
}

function sortList(countryListItems) {
  let i, switching, b, shouldSwitch;
  switching = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = countryListItems;
    // Loop through all list-items:
    for (i = 0; i < b.length - 1; i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
        switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
// Add event listener
document.querySelector("button").addEventListener("click", selectCountries);