const express = require(`express`);
const tourController = require(`./../controllers/tourController`);

const router = express.Router();

router.param(`id`, tourController.checkID);

router
  .route(`/`)
  .get(tourController.gettAllTours)
  .post(tourController.createNewTour);
router
  .route(`/:id`)
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;

/* const {
  gettAllTours,
  createNewTour,
  getTour,
  updateTour,
  deleteTour,
} = require(`./../controllers/tourController`); */

//app.get(``, gettAllTours);
//app.post(`/api/v1/tours`, createNewTour);
//app.get(`/api/v1/tours/:id`, getTour);
//app.patch(`/api/v1/tours/:id`, updateTour);
//app.delete(`/api/v1/tours/:id`, deleteTour);
