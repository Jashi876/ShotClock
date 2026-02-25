const db = require("../config/db");


// CREATE PROJECT
exports.createProject = (req, res) => {

  const { name, description } = req.body;

  const sql =
    "INSERT INTO projects (name, description, user_id) VALUES (?, ?, ?)";


  db.query(sql, [name, description, req.userId], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error creating project");
    }

    res.send({
      message: "Project created successfully"
    });

  });

};



// GET PROJECTS
exports.getProjects = (req, res) => {

  const sql =
    "SELECT * FROM projects WHERE user_id = ?";


  db.query(sql, [req.userId], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching projects");
    }

    res.send(result);

  });

};