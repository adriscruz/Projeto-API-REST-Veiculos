const { Router } = require("express");
const router = Router();
const VehiclesController = require("../controllers/vehiclesController");
const vehicleCreationValidation = require("../middlewares/vehicleCreationValidation");

router.post(
  "/",
  vehicleCreationValidation.validationBodyResult,
  vehicleCreationValidation.checkResult,
  VehiclesController.createVehicle
);

router.get("/", VehiclesController.getAllProducts);

router.get("/:id", VehiclesController.getProductById);

router.patch("/:id", VehiclesController.updateVehicle);

router.delete("/:id", VehiclesController.deleteVehicle);

module.exports = router;
