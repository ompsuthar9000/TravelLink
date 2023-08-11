const mongoose = require("mongoose");

const passengerinfo = mongoose.Schema({
  Age: Number,
  Gender: String,
  Name: String,
  seat: String,
});

const passengermodel = mongoose.model("passengerinfo", passengerinfo);

const ContectInfo = mongoose.Schema({
  Email: String,
  Mobile: Number,
});
const ContectModel = mongoose.model("Contect", ContectInfo);

const ticketSceema = mongoose.Schema({
  ContectInfo: ContectModel.schema,
  Seats: [String],
  isPaymentDone: Boolean,
  passengerinfo: [passengermodel.schema],
});

const TicketModel = mongoose.model("Ticket", ticketSceema);
module.exports = TicketModel;
