const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

// routes
const VendorRoute = require("./routes/Vendors")

// database connection
require("./config/databaseConnection")



// middleware for json 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use("/",VendorRoute)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
