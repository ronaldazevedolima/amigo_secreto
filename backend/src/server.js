/* eslint-disable no-console */
const app = require('./app');

const PORT = process.env.API_PORT_BACK || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
