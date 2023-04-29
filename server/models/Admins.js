const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  username: {
    type: String,
    requried: true,
    unique: true,
  },
  password: {
    type: String,
    requried: true,
  },
});

const AdminModel = model("Admins", AdminSchema);
module.exports = AdminModel;
