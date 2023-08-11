const express = require("express");
const mongoose = require("mongoose");
const app = express();
const errorhandler = require("./utils/ErrorHandler");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const busRotes = require("./routes/busRoutes");
const ErrorMiddleware = require("./middleware/ErrorMiddleware");
const dotenv = require("dotenv");
const ticketroutes = require("./routes/TicketsRoutes");
dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(cookieparser());

const url = `mongodb+srv://sutharom42:<password>@cluster0.j5w9fdt.mongodb.net/`;
try {
  mongoose
    .connect(url.replace("<password>", process.env.MONGODB_PASSWORD))
    .then(() => {
      console.log("Database hasbeen Conected..!");
    });
} catch (error) {
  errorhandler(error);
}

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`app is started on port:${port}`);
});

app.use("/busroutes", busRotes);
app.use("/ticket", ticketroutes);

app.use(ErrorMiddleware);
