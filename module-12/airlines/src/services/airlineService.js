export default {
  apiUrl: 'https://api.instantwebtools.net/v1',
  getAllAirlines() {
    return fetch(`${this.apiUrl}/airlines`);
  },
  createAirline(airlineData) {
    return fetch(`${this.apiUrl}/airlines`, {
      body: airlineData,
      method: 'post',
    });
  },
  getPassengerById(id) {
    return fetch(`${this.apiUrl}/passenger/${id}`);
  },
  deletePassengerById(id) {
    return fetch(`${this.apiUrl}/passenger/${id}`, { method: 'DELETE' });
  },
  updatePassengerById(id, newPassengerInfo) {
    return fetch(`${this.apiUrl}/passenger/${id}`, {
      method: 'PUT',
      body: newPassengerInfo,
    });
  },
  updatePassengerNameById(id, newName) {
    return fetch(`${this.apiUrl}/passenger/${id}`, {
      method: 'PATCH',
      body: {
        name: newName,
      },
    });
  },
  getPassengersInfo(page = 0, size = 10) {
    return fetch(`${this.apiUrl}/passenger/?page=${page}&size=${size}`);
  },
};
