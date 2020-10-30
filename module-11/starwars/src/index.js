import './sass/styles.scss';

const planetsContainerRef = document.querySelector('.planets');
const loadMoreButtonRef = document.querySelector('.load-more');
const loadAllButtonRef = document.querySelector('.load-all');

let currentPage = 1;
let maxPagesCount = 1;

const loadMoreButtonClickHandler = () => {
  fetchPlanets(currentPage);
};

const createPlanet = data => {
  const { name, population, climate, index } = data;
  const imageUrl =
    index === 0 ? '/placeholder.jpg' : `/planets/${index + 1}.jpg`;
  return `
    <li class="planet">
        <h2 class="planet__name">Name: ${name}</h2>
        <img src="https://starwars-visualguide.com/assets/img/${imageUrl}" /> 
        <span class="planet__population">Population: ${population} people</span>
        <span class="planet__climate">Climate: ${climate}</span>
    </li>
    `;
};

const fetchPlanets = (page = 1) => {
  if (currentPage < maxPagesCount || currentPage === 1) {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then(res => res.json())
      .then(res => {
        const { results: planets = [], count } = res;

        maxPagesCount = count / planets.length + 1;

        planets.forEach((planetData, index) => {
          const currentIndex = (currentPage - 1) * 10 + index;
          const planetElement = createPlanet({
            ...planetData,
            index: currentIndex,
          });

          planetsContainerRef.insertAdjacentHTML('beforeend', planetElement);
        });

        currentPage++;
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const fetchAllPlanets = () => {
  const promises = [];

  for (let i = currentPage + 1; i < maxPagesCount; i++) {
    const promise = fetch(`https://swapi.dev/api/planets/?page=${i}`);
    promises.push(promise);
  }

  Promise.all(promises)
    .then(response => {
      const promises = response.map(res => res.json());
      return Promise.all(promises);
    })
    .then(response => {
      response.forEach(res => {
        const { results: planets = [] } = res;

        planets.forEach((planetData, index) => {
          const currentIndex = (currentPage - 1) * 10 + index;
          const planetElement = createPlanet({
            ...planetData,
            index: currentIndex,
          });

          planetsContainerRef.insertAdjacentHTML('beforeend', planetElement);
        });

        currentPage++;
      });
    })
    .catch(e => console.log(e));
};

fetchPlanets();

loadMoreButtonRef.addEventListener('click', loadMoreButtonClickHandler);
loadAllButtonRef.addEventListener('click', fetchAllPlanets);
