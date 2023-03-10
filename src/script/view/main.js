import DataSource from "../data/data-source.js";
import '../component/search-bar.js';
import '../component/club-list.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  // dihapus karna sudah diterapkan pada component search-bar.js
  // const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('club-List');

  // const onButtonSearchClicked = () => {
  //   const dataSource = new DataSource(renderResult, fallbackResult);
  //   dataSource.searchClub(searchElement.value);
  // };

  const onButtonSearchClicked = () => {
    DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };

  // ==================== versi async await
  // const onButtonSearchClicked = async () => {
  //   try {
  //     const result = await DataSource.searchClub(searchElement.value);
  //     renderResult(result);
  //   } catch (message) {
  //     fallbackResult(message);
  //   }
  // };

  // const renderResult = results => {
  //   clubListElement.innerHTML = '';
  //   results.forEach(function (club) {
  //     // const name = club.name;
  //     // const fanArt = club.fanArt;
  //     // const description = club.description;

  //     // terapkan destructering
  //     const {name, fanArt, description} = club;

  //     const clubElement = document.createElement('div');
  //     clubElement.setAttribute('class', 'club');

  //     // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
  //     //     '<div class="club-info">\n' +
  //     //     '<h2>' + name + '</h2>\n' +
  //     //     '<p>' + description + '</p>' +
  //     //     '</div>';

  //     //menggunakan tamplate literals
  //     clubElement.innerHTML = `
  //       <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
  //       <div class="club-info">
  //         <h2>${name}</h2>
  //         <p>${description}</p>
  //       </div>
  //     `;
  //     clubListElement.appendChild(clubElement);
  //   });
  // };

  const renderResult = results => {
    clubListElement.clubs = results;
  };

  // const fallbackResult = message => {
  //   clubListElement.innerHTML = '';
  //   // clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
  //   clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  // };
  
  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;