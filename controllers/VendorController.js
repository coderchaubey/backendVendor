const Vendor = require("../models/vendor");


// <<<<<<<<<<<<<<<<<<<<<<<=========================  GET vendor With Pagination ALL CONTROLLER     ==========================>>>>>>>>>>>>>>>>>
exports.getVendors = async (req, res) => {
	try {
        const page = parseInt(req.query.page) || 1; // Current page number
        const limit = parseInt(req.query.limit) || 10; // Number of documents per page
    
        // Calculate the skip value to determine the starting index of documents to fetch
        const skip = (page - 1) * limit;
    
        // Query the database to retrieve the vendors with pagination
        const vendors = await Vendor.find().skip(skip).limit(limit);

		res.json({
			message: "All Vendors",
			vendors: vendors,
		});
	} catch (error) {
		console.log("error");
	}
};


// <<<<<<<<<<<<<<<<<<<<<<<=========================  CREATE CONTROLLER     ==========================>>>>>>>>>>>>>>>>>
exports.createVendor = async (req, res) => {
	try {
		const vendorCreatedSuccessfully = await Vendor.create(req.body);
		res.status(201).json({
			message: "Successfully created",
			vendor: vendorCreatedSuccessfully,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred" });
	}
};

// <<<<<<<<<<<<<<<<<<<<<<<=========================  DELETE CONTROLLER     ==========================>>>>>>>>>>>>>>>>>
exports.DeleteVendor = async (req, res) => {
	try {
		const VendorID = req.params.id;
		await Vendor.findByIdAndDelete({ _id: VendorID });
		res.json({
			message: "Deleted successfully",
		});
	} catch (error) {
		console.log("error");
	}
};


// <<<<<<<<<<<<<<<<<<<<<<<=========================  GET vendor by ID CONTROLLER     ==========================>>>>>>>>>>>>>>>>>
exports.getVendorById = async (req, res) => {
	try {
		const vendorId = req.params.id; // Assuming the ID is provided in the request parameters

		const vendor = await Vendor.findById(vendorId);

		if (!vendor) {
			return res.status(404).json({ error: "Vendor not found" });
		}

		res.json({
			message: "Vendor retrieved successfully",
			vendor: vendor,
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "An error occurred" });
	}
};


// <<<<<<<<<<<<<<<<<<<<<<<=========================  UPDATE CONTROLLER     ==========================>>>>>>>>>>>>>>>>>
exports.updateVendor = async (req, res) => {
	try {
		const { id } = req.params; // Assuming the ID is provided in the request parameters
		const updatedVendor = await Vendor.findByIdAndUpdate(id, req.body, {
			new: true,
		});

		if (!updatedVendor) {
			return res.status(404).json({ error: "Vendor not found" });
		}

		res.json({
			message: "Successfully updated",
			vendor: updatedVendor,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred" });
	}
};


// <<<<<<<<<<<<<<<<<<<<<<<=========================  TESTING CONTROLLER     ==========================>>>>>>>>>>>>>>>>>
exports.test = async (req, res) => {
	try {
		res.json({
			message: "testing",
		});
	} catch (error) {
		console.log("error");
	}
};
