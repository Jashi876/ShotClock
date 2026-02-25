const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const scheduleRoutes = require("./routes/schedule.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/schedules", scheduleRoutes);

app.listen(process.env.PORT, () => {
  console.log(`ShotClock server running on port ${process.env.PORT}`);
});