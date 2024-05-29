const { 
    ProductBrandListService, 
    ProductCategoryListService, 
    ProductSliderListService, 
    ProductListByBrandService 
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