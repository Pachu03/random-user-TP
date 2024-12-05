export class Person {
  #name;
  #surname;
  email;
  phone;
  picture;
  location;

  constructor(name, lastName) {
    this.#name = name;
    this.#surname = lastName;
  }

  //Getters

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }
  get email() {
    return this.email;
  }
  get phone() {
    return this.phone;
  }
  get picture() {
    return this.picture;
  }
  get location() {
    return this.location;
  }

  //Setters
  set name(value) {
    this.#name = value;
  }

  set surname(value) {
    this.#surname = value;
  }
  set _email(value) {
    this.email = value;
  }
  set _phone(value) {
    this.phone = value;
  }
  set _picture(value) {
    this.picture = value;
  }
  set _location(value) {
    this.location = value;
  }
}
