import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type : String, required:true},
    description:{type : String, required:true},
    price:{type : Number, required:true},
    quantity: { type: Number, default: 0 },         
    rating: { type: Number, default: 0 }, 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const productModel = mongoose.models.products || mongoose.model("products",productSchema);
export default productModel;