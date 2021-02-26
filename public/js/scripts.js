const main = async () => {
  let result = await fetch("http://localhost:8080/api/locations");
  let data = await result.json();
  modifyUI(data);
};

const modifyUI = (data) => {
  let ul = document.querySelector("ul");
  let temp = "";
  data.forEach((element) => {
    temp += `<li>${element.id}-${element.latitude}-${element.longitude}</li>`;
  });
  ul.innerHTML = temp;
};

main();
