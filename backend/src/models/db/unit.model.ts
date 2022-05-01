import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export interface IImage {
  imageUrl: string, 
  imageName: string, 
  isCoverImage: boolean
}

export interface IUnit extends mongoose.Document {
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

UnitSchema.plugin(mongoosePaginate);

export default mongoose.model<IUnit, mongoose.PaginateModel<IUnit>>("Unit", UnitSchema);