import express from "express";
import * as dotenv from "dotenv"; //
import cors from "cors";
dotenv.config(); //
const app = express();
app.use(express.json());
app.use(cors());

import fs from "fs";
import csv from "csv-parser";

///mongo connection

import { MongoClient, ServerApiVersion } from "mongodb";
import { log } from "console";
import { kspDB } from "./db.js";
const uri =
  "mongodb+srv://adityaework:t9oA9XrMtGHrZcQI@cluster0.me5pggj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const coll = kspDB.collection("data");

app.get("/", (req, res) => {
  console.log("get req");
  res.status(200);
  res.json({ message: "operational" });
});

// login route

app.post("/login", (req, res) => {
  console.log("on login route");
  var data = JSON.parse(req.body);
  var username = data.username;
  var password = data.password;
  var locationPinCode = data.locationPinCode;

  try {
  } catch {}
});

app.get("/dataDashboard", (req, res) => {});

app.get("/count", async (req, res) => {
  try {
    const maleCount = await coll.countDocuments({ sex: "MALE" });
    const femaleCount = await coll.countDocuments({ sex: "FEMALE" });
    res.json({ maleCount, femaleCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.get("/ageRangeCount", async (req, res) => {
  try {
    const range1Count = await coll.countDocuments({ age: { $gte: 18, $lt: 30 } });
    const range2Count = await coll.countDocuments({ age: { $gte: 30, $lt: 45 } });
    const range3Count = await coll.countDocuments({ age: { $gte: 45, $lt: 60 } });
    res.json({ range1Count, range2Count, range3Count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});
export default app;

app.get("/accidentSpotCount", async (req, res) => {
  try {
    const spotTypes = [
      "Curves",
      "Other",
      "Narrow road",
      "Cross roads",
      "Y Junction",
      "T Junction",
      "Circle",
      "Junction",
      "Culvert",
      "Offset",
      "Bridge",
      "Road hump or Rumble strips",
      "Bottleneck",
      "Round about or Circle",
      "More than four arms",
      "Railway crossing",
      "Rail Crossing manned",
      "Staggered junction",
      "Rail Crossing Unmanned",
      "Straight and flat"
    ];

    let spotCounts = {};

    for (let spot of spotTypes) {
      const count = await coll.countDocuments({ accidentSpot: spot });
      spotCounts[spot] = count;
    }

    res.json(spotCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.get("/roadTypeCount", async (req, res) => {
  try {
    const roadTypes = [
      "State Highway",
      "NH",
      "Arterial",
      "Major District Road",
      "Minor District Road",
      "Two way",
      "Service Road",
      "Residential Street",
      "City or Town Road",
      "Village Road",
      "One way",
      "Sub Arterial",
      "Feeder Road",
      "Mixed",
      "Expressway",
      "Forest Road"
    ];
    let roadCounts = {};
    for (let road of roadTypes) {
      const count = await coll.countDocuments({ roadType: road });
      roadCounts[road] = count;
    }
    res.json(roadCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});
