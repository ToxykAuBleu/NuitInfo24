import express from 'express';
import loginRoutes from './routes/loginRoutes';
import dashboardRoutes from './routes/dashboardRoutes'; // Import dashboardRoutes

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Add this line
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public')); // Serve static files

app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes); // Use dashboardRoutes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});