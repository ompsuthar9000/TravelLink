const express = require("express");
const Router = express.Router();
const Ticket = require("./../schemas/TicketSceema");

Router.route("/createTicket").post(async (req, res, next) => {
  const ticket = await Ticket.create(req.body);
  console.log(ticket);
  // console.log(req.body);
  res.end();
});

module.exports = Router;
