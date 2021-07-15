const mongoose = require("mongoose");

const equipamentoInformaticoSchema = mongoose.Schema({
  nome: String,
  idade: String,
  uso: String,
  estado: String,
  versionKey: false,
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Equipamento", equipamentoInformaticoSchema);
