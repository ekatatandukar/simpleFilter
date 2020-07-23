const itemsList = [
  {
    id: 1,
    name: 'Bishal',
  },
  {
    id: 2,
    name: 'Ram',
  },
  {
    id: 3,
    name: 'Ekata',
  },
  {
    id: 4,
    name: 'Bottle',
  },
  {
    id: 5,
    name: 'Plant',
  },
];

function displayNames() {
  const userInput = document.getElementById('txtField').value.toLowerCase();

  const filtered = itemsList.filter((item) =>
    item.name.toLowerCase().includes(userInput)
  );

  console.log(userInput, 'userInput');
  console.log(filtered, 'filtered');

  const dataToMap = userInput ? filtered : itemsList;

  console.log(dataToMap, 'dataToMap');

  if (userInput) {
    document.getElementById('searchTitle').innerHTML = 'Search Results: ';
    for (let i = 0; i < dataToMap.length; i++) {
      document.getElementById('searchResults').innerHTML +=
        dataToMap[i].name + '<br />';
    }
  } else {
    for (let i = 0; i < dataToMap.length; i++) {
      document.getElementById('itemNames').innerHTML +=
        dataToMap[i].name + '<br />';
    }
  }
}

displayNames();

document.getElementById('submitBtn').addEventListener('click', displayNames);

//   step 1 store the user input text in a variable
//   step 2 check if the letters of the variable matches with the elements in array
//   step 3 display the element
