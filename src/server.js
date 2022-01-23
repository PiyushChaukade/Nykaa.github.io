const app =require("./index");
const connect = require("./configs/db");
// const port = process.env.PORT || 1880;

app.listen(1880, async () => {

    try {
        
        await connect();
        console.log("listen on 1880");
    } catch (err) {
        console.log(err.message)
    }
})