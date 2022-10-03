const { body, validationResult } = require("express-validator");

const validationBodyResult = [
  body("nome").notEmpty().withMessage("O nome é obrigatório").trim(),
  body("marca").notEmpty().withMessage("A marca é obrigatório").trim(),
  body("modelo").notEmpty().withMessage("O modelo é obrigatório").trim(),
  body("preco").isNumeric(),
  body("ano").isNumeric(),
];

const checkResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }

  next();
};

module.exports = { validationBodyResult, checkResult };
