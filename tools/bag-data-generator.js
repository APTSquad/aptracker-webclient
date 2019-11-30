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
    var bag = {
        name: faker.address.country(),
        responsible: {
            name: faker.name.firstName()
        }
    };
    bagsArray.push(bag);
}
storeData(bagsArray, '../src/assets/data/bags.json');
