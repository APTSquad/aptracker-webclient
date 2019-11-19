"use strict";
exports.__esModule = true;
var fs = require("fs");
var faker = require("faker");
var storeData = function (data, path) {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    }
    catch (err) {
        console.error(err);
    }
};
var baseCount = 20;
var bagsArray = [];
for (var i = 0; i < baseCount; i++) {
    var user = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        rate: faker.random.number({ min: 0.1, max: 1.0, precision: 0.1 })
    };
    bagsArray.push(user);
}
storeData(bagsArray, '../src/assets/data/users.json');
