// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(theDate,theHeader, theTemp) {
    const myHeader = document.createElement('div');
    myHeader.classList.add('header');
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = theDate;
    const myH1 = document.createElement('h1');
    myH1.textContent = theHeader;
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = theTemp;

    const divHeader = document.querySelector('.header-container');
    divHeader.appendChild(myHeader);
    myHeader.appendChild(dateSpan);
    myHeader.appendChild(myH1);
    myHeader.appendChild(tempSpan);
}
Header('MARCH 28, 2019', 'Lambda Times', '98°')