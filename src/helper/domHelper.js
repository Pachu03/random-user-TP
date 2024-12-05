export const createStructureDom = (urlImg, textPerson, nameSecondaryPerson) => {
  const divCard = document.createElement("div");
  divCard.className = "card";
  divCard.innerHTML = " ";

  const img = document.createElement("img");
  img.src = urlImg;

  divCard.append(img)

  let counter = 0;
  const card = textPerson.forEach((person) => {
    const span = document.createElement("span");

    const strong = document.createElement("strong");
    strong.textContent = person;

    span.append(strong, nameSecondaryPerson[counter]);
    divCard.append(span)
    counter++;
  });
  return divCard;
};
