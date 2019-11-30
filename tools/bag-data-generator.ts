import * as fs from 'fs';
import * as faker from 'faker';
import { Bag } from 'src/app/model';

const storeData = (data: any, path: any) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

const baseCount = 20;

let bagsArray: Bag[] = [];

for (let i = 0; i < baseCount; i++) {
    const bag: Bag = {
        name: faker.address.country(),
        responsible: {
            name: faker.name.firstName()
        }
    };
    bagsArray.push(bag);
}

storeData(bagsArray, '../src/assets/data/bags.json');
