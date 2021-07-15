const express = require("express");
const router = express.Router();
const EquipamentoInformatico = require("../controllers/equipamentoController");

router.get("/", EquipamentoInformatico.fetchAllEquipamento);
router.get("/:id", EquipamentoInformatico.fetchEquipamentoById);
router.post("/", EquipamentoInformatico.createEquipamento);
router.patch("/:id", EquipamentoInformatico.updateEquipamento);
router.delete("/:id", EquipamentoInformatico.deleteEquipamento);

module.exports = router;
