const app =require("./index");
const connect = require("./configs/db");

app.listen(1880, async () => {

    try {
        
        await connect();
        console.log("listening on port 1880")
    } catch (err) {
        console.log(err.message)
    }
})