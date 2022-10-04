function getAllCars() {
  const endpoint = "http://localhost/cars";

  const config = {
    method: "GET",
  };

  fetch(endpoint, config)
    .then(convertToJson)
    .then(getAllCarsSucess)
    .catch(getAllCarsError);
}

function convertToJson(res) {
  return res.json();
}

function getAllCarsSucess(cars) {
  document.querySelector("table tbody").innerHTML = cars
    .map((cars) => {
      return `<tr>
                <td>${cars.nome}</td>
                <td>${cars.marca}</td>
                <td>${cars.modelo}</td>
                <td>${cars.ano}</td>
                <td>R$ ${cars.preco}</td>
            </tr>`;
    })
    .join("");
}

function getAllCarsError(error) {
  console.log(error.message, error.stack);
}

getAllCars();
