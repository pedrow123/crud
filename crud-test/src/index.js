const express = require('express');
const app = express();
const port = 3000;

const firmRoutes = require('./routes/FirmRoutes');

app.use(express.json());
app.use('/firm', firmRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});