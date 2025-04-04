const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const { swaggerUi, swaggerSpec } = require('./swagger');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
  console.log('Swagger 문서: http://localhost:3000/api-docs');
});
