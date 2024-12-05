import { Person } from "../Person";

export let getUser = (dataUser) => {
  return new Promise((resolve, reject) => {
    if (dataUser !== null && dataUser !== undefined) {
      let newPerson = new Person(dataUser.name.last, dataUser.name.first);
      newPerson._email = dataUser.email;
      newPerson._phone = dataUser.phone;
      newPerson._location = dataUser.location.city;
      newPerson._picture = dataUser.picture.large;
      resolve(newPerson);
    } else {
      reject("getUser: literObjectCars is null or undefined");
    }
  });
};
