
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
//const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

// Embedding script tag to enable CanvasJS
let canvasJS = document.createElement('script');
canvasJS.setAttribute('async', 'true')
canvasJS.src = 'https://canvasjs.com/assets/script/canvasjs.min.js';
document.querySelector('head').appendChild(canvasJS)

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length;
            let currentList = [];
            // Loop to pick 5 random entries
            for (let x = 0; x < 5; x++) {
                /*
                    Get a random number within the size of the list
                    Get subreddit, author, title, and ups from record
                    Set the message to be:
                        let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                    Add a new <li> element with the message to the 'redditList' element
                    Add a data entry to chartValues with author as the label and ups as the y component
                */
                let random = Math.floor(Math.random() * Math.floor(listSize));
                if (currentList.length < 2) {
                    currentList.push(currentList);
                } else {
                    while (currentList.includes(random)) {
                        random = Math.floor(Math.random() * Math.floor(listSize));
                    }
                    currentList.push(currentList);
                }
                let record = json.data.children[random]; // Random record
                
                let subreddit = record.data.subreddit; // Subreddit 
                let author = record.data.author; // Author
                let title = record.data.title; // Title
                let ups = record.data.ups; // Upvotes
                
                let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                
                let newLI = document.createElement("li");
                newLI.innerHTML = message;
                document.querySelector("#redditList").appendChild(newLI);

                /*.......*/
                
                let addToChart = {'label': author, y: ups}; // Gave this. This needs to be added to the 'chartValues'
                /*.......*/

                chartValues.push(addToChart);
            }
        })
        .then(values => console.log(chartValues));
        chart.render(); // Do you need to remove the comments from here in order to get it to work? Yup!
}

window.onload = async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints: chartValues // WHAT GOES HERE???
            }
        ]
    });
    
    chart.render();
}

window.onload = makeChart();