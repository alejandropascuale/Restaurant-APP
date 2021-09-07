const express = require('express');
const router = express.Router();

const controller = {
    index: (req, res) => {
        res.render('index');
    }
}

module.exports = controller;