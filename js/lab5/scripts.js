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
    "Afghanistan - AF",
    "Albania - AL",
    "Algeria - DZ",
    "American Samoa - AS",
    "Antigua and Barbuda - AQ",
    "Argentina - AR",
    "Armenia - AM",
    "Aruba - AW",
    "Australia - AU",
    "Austria - AT",
    "Bahamas (the) - BS",
    "Bangladesh - BD",
    "Barbados - BB",
    "Belarus - BY",
    "Belgium - BE",
    "Belize - BZ",
    "Bermuda - BM",
    "Bolivia (Plurinational State of) - BO",
    "Bosnia and Herzegovina - BA",
    "Brazil - BR",
    "British Indian Ocean Territory (the) - IO",
    "Bulgaria - BG",
    "Cabo Verde - CV",
    "Cambodia - KM",
    "Cameroon - CM",
    "Canada - CA",
    "Cayman Islands (the) - KY",
    "Central African Republic (the) - CF",
    "Chad - TD",
    "Chile - CL",
    "Christmas Island - CX",
    "Colombia - CO",
    "Congo (the Democratic Republic of the) - CD",
    "Congo (the) - CG",
    "Costa Rica - CR",
    "Croatia - HR",
    "Cuba - CU",
    "Curaçao - CW",
    "Cyprus - CY",
    "Czechia - CZ",
    "Côte d'Ivoire - CI",
    "Denmark - DK",
    "Dominica - DM",
    "Dominican Republic (the) - DO",
    "Ecuador - EC",
    "Egypt - EG",
    "El Salvador - SV",
    "Equatorial Guinea - GQ",
    "Estonia - EE",
    "Ethiopia - ET",
    "Fiji - FJ",
    "Finland - FI",
    "France - FR",
    "French Guiana - GF",
    "French Polynesia - PF",
    "French Southern Territories (the) - TF",
    "Gabon - GA",
    "Gambia (the) - GM",
    "Georgia - GE",
    "Germany - DE",
    "Ghana - GH",
    "Greece - GR",
    "Greenland - GL",
    "Grenada - GD",
    "Guadeloupe - GP",
    "Guam - GU",
    "Guatemala - GT",
    "Guinea - GN",
    "Guinea-Bissau - GW",
    "Guyana - GY",
    "Haiti - HT",
    "Honduras - HN",
    "Hungary - HU",
    "Iceland - IS",
    "India - IN",
    "Indonesia - ID",
    "Iran (Islamic Republic of) - IR",
    "Iraq - IQ",
    "Ireland - IE",
    "Isle of Man - IM",
    "Israel - IL",
    "Italy - IT",
    "Jamaica - jm",
    "Japan - JP",
    "Jersey - JE",
    "Jordan - JO",
    "Kenya - KE",
    "Korea (the Democratic People's Republic of) - KI",
    "Korea (the Republic of) - KR",
    "Kuwait - KW",
    "Lao People's Democratic Republic (the) - LA",
    "Latvia - LV",
    "Lebanon - LB",
    "Liberia - LR",
    "Libya - LY",
    "Lithuania - LT",
    "Luxembourg - LU",
    "Macao - MO",
    "Madagascar - MG",
    "Malawi - MW",
    "Malaysia - MY",
    "Maldives - MV",
    "Mali - ML",
    "Malta - MT",
    "Marshall Islands (the) - MH",
    "Martinique - MQ",
    "Mexico - MX",
    "Moldova (the Republic of) - MD",
    "Monaco - MC",
    "Mongolia - MN",
    "Montenegro - ME",
    "Montserrat - MS",
    "Morocco - MA",
    "Mozambique - MZ",
    "Namibia - NA",
    "Nepal - NP",
    "Netherlands (the) - NL",
    "New Zealand - NZ",
    "Nicaragua - NI",
    "Nigeria - NG",
    "Norfolk Island - NF",
    "Norway - NO",
    "Pakistan - PK",
    "Palestine, State of - PS",
    "Panama - PA",
    "Papua New Guinea - PG",
    "Paraguay - PY",
    "Peru - PE",
    "Philippines (the) - PH",
    "Poland - PL",
    "Portugal - PT",
    "Puerto Rico - PR",
    "Qatar - QA",
    "Republic of North Macedonia - MK",
    "Romania - RO",
    "Russian Federation (the) - RU",
    "Rwanda - RW",
    "Saint Lucia - LC",
    "Saint Martin (French part) - MF",
    "Saint Pierre and Miquelon - PM",
    "Saint Vincent and the Grenadines - VC",
    "Samoa - WS",
    "San Marino - SM",
    "Sao Tome and Principe - ST",
    "Saudi Arabia - SA",
    "Senegal - SN",
    "Serbia - RS",
    "Sierra Leone - SL",
    "Singapore - SG",
    "Slovakia - SK",
    "Slovenia - SI",
    "Solomon Islands - SB",
    "Somalia - SO",
    "South Africa - ZA",
    "South Sudan - SS",
    "Spain - ES",
    "Sri Lanka - LK",
    "Sudan (the) - SD",
    "Suriname - SR",
    "Sweden - SE",
    "Switzerland - CH",
    "Syrian Arab Republic - SY",
    "Taiwan (Province of China) - TW",
    "Tanzania, United Republic of - TZ",
    "Thailand - TH",
    "Togo - TG",
    "Tonga - TO",
    "Trinidad and Tobago - TT",
    "Turkey - TR",
    "Turks and Caicos Islands (the) - TC",
    "Uganda - UG",
    "Ukraine - UA",
    "United Arab Emirates (the) - AE",
    "United Kingdom of Great Britain and Northern Ireland (the) - GB",
    "United States Minor Outlying Islands (the) - UM",
    "Uruguay - UY",
    "Venezuela (Bolivarian Republic of) - VE",
    "Viet Nam - VN",
    "Virgin Islands (British) - VG",
    "Virgin Islands (U.S.) - VI",
    "Yemen - YE",
    "Zimbabwe - ZW"
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