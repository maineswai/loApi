const express = require("express");

router = express.Router();

const queries = require("../db/queriePelamar");

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error("Invalid ID"));
}

router.get("/", (req, res) => {
    queries.getAll().then(pelamar => {
        res.json(pelamar);
    });
});

router.get("/:id", isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(pelamar => {
        if(pelamar){
            res.json(pelamar);
        } else {
            next();
        }
    });
});

router.post("/", (req, res, next) => {
    if((req.body)){
        queries.create(req.body).then(pelamar => {
            res.json(pelamar[0]);
        });
    } else {
        next(new Error("Invalid pelamar"));
    }
});

router.put("/:id", isValidId, (req, res, next) => {
    if((req.body)){
        queries.update(req.params.id, req.body).then(pelamar => {
            res.json(pelamar[0]);
        });
    } else {
        next(new Error("Invalid pelamar"));
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