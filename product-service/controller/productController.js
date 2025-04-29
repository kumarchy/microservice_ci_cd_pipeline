import productModel from "../model/productModel.js";

export const createProduct = async (req, resp)=>{
    try {
        const {name, description, price, quantity, rating} = req.body;

        if(!name || !description || !price || !quantity || !rating){
            return resp.status(400).json({message: "All fields are required"});
        }

        const product = new productModel({
            name, 
            description,
            price, 
            quantity,
            rating
        })

        const savedProduct = await product.save();

        return resp.status(201).json({
            message : "product created successfully",
            data: savedProduct
        })
    }catch(error){
        console.log(error);
    }
} 


export const getAllProducts = async (req, resp)=>{    
    try {
        const products = await productModel.find();

        return resp.status(200).json({
            message:"Products fetched successfully",
            data: products
        })
    }catch(error){
        console.log(error);
    }
}