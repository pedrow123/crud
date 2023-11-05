const express = require('express');
const app = express();
const port = 3030;
const cors = require('cors');

const veiculoRoutes = require('./routes/VeiculoRoutes');

app.use(cors());
app.use(express.json());
app.use('/veiculos', veiculoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});