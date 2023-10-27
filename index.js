import express from 'express';
import routes from './src/routes/routes';

const app = express();
const PORT = 3000;//port our server is going to run

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
)