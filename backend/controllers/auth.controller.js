const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error registering user");
    }

    res.send({
      message: "User registered successfully"
    });

  });

};


// LOGIN
exports.login = (req, res) => {

  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }

    if (result.length === 0)
      return res.status(404).send("User not found");


    const user = result[0];

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword)
      return res.status(401).send("Invalid password");


    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );


    res.send({
      message: "Login successful",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  });

};