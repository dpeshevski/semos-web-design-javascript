// DOM
const sectionEl = document.querySelector('section');

const paragraphEl = document.createElement('p');
const divEl = document.createElement('div');
const anchor = document.createElement('a');

paragraphEl.textContent = 'Paragraph 2 - by JavaScript code using document';
paragraphEl.style.color = 'white';
paragraphEl.style.backgroundColor = 'blue';
paragraphEl.style.padding = '10px';
paragraphEl.style.width = '450px';
paragraphEl.style.textAlign = 'center';

sectionEl.appendChild(paragraphEl);

anchor.innerHTML = 'Link 2';
anchor.href = "http://www.google.com";

sectionEl.appendChild(anchor);

divEl.innerHTML = 'Hello World';
divEl.setAttribute('class', 'highlight');

sectionEl.appendChild(divEl);