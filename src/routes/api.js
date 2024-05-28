const express=require('express');
const router=express.Router();
const UserController=require('../controller/UserController');





router.get('/ProductBrandList')
router.get('/ProductCategoryList')
router.get('/ProductSliderList')
router.get('/ProductListByBrand/:BrandID')
router.get('/ProductListByCategory/:CategoryID')
router.get('/ProductListBySimilar/:CategoryID')
router.get('/ProductListByKeyword/:Keyword')
router.get('/ProductListByRemark/:Remark')
router.get('/ProductDetails/:ProductID')
router.get('/ProductReviewList/:ProductID')


router.get('/UserOTP', UserController.UserOTP);
router.get('/VerifyLogin/:email/:otp')
router.get('/UserLogout')
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