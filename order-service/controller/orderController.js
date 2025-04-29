import prisma from "../db/db.config.js";

export const createOrder = async (req, res) => {
    try{
        const {userId, productId, totalAmount, status, paymentStatus} = req.body;

        if(!userId || !productId || !totalAmount || !status || !paymentStatus){
            return res.status(400).json({message: "All fields are required"});
        }

        const order = await prisma.order.create({
            data:{
                userId,
                productId,
                totalAmount,
                status,
                paymentStatus
            }
        })

        return res.status(201).json({
            status: 201,
            success: true,
            data: order,
            message: "Order created successfully"
        })
    }catch(err){
        console.error("Error creating order:", err);
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error"
        })
    }
}

export const getOrderById = async (req, res) => {
    try{
        const {userId} = req.params;
        
        const orders = await prisma.order.findMany({
            where:{
                userId: Number(userId)
            }
        })

        return res.status(200).json({
            status: 200,
            success: true,
            data: orders,
            message: "Orders retrieved successfully"
        })
    }catch(err){
        console.error("Error retrieving orders:", err);
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error"
        })
    }
}

export const getTotalOrder = async (req, res) => {
   
   try{
    const totalOrders = await prisma.order.findMany();

    return res.status(200).json({
        status: 200,
        success: true,
        data: totalOrders,
        message: "Total Orders retrieved successfully"
    })
   }catch(err){
    console.error("Error retrieving orders:", err);
    return res.status(500).json({
        status: 500,
        success: false,
        message: "Internal server error"
    })
   }
}