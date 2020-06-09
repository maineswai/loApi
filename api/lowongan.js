const express = require("express");

router = express.Router();

const queries = require("../db/querieLowongan");

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error("Invalid ID"));
}

router.get("/", (req, res) => {
    queries.getAll().then(lowongan => {
        res.json(lowongan);
    });
});

router.get("/:id", isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(lowongan => {
        if(lowongan){
            res.json(lowongan);
        } else {
            next();
        }
    });
});

router.post("/", (req, res, next) => {
    if((req.body)){
        queries.create(req.body).then(lowongan => {
            res.json(lowongan[0]);
        });
    } else {
        next(new Error("Invalid lowongan"));
    }
});

router.put("/:id", isValidId, (req, res, next) => {
    if((req.body)){
        queries.update(req.params.id, req.body).then(lowongan => {
            res.json(lowongan[0]);
        });
    } else {
        next(new Error("Invalid lowongan"));
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