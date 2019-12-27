import mongoose, { Document, Schema, SchemaType } from 'mongoose';

export interface ITips extends Document {
    title?:string;
    content?:string,
    createdAt:Date,
    updatedAt:Date,
}

export const TipsSchema = new Schema({
    title: { type: String },
    content: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

export default mongoose.model<ITips>('tips', TipsSchema);
