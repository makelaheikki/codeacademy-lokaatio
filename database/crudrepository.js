let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
  { id: 3, latitude: 80, longitude: 50 },
  { id: 4, latitude: 20, longitude: 10 },
];

module.exports = {
  findAll: () => database,
  findById: (id) => database.find((element) => element.id === id),
  deleteById: (id) => {
    let tempdb = database.filter((element) => element.id != id);
    if (tempdb.length != database.length) {

      database = tempdb;
      return true;
    }
    return false;
  },
};
