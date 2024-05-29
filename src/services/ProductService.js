const mongoose = require("mongoose");
const BrandModel = require("../model/BrandModel");
const CategoryModel = require("../model/CategoryModel");
const ProductSliderModel = require("../model/ProductSliderModel");
const ProductModel = require("../model/ProductModel");
const objectId=mongoose.Types.ObjectId;


const ProductBrandListService=async(req)=>{
    try {
        const data= await BrandModel.find();
        return data;
    } catch (error) {
        return error;
    }
}


const ProductCategoryListService=async(req)=>{
    try {
        const data= await CategoryModel.find();
        return data;
    } catch (error) {
        return error;
    }
}




const ProductSliderListService=async(req)=>{
    try {
        const data= await ProductSliderModel.find();
        return data;
    } catch (error) {
        return error;
    }
}



const ProductListByBrandService=async(req)=>{
    try {
        const brandId=new objectId(req.params.BrandID);
        const matchStage={$match:{brandId:brandId}};
        const joinWithBrands={$lookup:{
            from:"brands",
            localField:"brandId",
            foreignField:"_id",
            as:"brands"
        }};
        const joinWithCategory={$lookup:{
            from:"categories",
            localField:"categoryId",
            foreignField:"_id",
            as:"categories"
        }};
        const unwindBrands={$unwind:"$brands"};
        const unwindCategories={$unwind:"$categories"};
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                unwindBrands,
                unwindCategories
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}










module.exports={
    ProductBrandListService,
    ProductCategoryListService,
    ProductSliderListService,
    ProductListByBrandService
}