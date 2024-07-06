const express = require("express");
const UserApplication = require("../application/userApplication");
const isAuth = require("../middleware/isAuth");
const router = express();
const userApplication = new UserApplication();

router.post("/", (req, res) => {
    
    res.send(userApplication.add);
});
router.get("/", async (req, res) => { 
    const getUsers = await userApplication.getAll();

    res.send(getUsers);
});
// router.get("/:id", UserApplication.getById);
// router.put("/:id", UserApplication.update);
// router.delete("/:id", UserApplication.delete);

module.exports = router;