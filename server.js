const express = require("express");
const cors = require("cors");
const passport = require("passport");
const users = require("./controllers/user/userRegister");
const dbConnect = require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Connect to MongoDB
dbConnect();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./middleware/passport")(passport);

// Use Routes
app.use("/", require("./routes/indexRoute"));

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
