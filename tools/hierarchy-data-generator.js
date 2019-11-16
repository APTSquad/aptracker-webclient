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
var clients = baseCount;
var projects = baseCount;
var articles = baseCount;
var clientsArray = [];
for (var i = 0; i < clients; i++) {
    var client = {
        name: faker.company.companyName(),
        bag: { name: faker.address.country() },
        projects: []
    };
    for (var j = 0; j < projects - i; j++) {
        var project = {
            name: faker.commerce.productName(),
            bag: { name: faker.address.country() },
            articles: []
        };
        for (var k = 0; k < articles - i; k++) {
            var article = {
                name: faker.commerce.department(),
                bag: { name: faker.address.country() }
            };
            project.articles.push(article);
        }
        client.projects.push(project);
    }
    clientsArray.push(client);
}
storeData(clientsArray, '../src/assets/data/hierarchy.json');
