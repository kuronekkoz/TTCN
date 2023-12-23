import express from 'express';
import authRoute from './auth';
import employeeRoute from './employee';
import serviceRoute from './service';
import appointmentRoute from './appointment';
let router = express.Router();

let initRoutes = (app) => {
	app.get('/', function (req, res) {
		res.send('<h1>Hello World!</h1>');
	});

	app.use('/v1/auth', authRoute);
	app.use('/v1/employee', employeeRoute);
	app.use('/v1/service', serviceRoute);
	app.use('/v1/appointment', appointmentRoute);
	return app.use('/', router);
};

module.exports = initRoutes;
