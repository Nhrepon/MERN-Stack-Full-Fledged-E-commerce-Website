const mongoose = require("mongoose");
const BrandModel = require("../model/BrandModel");
const CategoryModel = require("../model/CategoryModel");
const ProductSliderModel = require("../model/ProductSliderModel");
const ProductModel = require("../model/ProductModel");
const ReviewModel = require("../model/ReviewModel");
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
        const projection={$project:{
            'brandId':0,
            'categoryId':0,
            'brands._id':0,
            'categories._id':0,
            'brands.createdAt':0,
            'categories.createdAt':0,
            'brands.updatedAt':0,
            'categories.updatedAt':0
        }}
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                unwindBrands,
                unwindCategories,
                projection
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}





const ProductListByCategoryService=async(req)=>{
    try {
        const categoryId=new objectId(req.params.CategoryID);
        const matchStage={$match:{categoryId:categoryId}};
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
        const projection={$project:{
            'brandId':0,
            'categoryId':0,
            'brands._id':0,
            'categories._id':0,
            'brands.createdAt':0,
            'categories.createdAt':0,
            'brands.updatedAt':0,
            'categories.updatedAt':0
        }}
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                unwindBrands,
                unwindCategories,
                projection
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}



const ProductListBySimilarService=async(req)=>{
    try {
        const categoryId=new objectId(req.params.CategoryID);
        const matchStage={$match:{categoryId:categoryId}};
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
        const projection={$project:{
            'brandId':0,
            'categoryId':0,
            'brands._id':0,
            'categories._id':0,
            'brands.createdAt':0,
            'categories.createdAt':0,
            'brands.updatedAt':0,
            'categories.updatedAt':0
        }}
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                unwindBrands,
                unwindCategories,
                projection
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}



const ProductListByKeywordService=async(req)=>{
    try {
        const searchRegex={"$regex":req.params.Keyword, "$options":"i"};
        const searchParams=[{title:searchRegex},{description:searchRegex}];
        const searchQuery={$or:searchParams};
        const matchStage={$match:searchQuery};
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
        const projection={$project:{
            'brandId':0,
            'categoryId':0,
            'brands._id':0,
            'categories._id':0,
            'brands.createdAt':0,
            'categories.createdAt':0,
            'brands.updatedAt':0,
            'categories.updatedAt':0
        }};
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                unwindBrands,
                unwindCategories,
                projection
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}




const ProductListByRemarkService=async(req)=>{
    try {
        const remark=req.params.Remark;
        const matchStage={$match:{remark:remark}};
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
        const projection={$project:{
            'brandId':0,
            'categoryId':0,
            'brands._id':0,
            'categories._id':0,
            'brands.createdAt':0,   
            'categories.createdAt':0,
            'brands.updatedAt':0,
            'categories.updatedAt':0
        }};
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                unwindBrands,
                unwindCategories,
                projection
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}



const ProductDetailsService=async(req)=>{
    try {
        const productId=new objectId(req.params.ProductID);
        const matchStage={$match:{_id:productId}};
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
        const joinWithDetails={$lookup:{
            from:"productdetails",
            localField:"_id",
            foreignField:"productId",
            as:"details"    
        }};
        const unwindBrands={$unwind:"$brands"};
        const unwindCategories={$unwind:"$categories"};
        const unwindDetails={$unwind:"$details"};
        const projection={$project:{
            'brandId':0,
            'categoryId':0,
            'brands._id':0,
            'categories._id':0,
            'brands.createdAt':0,
            'categories.createdAt':0,
            'brands.updatedAt':0,
            'categories.updatedAt':0
        }};
        const data=await ProductModel.aggregate(
            [
                matchStage,
                joinWithBrands,
                joinWithCategory,
                joinWithDetails,
                unwindBrands,   
                unwindCategories,
                unwindDetails,
                projection
            ]
        );
        return data;
    } catch (error) {
        return error;
    }
}



const ProductReviewListService=async(req)=>{
    try {
        const productId=new objectId(req.params.ProductID);
        const matchStage={$match:{productId:productId}};
        const joinWithUsers={$lookup:{
            from:"users",
            localField:"userId",
            foreignField:"_id",
            as:"users"
        }};
        const unwindUsers={$unwind:"$users"};
        const projection={$project:{
            'users._id':0,
            'users.otp':0,
            'users.createdAt':0,
            'users.updatedAt':0
        }};
        const data=await ReviewModel.aggregate(
            [
                matchStage,
                joinWithUsers,
                unwindUsers,
                projection
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
    ProductListByBrandService,
    ProductListByCategoryService,
    ProductListBySimilarService,
    ProductListByKeywordService,
    ProductListByRemarkService,
    ProductDetailsService,
    ProductReviewListService
}