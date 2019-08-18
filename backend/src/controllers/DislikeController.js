const Dev =require('../model/Dev');

module.exports={
    async store(req, res){
        const {devIds} = req.params;
        const {user} = req.headers;
              
        const loggedDev = await Dev.findById(user)
        const targeDev =await Dev.findById(devIds);

        if(!targeDev)
            return res.status(400).json({error:'Dev not exists!'});
        
        loggedDev.dislikes.push(targeDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
         
    }
}