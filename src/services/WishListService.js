const WishModel = require("../model/WishModel");
const mongoose=require('mongoose');
const objectId = mongoose.Types.ObjectId;

const SaveWishListService=async(req)=>{
    try {   
        const userId = new objectId(req.headers.userId);
        const reqBody=req.body;
        reqBody.userId=userId;
        const data = await WishModel.updateOne(reqBody,{$set:reqBody},
            {upsert:true}
        );
        return data;

    } catch (error) {
        return error;
    }
}


const RemoveWishListService=async(req)=>{
    try {   
        const userId = new objectId(req.headers.userId);
        const reqBody=req.body;
        reqBody.userId=userId;
        const data = await WishModel.deleteOne(reqBody);
        return data;    

    } catch (error) {
        return error;
    }
}



const WishListService = async (req)=>{
    try {
        const userId=new objectId(req.headers.userId);
        const matchStage={$match:{userId:userId}};
        const joinWithProducts={$lookup:
            {
                from:"products",
                localField:"productId",
                foreignField:"_id",
                as:"product"
            }
        };
        const joinWithBrands={$lookup:
            {
                from:"brands",
                localField:"product.brandId",
                foreignField:"_id",
                as:"brand"
            }
        };
        const joinWithCategories={$lookup:
            {
                from:"categories",
                localField:"product.categoryId",
                foreignField:"_id",
                as:"category"
            }
        };
        const unwindProduct={$unwind:"$product"};
        const unwindBrand={$unwind:"$brand"};
        const unwindCategory={$unwind:"$category"};

       
        const data=await WishModel.aggregate(
            [
                matchStage,
                joinWithProducts,
                joinWithBrands,
                joinWithCategories,
                unwindProduct,
                unwindBrand,
                unwindCategory  
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}



module.exports={
    SaveWishListService,
    RemoveWishListService,
    WishListService
};