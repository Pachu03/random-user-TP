import "./style.css";

const divContainer = document.querySelector(".container");

const textPerson = ["Name:", "Mail:", "Phone:", "Location:", "Current Time:"];

const nameSecondaryPerson = [
  " name surname",
  " mail",
  " phone",
  " city",
  " time",
];

const nameBtn="GENERATE USER";

const urlImg ='./public/user_nt_found.jpg'

const createElements = () => {
  const divCard = document.createElement("div");
  divCard.className = "card";

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
  btn.textContent= nameBtn;

  btn.addEventListener("click",generateUser);

  divContainer.append(divCard,btn);
};

const generateUser =()=>{
  console.log(2);
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
       
}

createElements();
