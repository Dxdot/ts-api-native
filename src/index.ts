import express from "express" ;
import userRoute from "./routes/user.route.js" ;

const app = express() ;
const PORT = process.env.PORT || 3000 ;

app.use(express.json()) ;
app.use("/users", userRoute) ;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) ;
}) ;