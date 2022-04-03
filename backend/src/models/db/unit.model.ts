import mongoose from "mongoose";

export interface IUnit {
    name: string;
    condition: string;
    location: string;
    size: string;
    material: string;
    story: string;
    shape: string;
    imageUrl: string,
    imageName: string
}

interface UnitDocument extends IUnit, mongoose.Document {}

const UnitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: false,
    default: ""
  },
  location: {
    type: String,
    required: false,
    default: ""
  },
  size: {
    type: String,
    required: false,
    default: ""
  },
  material: {
    type: String,
    required: false,
    default: ""
  },
  story: {
    type: String,
    required: false,
    default: ""
  },
  shape: {
    type: String,
    required: false,
    default: ""
  },
  imageUrl: {
    type: String,
    required: false,
    default: ""
  },
  imageName: {
    type: String,
    required: false,
  }
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

export default mongoose.model<UnitDocument>("Unit", UnitSchema);