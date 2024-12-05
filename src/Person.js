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
  set email(value) {
    this.email = value;
  }
  set phone(value) {
    this.phone = value;
  }
  set picture(value) {
    this.picture = value;
  }
  set location(value) {
    this.location = value;
  }
}
