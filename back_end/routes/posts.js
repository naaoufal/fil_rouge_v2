const express = require("express")
const router = express.Router()
const postCon = require("../controllers/posts")

router.get("/all", postCon.all)

router.post("/addOne", postCon.createOne)

router.patch("/edit/:id", postCon.edit)

router.delete("/delete/:id", postCon.deletePost)

module.exports = router