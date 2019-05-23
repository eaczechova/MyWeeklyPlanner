function createToDoItem(event) {
  let getID = event.target.id;
  let targetNodeByID = event.target.nextSibling.nextSibling.nextSibling.id;

  let inputValue = document.getElementById(getID).value;
  let inputText = document.createTextNode(inputValue);

  if (event.key === 'Enter' && inputValue.length > 0) {
    event.preventDefault();

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'to-do-item');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('class', 'to-do-item__input');

    let labelElement = document.createElement('label');
    labelElement.setAttribute('class', 'to-do-item__label');

    let spanElement = document.createElement('span');
    spanElement.setAttribute('class', 'to-do-item__checkbox');

    let node = document.getElementById(targetNodeByID);

    node.appendChild(liElement);
    liElement.appendChild(inputElement);
    liElement.appendChild(labelElement);
    labelElement.appendChild(spanElement);
    labelElement.appendChild(inputText);

    document.getElementById(getID).value = '';

    checkIds();
  }
}

function checkIds() {
  let labels = document.getElementsByTagName('LABEL');
  if(labels.length > 1) {
    for (let i = 0; i < labels.length; i++) {
      labels[i].setAttribute('for', 'item-'+i);
    }
  }

  let input = document.getElementsByClassName('to-do-item__input');
  if(input.length > 1) {
    for(let i = 0; i <input.length; i++) {
      input[i].setAttribute('id', 'item-'+i);
    }
  }
}

const node = document.getElementsByClassName('to-do-input');

for (let i = 0; i < node.length; i++ ) {
  node[i].addEventListener('keydown', createToDoItem);
}
