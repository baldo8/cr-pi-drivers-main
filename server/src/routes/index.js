const { Router } = require("express");
const  {getDrivers}  = require("../controllers/getDrivers");
const {getDriverById}  = require("../controllers/getDriverById");
const {getDriverByName}  = require("../controllers/getDriverByName");
const {postDriver} = require("../controllers/postDriver");
const { getTeams } = require("../controllers/getTeams");
const { deleteDriver } = require("../controllers/deleteDriver");
const router = Router();

router.get("/drivers", getDrivers)
router.get("/drivers/name", getDriverByName)
router.get("/drivers/:id", getDriverById)
router.post("/drivers", postDriver)

router.get("/teams", getTeams)

router.delete("/drivers/:idDriver", deleteDriver)

module.exports = router;
