const express = require("express")
const router = express.Router()
const models = require("../models"),
  {
    Teacher
  } = models


router.get("/", (req, res) => {
  Teacher.findAll()
    .then(teachers => {
      res.render("teachers", {
        teachers
      });
    })
    .catch(err => {
      console.log(err);
    });
});



router.get("/add", (req, res) => {
  res.render("teacher_add");
});

router.post("/add", (req, res) => {
  let teacher = req.body
  Teacher.create(teacher)
    .then(() => {
      res.redirect("/teachers");
    })
    .catch(err => {
      console.log(err);
    });
});




router.get("/edit/:id", (req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => {
      res.render("teacher_edit", {
        teacher
      });
    })

    .catch(err => {
      console.log(err);
    });
});

router.post("/edit/:id", (req, res) => {
  let teacher = req.body
  Teacher.update(teacher, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect("/teachers");
  });
});



router.get("/delete/:id", (req, res) => {
  Teacher.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect("/teachers");
    })
    .catch(err => {
      console.log(err);
    });
});



module.exports = router;
