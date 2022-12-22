const express = require("express");
const router = express.Router();
require("dotenv").config();
require("./config");
var cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*", //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const { registerUser, loginUser } = require("./userController");

const register = router.post("/register", registerUser);
const login = router.post("/login", loginUser);

app.use(register);
app.use(login);

app.get("/test", (req, res) => {
  res.send("Workinf!");
});

app.listen(process.env.PORT, () => console.log("server running on port 8000"));
