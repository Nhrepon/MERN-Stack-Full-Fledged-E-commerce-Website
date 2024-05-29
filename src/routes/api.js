const express=require('express');
const router=express.Router();
const UserController=require('../controller/UserController');
const { ProductBrandList, ProductCategoryList, ProductSliderList, ProductListByBrand } = require('../controller/ProductController');





router.get('/ProductBrandList', ProductBrandList);
router.get('/ProductCategoryList', ProductCategoryList);
router.get('/ProductSliderList', ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID')
router.get('/ProductListBySimilar/:CategoryID')
router.get('/ProductListByKeyword/:Keyword')
router.get('/ProductListByRemark/:Remark')
router.get('/ProductDetails/:ProductID')
router.get('/ProductReviewList/:ProductID')


router.get('/UserOTP', UserController.UserOTP);
router.get('/VerifyLogin', UserController.VerifyLogin);
router.get('/UserLogout', UserController.UserLogout);
router.post('/CreateProfile', UserController.CreateProfile);
router.post('/UpdateProfile', UserController.UpdateProfile);
router.get('/ReadProfile', UserController.ReadProfile);


router.post('/SaveWishList')
router.post('/RemoveWishList')
router.get('/WishList')


router.post('/SaveCartList')
router.post('/RemoveCartList')
router.get('/CartList')



module.exports=router;