import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});

export default model("Course", courseSchema);