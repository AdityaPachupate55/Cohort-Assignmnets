const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db")


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password :password
    })
    res.json("Admin created");

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const ImageLink = req.body.ImageLink;
    const price = req.body.price;

    await Course.create({
        title:title,
        description:description,
        ImageLink:ImageLink,
        price:price,
    });
    res.json({
        msg : 'course created succesfully',courseId:newCourse._id
    });
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    })
});

module.exports = router;