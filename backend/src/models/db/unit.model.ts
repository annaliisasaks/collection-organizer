import mongoose from "mongoose";

export interface IImage {
  imageUrl: string, 
  imageName: string, 
  isCoverImage: boolean
}

export interface IUnit {
    name: string;
    condition: string;
    location: string;
    size: string;
    material: string;
    story: string;
    shape: string;
    images: IImage[],
    coverImageIndex: number;
}

interface UnitDocument extends IUnit, mongoose.Document {}

const UnitImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  isCoverImage: {
    type: Boolean,
    required: false,
    default: false
  },
})

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
  images: [UnitImageSchema]
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

export default mongoose.model<UnitDocument>("Unit", UnitSchema);