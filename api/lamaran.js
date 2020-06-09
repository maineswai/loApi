const express = require("express");

router = express.Router();

const queries = require("../db/querieLamaran");

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error("Invalid ID"));
}

router.get("/", (req, res) => {
    queries.getAll().then(lamaran => {
        res.json(lamaran);
    });
});

router.get("/:id", isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(lamaran => {
        if(lamaran){
            res.json(lamaran);
        } else {
            next();
        }
    });
});

router.post("/", (req, res, next) => {
    if((req.body)){
        queries.create(req.body).then(lamaran => {
            res.json(lamaran[0]);
        });
    } else {
        next(new Error("Invalid lamaran"));
    }
});

router.put("/:id", isValidId, (req, res, next) => {
    if((req.body)){
        queries.update(req.params.id, req.body).then(lamaran => {
            res.json(lamaran[0]);
        });
    } else {
        next(new Error("Invalid lamaran"));
    }
});

router.delete("/:id", isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
          deleted: true
        });
    })
  });

module.exports = router;