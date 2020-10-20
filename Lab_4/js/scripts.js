let myFullName = "Isaac Feliz"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let headerDiv = document.querySelector(".header");
headerDiv.textContent = myFullName + "'s Lab 4";
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let newP1 = document.createElement("p");
newP1.className = "content1";
let newP2 = document.createElement("p");
newP2.className = "content2";
let contentDiv = document.querySelector(".content");
contentDiv.appendChild(newP1);
contentDiv.appendChild(newP2);
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let p1Element = document.querySelector(".content1");
p1Element.textContent =
  "my name has " + myFullName.match(/[a-z]/gi).length + " characters";
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let p2Element = document.querySelector(".content2");
p2Element.appendChild(
  document.createTextNode(
    "the third character in my name is " + myFullName.charAt(2).toUpperCase()
  )
);
// 6 Add a new line to your second paragraph
p2Element.innerHTML += "<br/>";
// 7 Return the final three characters of your last name to that new line
p2Element.appendChild(
  document.createTextNode(
    myFullName.substring(myFullName.length - 3, myFullName.length)
  )
);
// 8 Substring your first and last name into two separate variables
let firstName = myFullName.substring(0, myFullName.indexOf(" "));
let lastName = myFullName.substring(
  myFullName.indexOf(" ") + 1,
  myFullName.length
);
// 9 Add the total length of your first and last names together
let totalLength = firstName.length + lastName.length;
// 10 Display that total next to your name in your header
let originalHeaderArray = headerDiv.textContent.split(" ");
headerDiv.textContent =
  originalHeaderArray[0] +
  " " +
  originalHeaderArray[1] +
  " " +
  totalLength +
  " " +
  originalHeaderArray[2] +
  " " +
  originalHeaderArray[3];