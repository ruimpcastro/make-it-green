const Equipamento = require("../models/equipamento");

module.exports = class API {
  //GET all
  static async fetchAllEquipamento(req, res) {
    try {
      const equipamentos = await Equipamento.find();
      res.status(200).json(equipamentos);
      console.log("GET", equipamentos);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // GET by Id
  static async fetchEquipamentoById(req, res) {
    const id = req.params.id;
    try {
      const equipamento = await Equipamento.findById(id);
      res.status(200).json(equipamento);
      console.log("ID", equipamento);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // Create equipamento
  static async createEquipamento(req, res) {
    const equipamento = req.body;
    console.log("CREATE", equipamento);
    try {
      await Equipamento.create(equipamento);
      console.log("CREATE", equipamento);
      res.status(201).json({ message: "Equipamento created successfully " });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // Update equipamentoInformatico
  static async updateEquipamento(req, res) {
    const id = req.params.id;
    const editEquipamento = req.body;
    try {
      await Equipamento.findByIdAndUpdate(id, editEquipamento);
      es.status(200).json({ message: "Equipamento updated successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // Delete equipamentoInformatico
  static async deleteEquipamento(req, res) {
    const id = req.params.id;
    try {
      const result = await Equipamento.findByIdAndDelete(id);
      res.status(200).json({ message: "Equipamento deleted successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
