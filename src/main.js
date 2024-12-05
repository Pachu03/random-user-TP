import "./style.css";
import { url_random_user, url_worl_time, options_worl_time } from "./api";
import { Person } from "./Person";
const divContainer = document.querySelector(".container");

const divCard = document.createElement("div");
divCard.className = "card";

const textPerson = ["Name:", "Mail:", "Phone:", "Location:", "Current Time:"];

const nameSecondaryPerson = [
  " name surname",
  " mail",
  " phone",
  " city",
  " time",
];

const nameBtn = "GENERATE USER";

const urlImg = "./public/user_nt_found.jpg";

const createElements = (urlImg, nameSecondaryPerson) => {
  divContainer.textContent=" ";
  divCard.innerHTML = " ";
  
  const img = document.createElement("img");
  img.src = urlImg;

  divCard.append(img);

  let counter = 0;
  textPerson.forEach((person) => {
    const span = document.createElement("span");

    const strong = document.createElement("strong");
    strong.textContent = person;

    span.append(strong, nameSecondaryPerson[counter]);
    divCard.append(span);
    counter++;
  });

  const btn = document.createElement("button");
  btn.textContent = nameBtn;

  btn.addEventListener("click", generateUser);

  divContainer.append(divCard, btn);
};

const generateUser = async () => {
  try {
    const response = await fetch(url_random_user);
    const data = await response.json();

    const response2 = await fetch(url_worl_time, options_worl_time);
    const data2 = await response2.json();

    const user = data.results[0];

    const person = new Person(user.name.last, user.name.first);

    const dataperson = [
      " " + person.surname + " " + person.name,
      " " + user.email,
      " " + user.phone,
      " " + user.location.city,
      " " + data2.datetime,
    ];

    createElements(user.picture.large, dataperson);
  } catch (error) {
    console.error(error);
  }
};

createElements(urlImg, nameSecondaryPerson);
