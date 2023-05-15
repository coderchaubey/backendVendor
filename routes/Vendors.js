const express = require("express")
const router = express.Router()

 const {
    getVendors,
    getVendorById,
    createVendor,
    updateVendor,
    DeleteVendor,
    test

} = require("../controllers/VendorController")



// <<<<<<<<<<<<<<<<<<<<<<<=========================  Create Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/vendor").post(createVendor)


// <<<<<<<<<<<<<<<<<<<<<<<=========================  Get All Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/all/vendor").get(getVendors)

//<<<<<<<<<<<<<<<<<<<<<<<========================= Get Vendor by ID Route   ==========================>>>>>>>>>>>>>>>>>
router.route("/vendor/:id").get(getVendorById);

// <<<<<<<<<<<<<<<<<<<<<<<=========================  Update Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/update/vendor/:id").put(updateVendor)

// <<<<<<<<<<<<<<<<<<<<<<<=========================  Delete Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/vendor/delete/:id").delete(DeleteVendor)

router.route("/md").get(test)

module.exports = router