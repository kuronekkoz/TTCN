import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import multer from 'multer';
import connectDB from './config/connectDB';
import initRoutes from './routes/index';
import db from './models';
import cors from 'cors';
dotenv.config();

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: 'GET,POST,PUT,DELETE',
		allowedHeaders: 'X-Requested-With,content-type,token',
		credentials: true,
	}),
);
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

connectDB(db.sequelize);

initRoutes(app);

app.listen(process.env.PORT || 8000, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});
