const Veiculo = require("../models/veiculo");

module.exports = {
  async createVeiculo(req, res) {
    try {
      const {
        locadora,
        modelo,
        marca,
        ano,
        motor,
        portas,
        cambio,
        ar_condicionado,
      } = req.body;

      const veiculo = await Veiculo.create({
        locadora,
        modelo,
        marca,
        ano,
        motor,
        portas,
        cambio,
        ar_condicionado,
      });

      res.status(200).json({ veiculo });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async updateVeiculo(req, res) {
    try {
        const { id } = req.params;
    
        const {
          locadora,
          modelo,
          marca,
          ano,
          motor,
          portas,
          cambio,
          ar_condicionado,
        } = req.body;
    
        const veiculo = await Veiculo.findOne({ where: {id} });
    
        if (!veiculo) {
          res.status(401).json({ message: "Nenhum veículo encontrado" });
        } else {
          const veiculo = await Veiculo.update(
            {
              locadora,
              modelo,
              marca,
              ano,
              motor,
              portas,
              cambio,
              ar_condicionado,
            },
            { where: { id } }
          )
    
          res.status(200).json({ veiculo })
        }

    } catch (error) {
        res.status(400).json({ error })
    }
  },
  async listVeiculos(req, res) {
    try {
        const veiculos = await Veiculo.findAll()
        

        if(!veiculos){
            res.status(200).json({ message: "Não existe veículos cadastrados "})
        } else {
            res.status(200).json({ veiculos })
        }

    } catch (error) {
        res.status(400).json({ error })
    }
  },
  async deleteVeiculo(req, res){
    try {

        const { id } = req.params
    
        const veiculo = await Veiculo.findOne({ where: { id } })
        if(!veiculo){
            res.status(401).json({ message: "Veiculo não encontrado" })
        } else {
            await Veiculo.destroy({ where: { id } })
            res.status(200).json({ ok: true })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
  },
  async getVeiculoById(req, res){
    try {
        const { id } = req.params
        const veiculo = await Veiculo.findOne({ where: { id } })
        if(!veiculo){
            res.status(401).json({ message: "Veiculo não encontrado" })
        } else {
            res.status(200).json({ veiculo })
        }

    } catch(error){
        res.status(400).json({ error })
    }
  }
};
