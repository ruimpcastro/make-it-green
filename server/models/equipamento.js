const mongoose = require("mongoose");

const equipamentoInformaticoSchema = mongoose.Schema({
  id_user: Integer,
  nome: String,
  idadeEquipamento: String,
  usoEquipamento: String,
  EstadoEquipamento: String,
});

module.exports = mongoose.model("Equipamento", equipamentoInformaticoSchema);
