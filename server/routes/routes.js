const express = require("express");
const router = express.Router();
const equipamentoInformatico = require("../controllers/equipamentoController");

router.get("/", equipamentoInformatico.fetchAllEquipamento);
router.get("/:id", equipamentoInformatico.fetchEquipamentoById);
router.post("/", equipamentoInformatico.createEquipamento);
router.patch("/:id", equipamentoInformatico.updateEquipamento);
router.delete("/:id", equipamentoInformatico.deleteEquipamento);

module.exports = router;
