const getAll=(model) => async (req,res) => {
    try {
        const items = await model.find().lean().exec();
       // return res.status(200).send(items)
       return res.render("index")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};



module.exports= (model,page =null) => ({

    get:getAll(model,page),
})