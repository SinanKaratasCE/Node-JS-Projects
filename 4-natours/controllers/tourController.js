const Tour = require(`./../models/tourModel`);

exports.gettAllTours = async (req, res) => {
  const tours = await Tour.find();

  try {
    res.status(200).json({
      status: `success`,
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch {
    res.status(400).json({
      status: `fail`,
      message: `Error getting tours!!!}`,
    });
  }
};

exports.createNewTour = async (req, res) => {
  try {
    // const newTour = new Tour({})
    // newTour.save()

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: `success`,
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: `fail`,
      message: `Invalid data sent!`,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    //Tour.findOne({ _id: req.params.id})

    res.status(200).json({
      status: `success`,
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: `fail`,
      meesage: `Data not found!!!`,
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: `success`,
    data: {
      tour: `<Updated tour here...>`,
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: `success`,
    data: null,
  });
};
