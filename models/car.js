const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'cars.json');

const getCarsFromFile = cb => {
   fs.readFile(p, (err, data) => {
      if (err) {
         return cb([]);
      }
      cb(JSON.parse(data));
   });
};

module.exports = class Car {
   constructor(dates, name, number, description, price, imgUrl) {
      this.dates = dates;
      this.name = name;
      this.number = number;
      this.description = description;
      this.price = price;
      this.imgUrl = imgUrl;
   }
   
   save() {
      getCarsFromFile(cars => {
         cars.push(this);
         fs.writeFile(p, JSON.stringify(cars), (err) => {
            console.log(err);
         });
      });
   }

   static fetchAll(cb) {
      getCarsFromFile(cb);
   }

   static findByNumber(number, cb) {
      getCarsFromFile(cars => {
         const car = cars.find(c => c.number === number);
         cb(car);
      });
   }
};
