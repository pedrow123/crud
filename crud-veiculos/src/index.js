const express = require('express');
const app = express();
const port = 3000;

const veiculoRoutes = require('./routes/VeiculoRoutes');

app.use(express.json());
app.use('/veiculos', veiculoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});