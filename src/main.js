import "./style.css";
import { url_random_user, url_worl_time, options_worl_time } from "./api";
import { Person } from "./Person";
import { createStructureDom } from "./helper/domHelper";
import { getUser } from "./helper/promiseHelper";

const divContainer = document.querySelector(".container");

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

const createElements = (urlImg, textPerson, nameSecondaryPerson) => {
  divContainer.textContent = " ";

  const btn = document.createElement("button");
  btn.textContent = nameBtn;

  btn.addEventListener("click", generateUser);

  divContainer.append(
    createStructureDom(urlImg, textPerson, nameSecondaryPerson),
    btn
  );
};

let generateUser = async () => {
  try {
    const response = await fetch(url_random_user);
    const data = await response.json();

    const response2 = await fetch(url_worl_time, options_worl_time);
    const data2 = await response2.json();

    let person2 = await getUser(data.results[0]);

    const dataperson = [
      " " + person2.surname + " " + person2.name,
      " " + person2.email,
      " " + person2.phone,
      " " + person2.location,
      " " + data2.datetime,
    ];

    createElements(person2.picture, textPerson, dataperson);
  } catch (error) {
    console.error(error);
  }
};

createElements(urlImg, textPerson, nameSecondaryPerson);
