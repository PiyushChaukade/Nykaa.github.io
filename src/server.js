const app =require("./index");
const connect = require("./configs/db");
const port = process.env.PORT || 1880;

app.listen(port, async () => {

    try {
        
        await connect();
        console.log(`listen on ${port}`);
    } catch (err) {
        console.log(err.message)
    }
})