const express=require('express');
const router=express.Router();
const AuthMiddleware=require('../middleware/AuthMiddleware');
const UserController=require('../controller/UserController');
const { ProductBrandList, 
    ProductCategoryList, 
    ProductSliderList, 
    ProductListByBrand, 
    ProductListByCategory, 
    ProductListBySimilar,
    ProductListByKeyword,
    ProductListByRemark,
    ProductDetails,
    ProductReviewList} = require('../controller/ProductController');
const { SaveWishList, RemoveWishList, WishList } = require('../controller/WishController');
const { SaveCartList, RemoveCartList, CartList } = require('../controller/CartController');





router.get('/ProductBrandList', ProductBrandList);
router.get('/ProductCategoryList', ProductCategoryList);
router.get('/ProductSliderList', ProductSliderList);
router.get('/ProductListByBrand/:BrandID', ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID', ProductListByCategory);
router.get('/ProductListBySimilar/:CategoryID', ProductListBySimilar);
router.get('/ProductListByKeyword/:Keyword', ProductListByKeyword);
router.get('/ProductListByRemark/:Remark', ProductListByRemark);
router.get('/ProductDetails/:ProductID', ProductDetails);
router.get('/ProductReviewList/:ProductID', ProductReviewList)


router.get('/UserOTP', UserController.UserOTP);
router.get('/VerifyLogin', UserController.VerifyLogin);
router.get('/UserLogout', UserController.UserLogout);
router.post('/CreateProfile', UserController.CreateProfile);
router.post('/UpdateProfile', UserController.UpdateProfile);
router.get('/ReadProfile', UserController.ReadProfile);


router.post('/SaveWishList', AuthMiddleware, SaveWishList);
router.post('/RemoveWishList', AuthMiddleware, RemoveWishList);
router.get('/WishList', AuthMiddleware, WishList);


router.post('/SaveCartList', AuthMiddleware, SaveCartList);
router.post('/RemoveCartList', AuthMiddleware, RemoveCartList);
router.get('/CartList', AuthMiddleware, CartList);



module.exports=router;