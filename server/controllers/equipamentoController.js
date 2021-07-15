const equipamentoInformatico = require("../models/equipamento");

module.exports = class EquipamentoInformatico {
  //GET all
  static async fetchAllEquipamento(req, res) {
    try {
      const equipamento = await Equipamento.find();
      res.status(200).json(equipamento);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // GET by Id
  static async fetchEquipamentoById(req, res) {
    const id = req.params.id;
    try {
      const equipamento = await Equipamento.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // Create equipamento
  static async createEquipamento(req, res) {
    const equipamento = req.body;
    try {
      await Equipamento.create(equipamento);
      res.status(201).json({ message: "Post created successfully" });
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
      es.status(200).json({ message: "Post updated successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // Delete equipamentoInformatico
  static async deleteEquipamento(req, res) {
    const id = req.params.id;
    try {
      const result = await Equipamento.findByIdAndDelete(id);
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
