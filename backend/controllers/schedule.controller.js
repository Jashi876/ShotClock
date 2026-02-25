const db = require("../config/db");


// CREATE SCHEDULE
exports.createSchedule = (req, res) => {

  const {
    project_id,
    title,
    shoot_date,
    location
  } = req.body;


  const sql =
    "INSERT INTO schedules (project_id, title, shoot_date, location) VALUES (?, ?, ?, ?)";


  db.query(sql, [project_id, title, shoot_date, location], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error creating schedule");
    }

    res.send({
      message: "Schedule created successfully"
    });

  });

};



// GET SCHEDULES
exports.getSchedules = (req, res) => {

  const projectId = req.params.projectId;

  const sql =
    "SELECT * FROM schedules WHERE project_id = ?";


  db.query(sql, [projectId], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching schedules");
    }

    res.send(result);

  });

};