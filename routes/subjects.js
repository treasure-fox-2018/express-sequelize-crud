const express = require("express")
const router = express.Router()
const models = require("../models"),
  {
    Subject
  } = models


router.get("/", (req, res) => {
  Subject.findAll({
      order: [["id", "asc"]]
    })
    .then(subjects => {
      res.render("subjects", {
        subjects
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/add", (req, res) => {
  res.render("subject_add");
});

router.post("/add", (req, res) => {
  Subject.create({
      subject_name: req.body.subject_name
    })
    .then(() => {
      res.redirect("/subjects");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/edit/:id", (req, res) => {
  Subject.findById(req.params.id)
    .then(subjects => {
      res.render("subject_edit", {
        subjects
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/edit/:id", (req, res) => {
  Subject.update({
      subject_name: req.body.subject_name
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect("/subjects");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/delete/:id", (req, res) => {
  Subject.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect("/subjects");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
