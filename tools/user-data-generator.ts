import * as fs from 'fs';
import * as faker from 'faker';
import { User } from 'src/app/model';

const storeData = (data: any, path: any) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

const baseCount = 20;

let bagsArray: User[] = [];

for (let i = 0; i < baseCount; i++) {
    const user: User = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        rate: faker.random.number({ min: 0.1, max: 1.0, precision: 0.1 })
    };
    bagsArray.push(user);
}

storeData(bagsArray, '../src/assets/data/users.json');
