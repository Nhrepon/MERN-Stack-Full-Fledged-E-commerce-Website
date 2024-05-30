const { SaveWishListService, RemoveWishListService, WishListService } = require("../services/WishListService");

exports.SaveWishList = async (req, res) => {
    try {
        const result= await SaveWishListService(req);
        res.json({ status: "Success", data: result });
    } catch (error) {
        res.json({ status: "Failed", message: error });
    }
}




exports.RemoveWishList = async (req, res) => {
    try {
        const result= await RemoveWishListService(req);
        res.json({ status: "Success", data: result });
    } catch (error) {
        res.json({ status: "Failed", message: error });
    }
}



exports.WishList = async (req, res)=>{
    try {
        const result=await WishListService(req);
        res.json({ status: "Success", data: result });
    } catch (error) {
        res.json({ status: "Failed", message: error }); 
    }
}