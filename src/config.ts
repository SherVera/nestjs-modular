import { registerAs } from '@nestjs/config';
// Se puede agrupar variables de entorno, asi como de hacer un tipado
export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    apiKey: process.env.API_KEY,
  };
});
