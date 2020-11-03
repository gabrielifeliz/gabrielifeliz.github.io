const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here
  console.log(busRoute);
  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    // YOUR CODE HERE
    const fetchPromise = fetch(busRouteURL);
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        sessionStorage.setItem("title", route.title);
        sessionStorage.setItem("lat_max", route.lat_max);
        sessionStorage.setItem("lat_min", route.lat_min);
        sessionStorage.setItem("lon_max", route.lon_max);
        sessionStorage.setItem("lon_min", route.lon_min);
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
        sessionStorage.setItem("title", "Nothing Set");
        sessionStorage.setItem("lat_max", "Nothing Set");
        sessionStorage.setItem("lat_min", "Nothing Set");
        sessionStorage.setItem("lon_max", "Nothing Set");
        sessionStorage.setItem("lon_min", "Nothing Set");
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("title", "Nothing Set");
    sessionStorage.setItem("lat_max", "Nothing Set");
    sessionStorage.setItem("lat_min", "Nothing Set");
    sessionStorage.setItem("lon_max", "Nothing Set");
    sessionStorage.setItem("lon_min", "Nothing Set");

  }
}
