// require("dotenv").config();
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const htmlForm = `
// <form method="POST" action="/users">
// <div>
// <label>Enter name:</label>
// <input type="text" name="name" id="name"/>
// </div>
// <div>
// <label>Enter age:</label>
// <input type="number" name="age" id="age"/>
// </div>
// <button type="submit">Save Users</button>
// </form>
// `;

// app.use(express.urlencoded({ extended: true }));

// const users = [
//   {
//     name: "jewel hassan",
//     age: 36,
//   },
//   {
//     name: "zidan hassan",
//     age: 10,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("welcome to server");
// });

// app.get("/users", (req, res) => {
//   res.send(htmlForm);
// });

// app.post("/users", (req, res) => {
//   const name = req.body.name;
//   const age = Number(req.body.age);
//   const user = {
//     name,
//     age
//   }
//   users.push(user)
//   res.status(202).json({
//     success:true,
//   })
// });

// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "resoureces is not found",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`server is running http://localhost:${PORT}`);
// });

// MVC ARTICITURE

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

const userRouter = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(userRouter);
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.status(404).json({
    message: "resoureces is not found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
