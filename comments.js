// Create web server
var express = require("express");
var router = express.Router();
var comments = require("../models/comments.js");
var auth = require("../auth.js");

// Get all comments
router.get("/", function (req, res) {
  comments.find(function (err, comments) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(comments);
    }
  });
});

// Get a comment
router.get("/:id", function (req, res) {
  comments.findById(req.params.id, function (err, comment) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(comment);
    }
  });
});

// Create a comment
router.post("/", auth.isAuthenticated, function (req, res) {
  var newComment = new comments(req.body);
  newComment.save(function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(newComment);
    }
  });
});

// Update a comment
router.put("/:id", auth.isAuthenticated, function (req, res) {
  comments.findByIdAndUpdate(req.params.id, req.body, function (err, comment) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(comment);
    }
  });
});

// Delete a comment
router.delete("/:id", auth.isAuthenticated, function (req, res) {
  comments.findByIdAndRemove(req.params.id, function (err, comment) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(comment);
    }
  });
});

module.exports = router;
