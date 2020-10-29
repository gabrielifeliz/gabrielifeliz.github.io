const main = document.getElementById("main");

function getClasses(){
    
    let classId =  document.getElementById("courseId").value; // Your code here
    console.log(classId);
    if(typeof classId !== "undefined" & classId !== ""){
        
        let classURL =  "https://api.umd.io/v0/courses/" + classId; // Your code here

        // YOUR CODE HERE
        const fetchPromise = fetch(classURL);
        fetchPromise.then(response => {
            return response.json();
        }).then(course => {
            sessionStorage.setItem("name", course.name);
            sessionStorage.setItem("semester", course.semester);
            sessionStorage.setItem("credits", course.credits);
            sessionStorage.setItem("description", course.description);
        });
    }
    else{
        main.innerHTML = "No value provided";
    }
}