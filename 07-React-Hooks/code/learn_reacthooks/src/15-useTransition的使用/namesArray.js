import { faker } from '@faker-js/faker';

const namesArray = []

for (let i = 0; i < 10000; i++) {
  namesArray.push({
    name: faker.person.fullName(),
    id: faker.string.uuid()
  })
}
export default namesArray