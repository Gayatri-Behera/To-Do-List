// JavaScript source code
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");   //
var item = document.getElementsByTagName("li");    //selected each and every li tag

function inputLength() {
    return input.value.length;   //length of user entered input
}

function listLength() {
    return item.length;
}


//MAIN FUNCTION START
function createListElement() {   
    var li = document.createElement("li");   //create a new element li already defined as item above
    li.appendChild(document.createTextNode(input.value));  //
    ul.appendChild(li);   
    input.value = "";    //reset text input field whenever a new item is added


    //START STRIKETHROUGH
    function crossOut() {
        li.classList.toggle("done");  //
    }

    li.addEventListener("click", crossOut);  //END STRIKETHROUGH


    //START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    li.appendChild(dBtn).style.color = "#ffffff";
    dBtn.addEventListener("click", deleteListItem);
    //END ADD DELETE BUTTON


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD CLASS DELETE
}
//MAIN FUNCTION END


function addListAfterClick() {
    if (inputLength() > 0) {    //makes sure that an empty input field doesn't create a li
        createListElement();  //
    }
}


function addListAfterKeyPress(event) { //
    if (inputLength() > 0 && event.which === 13) {  //event.keyCode === 13(Enter key's code)
        createListElement();
    }
//Events are below
}


enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);