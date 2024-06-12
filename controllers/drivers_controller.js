const Driver = require("../models/driver");
const status = require('http-status')

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  index(req, res, next) {
    const { lng, lat } = req.query;
    const point = {
      type: "Point",
      coordinates: [parseFloat(lng), parseFloat(lat)],
    };

    Driver.aggregate([
      {
        $geoNear: {
          near: point,
          spherical: true,
          maxDistance: 200000,
          distanceField: "dist.calculated",
        },
      },
    ])
      .then((drivers) => {
        res.send(drivers);
      })
      .catch(next);
  },

  create(req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then((driver) => {
        res.send(driver);
      })
      .catch(next);
  },

  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then((driver) => res.send(driver))
      .catch(next);
  },

  delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndDelete({ _id: driverId })
      .then((driver) => res.status(status.NO_CONTENT).send(driver))
      .catch(next);
  },
};
