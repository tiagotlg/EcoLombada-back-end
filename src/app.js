import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js';
import lombadaRoutes from './routes/lombada.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/lombadas', lombadaRoutes);
app.use('/auth', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API da Clinix ok.');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando: http://localhost:${PORT}`);
});