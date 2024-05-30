const mongoose=require('mongoose');
const CartModel = require('../model/CartModel');
const objectId = mongoose.Types.ObjectId;

const SaveCartListService = async (req) => {
    try {
        const userId=new objectId(req.headers.userId);
        const reqBody=req.body;
        reqBody.userId=userId;
        const data= await CartModel.create(reqBody);
        return data;
    } catch (error) {
        return error;
    }
}


const RemoveCartListService = async (req) => {
    try {
        const userId=req.headers.userId;
        const reqBody=req.body;
        reqBody.userId=userId;
        const data= await CartModel.deleteOne(reqBody);
        return data;
    } catch (error) {
        return error;
    }
}





const CartListService = async (req) => {
    try {
        const userId = new objectId(req.headers.userId);
        const matchStage = { $match: { userId: userId } };
        const joinWithProducts = {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "product",
            },
        };
        const joinWithBrands = {
            $lookup: {
                from: "brands",
                localField: "product.brandId",
                foreignField: "_id",
                as: "brand",
            },
        };  
        const joinWithCategories = {
            $lookup: {
                from: "categories",
                localField: "product.categoryId",
                foreignField: "_id",
                as: "category",
            },
        };
        const unwindProduct = { $unwind: "$product" };
        const unwindBrand = { $unwind: "$brand" };
        const unwindCategories = { $unwind: "$category" };
        const projection = {
            $project: {
                "product.brandId": 0,
                "product.categoryId": 0,
                "product.createdAt": 0,
                "product.updatedAt": 0,
                "brand._id": 0,
                "brand.createdAt": 0,
                "brand.updatedAt": 0,
                "category._id": 0,
                "category.createdAt": 0,
                "category.updatedAt": 0,
            },  
        };  
        const data = await CartModel.aggregate([
            matchStage,
            joinWithProducts,
            joinWithBrands,
            joinWithCategories,
            unwindProduct,
            unwindBrand,
            unwindCategories,
            projection,
        ]);
        return data;
    } catch (error) {
        return error;
    }
}




module.exports={
    SaveCartListService,
    RemoveCartListService,
    CartListService
    
}