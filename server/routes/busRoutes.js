const express = require("express");
const Router = express.Router();
const BusRoutes = require("./../schemas/busRoutesScheema");

Router.route("/souce").post(async (req, res, next) => {
  const busroutes = await BusRoutes.find(
    {
      source: { $regex: req.body.source, $options: "i" },
    },
    { source: 1, _id: 0 }
  );
  res.json(...new Set(busroutes));
});

Router.route("/destination").post(async (req, res, next) => {
  const busroutes = await BusRoutes.find(
    {
      destination: { $regex: req.body.destination, $options: "i" },
    },
    { destination: 1, _id: 0 }
  );
  res.json(...new Set(busroutes));
});

Router.route("/Search/:source?/:destination?").get(async (req, res, next) => {
  let query = req.params;
  if (!req.params.source) {
    query = { destination: req.params.destination };
  } else if (!req.params.destination) {
    query = { source: req.params.source };
  } else if (req.params.source && req.params.destination) {
    query = req.params;
  }
  try {
    const busroutes = await BusRoutes.find(query);
    res.status(200).json({
      busroutes,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
