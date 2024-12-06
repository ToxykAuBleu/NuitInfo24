import express from 'express';
import loginRoutes from './routes/loginRoutes';
import dashboardRoutes from './routes/dashboardRoutes'; // Import dashboardRoutes
import path from 'path';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Add this line
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public')); // Serve static files

app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes); // Use dashboardRoutes


// app main page
app.use(express.static(path.join(__dirname, '../../dist/nuit-info24/browser')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/nuit-info24/browser', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});