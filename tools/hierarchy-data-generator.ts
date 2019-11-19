import * as fs from 'fs';
import * as faker from 'faker';
import { Client, Project, Article } from 'src/app/model';

const storeData = (data: any, path: any) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

const baseCount = 20;

const clients = baseCount;
const projects = baseCount;
const articles = baseCount;

let clientsArray: Client[] = [];

for (let i = 0; i < clients; i++) {
    const client: Client = {
        name: faker.company.companyName(),
        bag: { name: faker.address.country() },
        projects: []
    };
    for (let j = 0; j < projects - i; j++) {
        const project: Project = {
            name: faker.commerce.productName(),
            bag: { name: faker.address.country() },
            articles: []
        };

        for (let k = 0; k < articles - i; k++) {
            const article: Article = {
                name: faker.commerce.department(),
                bag: { name: faker.address.country() },
            };
            project.articles.push(article);
        }
        client.projects.push(project);
    }
    clientsArray.push(client);
}

storeData(clientsArray, '../src/assets/data/hierarchy.json');
