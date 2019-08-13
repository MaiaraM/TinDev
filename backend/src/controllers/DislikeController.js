const Dev =require('../model/Dev');

module.exports={
    async store(req, res){
        const {devId} = req.params;
        const {user} = req.headers;
        
        const loggedDev = await Dev.findById(user)
        const targeDev =await Dev.findById(devId);

        if(!targeDev)
            return res.status(400).json({error:'Dev not exists!'});
        
        loggedDev.dislikes.push(targeDev._id);

        await loggedDev.save();

        return res.json(loggeddev);
         
    }
}