const bodyElement = document.querySelector('body');
const mainContainer = document.createElement('main');
mainContainer.className = 'container';
bodyElement.appendChild(mainContainer);

const headerDiv = document.createElement('div');
const twoBlockDiv = document.createElement('div');
headerDiv.className = 'header';
twoBlockDiv.className = 'two-block';
mainContainer.appendChild(headerDiv);
mainContainer.appendChild(twoBlockDiv); 

const unorderList = document.createElement('ul');
headerDiv.appendChild(unorderList);

const headerHome = document.createElement('li');
const headerCss = document.createElement('li');
const headerJS = document.createElement('li');

const headerHomeA = document.createElement('a');
headerHomeA.href = '#home';
headerHomeA.textContent = 'Home';

const headerCSSA = document.createElement('a');
headerCSSA.href = '#css';
headerCSSA.textContent = 'CSS';

const headerJSA = document.createElement('a');
headerJSA.href = '#javascript';
headerJSA.textContent = 'JAVASCRIPT';

unorderList.appendChild(headerHome);
unorderList.appendChild(headerCss);
unorderList.appendChild(headerJS);

headerHome.appendChild(headerHomeA);
headerCss.appendChild(headerCSSA);
headerJS.appendChild(headerJSA);

const menuDiv = document.createElement('div');
menuDiv.className = 'menu';
const multiDiv = document.createElement('div');
multiDiv.className = 'multiple-container';
twoBlockDiv.appendChild(menuDiv);
twoBlockDiv.appendChild(multiDiv);

const menuP = document.createElement('p');
menuP.textContent = `It used to be a thing only Internet Explorer could do (ancient versions) with stuff like -ms-scrollbar-base-color. These do not exist anymore.
Then WebKit-based browser engines got on board with stuff like ::-webkit-scrollbar. That’s what this Alamanac entry mostly covers, as it works across the Safari/Chrome landscape today.
Standards have finally gotten involved, and those styling options are covered by un-prefixed properties like scrollbar-color and scrollbar-width.
Styling scrollbars for the Safari/Chrome world is exposed behind the -webkit vendor prefix.

This almanac entry is an overview, for a more complete breakdown of working with custom scrollbars, please read this CSS-Tricks article.

body::-webkit-scrollbar`;
menuDiv.appendChild(menuP);


const mainRightDiv = document.createElement('div');
const footerDiv = document.createElement('div');
mainRightDiv.className = 'main-right';
footerDiv.className = 'footer';
multiDiv.appendChild(mainRightDiv);
multiDiv.appendChild(footerDiv);

const mainP = document.createElement('p');
const rightP = document.createElement('p');
mainP.textContent = 'Main';
rightP.textContent = 'Right';
mainRightDiv.appendChild(mainP);
mainRightDiv.appendChild(rightP);

const footerP = document.createElement('p');
footerP.textContent = 'Footer';
footerDiv.appendChild(footerP);
