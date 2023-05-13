const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const Tools = require("./models/Tool");

const uri =
  "mongodb+srv://techbible:nRgcJ2M8O6DRoznj@techbible.eggj9te.mongodb.net/techbible";

// Connect to the database and fetch the tools data on startup

// Define your routes here
app.get("/mongo-tools", async (req, res) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log("Connected to MongoDB");
    const tools = await Tools.find();

    // console.log("TOOLS : ",tools);
    res.send(tools); // Send an object containing both variables
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching tools data");
  }
});

app.post("/like/:id/:uid", async (req, res) => {
  let { id, uid } = req.params;
  try {
    await Tools.findByIdAndUpdate(id, {
      $push: { LikedBy: uid },
    });
  } catch (error) {
    console.log(error);
  }
  console.log("tool has been liked successfully!!!!!");
});

// app.post("/like/:id/:uid", async (req, res) => {
//   let { id, uid } = req.params;
//   try {
//     await Tools.findByIdAndUpdate(id, {
//       $addToSet: { LikedBy: uid },
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("tool has been liked successfully!!!!!");
// });

//remove a user from a tool likedBy array
app.post("/unlike/:id/:uid", async (req, res) => {
  let { id, uid } = req.params;
  try {
    const tool = await Tools.findById(id);
    // Remove the uid from the LikedBy array using the filter method
    const updatedLikedBy = tool.LikedBy.filter(
      (likedByUid) => likedByUid !== uid
    );
    // Update the tool document with the updated LikedBy array
    const updatedTool = await Tools.findByIdAndUpdate(id, {
      LikedBy: updatedLikedBy,
    });
    return res.send(updatedTool);
  } catch (error) {
    console.log(error);
  }
  console.log("tool has been unliked succefuly!!!!!");
});

app.post("", async (req, res) => {
  try {
    const tools = await Tools.find({ Category: { $in: res.interests } })
      .limit(3)
      .toArray();

    console.log("Tools:", tools);
    // Do something with the tools array

    // Close the MongoDB connection when finished
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
