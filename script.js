//gets the form and puts it into a variable itemForm
const itemForm = document.getElementById('item-form');

// gets the text bar and puts it into a variable itemInput
const itemInput = document.getElementById('item-input');

//gets the ul with the id item-list and puts it into a variable itemList
const itemList = document.getElementById('item-list');

//gets the clear button and sets it to a variable named clearButton
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');



function addItem(e) {   //the function when an addItem is clicked
    e.preventDefault(); //Prevents from sending it to a GET or POST

    const newItem = itemInput.value; //sets the value thats in the text bar into a variable called newItem

    //Validate Input
    if (newItem === '') {   //If the value is empty 
        alert('Please add an item');    //Gives an alert saying 'add an item'
        return;     //returns so the function ends and it does not continue
    }

    //Create list Item
    const li = document.createElement('li');    // creates an <li and sets it to variable li 
    li.appendChild(document.createTextNode(newItem)); // with the li puts the value of newItem in /* li> newItem <li*/

    const button = createButton('remove-item btn-link text-red');   //creates a button with the classes and sets the variable name to button
    li.appendChild(button); //adds the button into the list

    itemList.appendChild(li);   //adds the new created li to the ul 

    checkUI();
    console.log('check ui');
    itemInput.value='';     //clears the input to be reused
}

function createButton(classes) { //creates a function for the buttons
    const button = document.createElement('button');    //creates a button and assigns variable named button
    button.className = classes; //gives button the class name in the parameter
    const icon = createIcon('fa-solid fa-xmark');   //creates an icon and gives it these classes
    button.appendChild(icon);   //appends the icon into the button
    return button;  //returns buttons
}

function createIcon(classes) {  //function to create icons parameters are the class 
    const icon = document.createElement('i')    //creates an icon assigned to a variable icon 
    icon.className = classes;       //gives icon the class name thats put in the parameters
    return icon //returns the icon 
}

function removeItem(e) {    //function to remove an item
    if (e.target.parentElement.classList.contains('remove-item')){      // if the targets parents has a list of remove-item
        if (confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();  //going to go two parents up so going to I to button to li. then removes the element
            checkUI();
        } else {
            return;
        }
    }
}

function clearItems() {     //function to clear all the items in the list
    while (itemList.firstChild) {      // a while loop to check if there is still a first child === if there is still an li
        itemList.removeChild(itemList.firstChild);      //if there is still a first child === li it is going to remove that li, after that the other li's move up and gets removed
        checkUI();
    }
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearButton.style.display = "none";
        itemFilter.style.display = "none";
    } else {
        clearButton.style.display = "block";
        itemFilter.style.display = "block";
    }
}



//Event Listeners
itemForm.addEventListener('submit', addItem);   //when the button 'add item' is clicked it will run the function addItem
itemList,addEventListener('click', removeItem);     //when the itemList === X button is clicked it will run the removeItem function
clearButton.addEventListener('click', clearItems); //when clear all button is clicked it will run clearItems function

checkUI();


/* 

IDEAS TO ADD

1) Priority coloring
    green not urgent
    yellow need to do but not urgent
    red Important
        ideas === Underline wit the color under the text
        Color on the side of the text

2) To clear Hold for 3 seconds

3) Find ways to input errors take away the confirms and alerts

4) set a dark mode light mode theme

5) More interactive

*/