const mongoose = require("mongoose");

const busroutes = mongoose.Schema({
  route_id: String,
  source: String,
  destination: String,
  duration: String,
  ac: Boolean,
  sleeper: Boolean,
  wifi: Boolean,
  meal: Boolean,
  ticket_price: Number,
  distance: String,
  arrival_time: String,
  departure_time: String,
  user_rating: Number,
});

const busRoutes = mongoose.model("BusRoutes", busroutes);

module.exports = busRoutes;
