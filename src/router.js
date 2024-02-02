const express = require("express");
const path = require('path');

const ROOT_DIR = path.resolve();

const serveHome = (_, res) => {
  const filePath = `${ROOT_DIR}/public/tiger.html`;
  res.sendFile(filePath);
};

const serveEducation = (req, res) => {
  const filePath = `${ROOT_DIR}/public/education.html`;
  res.sendFile(filePath);
}

const serveAbout = (req, res) => {
  const filePath = `${ROOT_DIR}/public/about.html`;
  res.sendFile(filePath);
}

const serveAnimals = (req, res) => {
  const filePath = `${ROOT_DIR}/public/animals.html`;
  res.sendFile(filePath);
}

const serveContact = (req, res) => {
  const filePath = `${ROOT_DIR}/public/contact.html`;
  res.sendFile(filePath);
}

const serveMuseum = (req, res) => {
  const filePath = `${ROOT_DIR}/public/museum.html`;
  res.sendFile(filePath);
}

const createApp = () => {
    // Create a new Express application.
    const app = express();
    
    app.get("/", serveHome);
    app.get("/education", serveEducation);
    app.get("/about", serveAbout);
    app.get("/animals", serveAnimals);
    app.get("/contact", serveContact);
    app.get("/museum", serveMuseum);
    app.use(express.static("public"));
    return app;
}

module.exports = {createApp};