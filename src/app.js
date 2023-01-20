const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const userRoutes = require("./routes/users.router");
const videoRouter = require("./routes/videos.router");
const categoriesRouter = require('./routes/categories.router');
const coursesRouter = require('./routes/courses.routers');

const app = express();

db.authenticate()
  .then(() => console.log("autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("base de datos sincrnizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use(express.json());
app.use("/api/v1", userRoutes, videoRouter, categoriesRouter, coursesRouter);

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
