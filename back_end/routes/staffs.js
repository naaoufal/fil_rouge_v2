const express = require("express")
const router = express.Router()
const staffCon = require("../controllers/staffs")
const access = require('../midllewares/authAdmin')

router.get("/all", access, staffCon.all)

router.post("/add", access, staffCon.createOne)

router.patch("/edit/:id", staffCon.edit)

router.delete("/delete/:id", staffCon.deleteStaff)

module.exports = router