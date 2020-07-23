const itemsList = [
    {
        id: 1,
        name: 'Bishal'
    },
    {
        id: 2,
        name: 'Ram'
    },
    {
        id: 3,
        name: 'Ekata'
    },
    {
        id:4,
        name: 'Bottle'
    },
    {
        id:5,
        name: 'Plant'
    }
  ]

function displayNames() {
    for(let i = 0; i < itemsList.length; i++) {
        document.getElementById("itemNames").innerHTML += itemsList[i].name + "<br />";  
    }
}

function searchItem() {
    var userInput = document.getElementById("txtField").value;
    document.getElementById("abc").innerHTML = userInput;

    var itemIndex = itemsList.indexOf(userInput);
    document.getElementById("ddd").innerHTML = itemIndex;
}


displayNames();


submitBtn.addEventListener('click', searchItem);

//   step 1 store the user input text in a variable
//   step 2 check if the letters of the variable matches with the elements in array 
//   step 3 display the element