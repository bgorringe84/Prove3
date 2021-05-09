const Car = require('../models/car');

exports.getCars = (req, res, next) => {
   Car.fetchAll(cars => {
      res.render('showRoom', {
         cars: cars,
         pageTitle: 'ShowRoom',
         path: '/'
      });
   });
};

exports.getDetail = (req, res, next) => {
   const carNumber = req.params.carNumber;
   Car.findByNumber(carNumber, car => {
      res.render('car-detail', {
         car: car,
         pageTitle: car.name,
         path:'/cars'
      });
   });
};