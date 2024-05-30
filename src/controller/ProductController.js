const { 
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
} = require("../services/ProductService");

exports.ProductBrandList=async(req, res)=>{
try {
    const result=await ProductBrandListService(req);
    res.json({status:"Success", data:result});
} catch (error) {
    res.json({status:"Failed", message:error});
}
}



exports.ProductCategoryList=async(req, res)=>{
    try {
        const result=await ProductCategoryListService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}



exports.ProductSliderList=async(req, res)=>{
    try {
        const result=await ProductSliderListService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}  
    
    
exports.ProductListByBrand=async(req, res)=>{
    try {
        const result=await ProductListByBrandService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
} 



exports.ProductListByCategory=async(req, res)=>{
    try {
        const result=await ProductListByCategoryService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
} 



exports.ProductListBySimilar=async(req, res)=>{
    try {
        const result=await ProductListBySimilarService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}



exports.ProductListByKeyword=async(req, res)=>{
    try {
        const result=await ProductListByKeywordService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}



exports.ProductListByRemark=async(req, res)=>{
    try {
        const result=await ProductListByRemarkService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}



exports.ProductDetails=async(req, res)=>{
    try {
        const result=await ProductDetailsService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}



exports.ProductReviewList=async(req, res)=>{
    try {
        const result=await ProductReviewListService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}
