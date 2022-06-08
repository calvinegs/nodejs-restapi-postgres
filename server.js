const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
// const cors = require("cors");
const app = express();
/* var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
*/

/* const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('testdb', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
*/

// app.get("/api/test", (req, res) => {
//     console.log("test is successful");
//     res.send("test is successful");
// });

/* const db = require("./app/models");
const Role = db.role;
// force 參數值為 true 將會重建已存在的資料表
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Database with { force: true }');
    initial();
}).catch((err) => {
    console.log(err);
});
 */

const userRoute = require("./app/routes/user.routes");
const authRoute = require("./app/routes/auth.routes");
app.use(express.json());
app.use("/api/users", userRoute);

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;  // port 預設為 5000 ，並可以在 .env 檔案中進行客製化 （如：PORT＝5001）
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
})

// 為 roles table 新增三筆初始資料
/* function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
} */