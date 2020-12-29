const list = document.querySelector('ul');
const input = document.querySelector('input');
// const button = document.getElementById('add-item');
const button = document.querySelector('button');

button.onclick = function () {
  let inputItemValue = input.value;

  // input.value = null;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  // <li><span>skdkd</span></li>

  listItem.appendChild(listText); // <li><span></span></li>
  listText.textContent = inputItemValue; // <li><span>Input Value Text</span></li>

  // <li> ... <button>Delete Item</button></li>
  listItem.appendChild(listBtn);
  listBtn.innerHTML = 'Delete';
  // <li><span>Input Value Text</span><button>Delete</button></li>

  // <ul>
  //   <li><span>Input Value Text</span><button>Delete</button></li>
  // </ul>
  list.appendChild(listItem);

  listBtn.onclick = function () {
    list.removeChild(listItem);
  }

  input.focus();
}