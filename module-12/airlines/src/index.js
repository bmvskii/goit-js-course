import AirlineTemplate from './templates/airline.hbs';
import AirlineService from './services/airlineService';

import './sass/styles.scss';

const airlines = document.querySelector('.airlines');

const renderAirlines = data => {
  data.forEach(airlineData => {
    const airlineContent = AirlineTemplate(airlineData);
    airlines.insertAdjacentHTML('beforeend', airlineContent);
  });
};

AirlineService.getAllAirlines()
  .then(Response.prototype.json)
  .then(renderAirlines)
  .catch(console.log);

const onAirlineClick = event => {
  const { target } = event;
  const airline = target.closest('.airline');

  if (airline) {
    airline.classList.toggle('airline--active');
  }
};

airlines.addEventListener('click', onAirlineClick);
