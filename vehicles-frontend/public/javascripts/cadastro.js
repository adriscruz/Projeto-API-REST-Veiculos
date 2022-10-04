function cadastroCarro() {
  const endpoint = "http://localhost/cars";

  const data = {
    nome: document.querySelector("#nome").value,
    marca: document.querySelector("#marca").value,
    modelo: document.querySelector("#modelo").value,
    ano: document.querySelector("#ano").value,
    preco: document.querySelector("#preco").value,
  };

  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-type": "application/json",
    }),
  };

  fetch(endpoint, config).then(cadastroCarroOk).catch(cadastroCarroFalhou);
}

function cadastroCarroOk(res) {
  if (res.statusText === "Created") {
    location.href = "/";
  }
}

function cadastroCarroFalhou(error) {
  console.log(error);
}

document.querySelector(".btn-primary").addEventListener("click", cadastroCarro);
