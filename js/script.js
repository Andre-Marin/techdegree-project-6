/*
Treehouse Techdegree: Data Pagination and Filtering
*/
const links = document.querySelector('.link-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list,page) {
  let start = (page * 9) - 9;
  let end = page * 9;
  const ul = document.querySelector('.student-list');
  ul.innerHTML = '';

  for (let i = 0; i<list.length; i++) {
    let student = list[i];
    let html = `
    <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${student.picture.thumbnail}" alt="Profile Picture">
        <h3>${student.name.title} ${student.name.first} ${student.name.last}</h3>
        <span class="email">${student.email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${student.registered.date}</span>
      </div>
    </li>
    `;
    if ( i >= start && i < end ) {
      ul.insertAdjacentHTML(
        'beforeend',
        html
      );
    }
  }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  let end = Math.floor(list.length / 9) + 1;
  links.innerHTML = '';

  for (let i = 0; i<end; i++) {
    let html = `
    <li>
      <button type='button'>${i+1}</button>
    </li>
    `;
    links.insertAdjacentHTML('beforeend', html);
  }
  let active = document.querySelector('.link-list li button');
  active.className = 'active';
}

links.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    let active = document.querySelectorAll('.link-list li button');
    for (let i = 0; i<active.length; i++) {
      if (active[i].className === 'active') {
        active[i].className = '';
      }
    }
    btnPage = e.target.textContent;
    for (let i = 0; i<active.length; i++) {
      if (active[i].textContent === btnPage) {
        active[i].className = 'active';
      }
    }
    showPage(data, btnPage);
  }
});


// Call functions
showPage(data, 1);
addPagination(data);
