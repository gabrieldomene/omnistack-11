const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");


routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create_ong);

routes.post("/sessions", SessionController.create);

routes.get("/profile", ProfileController.index);

routes.post("/incidents", IncidentController.create_incident);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete_case);


module.exports = routes;