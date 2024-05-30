const { SaveCartListService, RemoveCartListService, CartListService } = require("../services/CartService");

exports.SaveCartList=async(req, res)=>{ 
    try {   
        const result=await SaveCartListService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}



exports.RemoveCartList=async(req, res)=>{ 
    try {   
        const result=await RemoveCartListService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}





exports.CartList=async(req, res)=>{ 
    try {   
        const result=await CartListService(req);
        res.json({status:"Success", data:result});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}