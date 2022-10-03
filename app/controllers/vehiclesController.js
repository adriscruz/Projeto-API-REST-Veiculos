const VehicleModel = require("../models/vehicleModel");
const { ulid } = require("ulid");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

class VehiclesController {
  createVehicle(req, res) {
    const { ulid } = require("ulid");
    const data = { id: ulid(), ...req.body };

    VehicleModel.create(data)
      .then(() => res.status(201).json(data))
      .catch((error) => res.status(500).json({ error: error }));
  }

  getAllProducts(req, res) {
    if (req.url === "/") {
      VehicleModel.findAll()
        .then((result) => {
          console.log(`A total of ${result.length} items were founds`);
          res.status(200).json(result);
        })
        .catch((error) => {
          res.status(500).json({
            msg: "Erro na conexão",
            nome: error.name,
            Severidade: error.parent.severity,
            code: error.parent.code,
          });
        });
    } else {
      const { nome } = req.query;
      VehicleModel.findAll({
        where: {
          nome: {
            [Op.iLike]: `%${nome}%`,
          },
        },
      })
        .then((result) => res.status(200).json(result))
        .catch();
    }
  }

  getProductById(req, res) {
    VehicleModel.findOne({ where: { id: req.params.id } })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ Resultado: "Produto não encontrado" });
        }
      })
      .catch((error) => res.status(500).json({ msg: error }));
  }

  updateVehicle(req, res) {
    VehicleModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({
          msg: "Erro de conexão",
          nome: error.name,
          severidade: error.severity,
          código: error.parent.code,
        });
      });
  }

  deleteVehicle(req, res) {
    VehicleModel.destroy({
      where: { id: req.params.id },
    })
      .then((result) => {
        res.status(204).end();
      })
      .catch((error) => {
        res.status(500).json({ msg: error });
      });
  }
}

module.exports = new VehiclesController();
