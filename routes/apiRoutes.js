const express = require("express");
const path = require("path");
const fs = require("fs");
let localDB = require("../db/db.json")
var uuid = require('uuidv4')


module.exports = (app) => {

    app.get("/api/notes", (req, res) => {

        res.json(localDB);
    });

    app.post("/api/notes", (req, res) => {

        req.body.id = uuid;
        localDB.push(req.body);
        res.json(localDB);

        fs.writeFile("./db/db.json", JSON.stringify(localDB), (error) => {
            if (error) throw error;
            res.end(localDB);
        });    

        console.log("Note saved!");
    });

    app.delete("/api/notes/:id", (req, res) => {

        const note = JSON.parse(fs.readFileSync("./db/db.json"));
        let id = req.params.id;
        let destroyNote = note
        .filter(notes => notes.id != id);

        fs.writeFile("./db/db.json", JSON.stringify(destroyNote), (error) => {
            if (error) throw error;
        });    
        
        localDB = destroyNote;
        res.json(destroyNote);
        console.log("Note deleted!");

    });
}