const express = require("express");

router = express.Router();

const queries = require("../db/queriePerusahaan");

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error("Invalid ID"));
}

router.get("/", (req, res) => {
    queries.getAll().then(perusahaan => {
        res.json(perusahaan);
    });
});

router.get("/:id", isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(perusahaan => {
        if(perusahaan){
            res.json(perusahaan);
        } else {
            next();
        }
    });
});

router.post("/", (req, res, next) => {
    if((req.body)){
        queries.create(req.body).then(perusahaan => {
            res.json(perusahaan[0]);
        });
    } else {
        next(new Error("Invalid perusahaan"));
    }
});

router.put("/:id", isValidId, (req, res, next) => {
    if((req.body)){
        queries.update(req.params.id, req.body).then(perusahaan => {
            res.json(perusahaan[0]);
        });
    } else {
        next(new Error("Invalid perusahaan"));
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