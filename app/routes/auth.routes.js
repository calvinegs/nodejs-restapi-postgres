const router = require("express").Router();
const authService = require("../services/auth.service");
const { verifySignUp } = require("../middleware")
// 帳號註冊
router.post("/signup", 
[
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
],
authService.signup);

router.post("/signin", authService.signin);

module.exports = router;
