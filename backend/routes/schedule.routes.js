const express = require("express");

const router = express.Router();

const controller = require("../controllers/schedule.controller");


router.post("/", controller.createSchedule);

router.get("/:projectId", controller.getSchedules);


module.exports = router;