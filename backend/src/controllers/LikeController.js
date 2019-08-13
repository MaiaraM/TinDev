const Dev =require('../model/Dev');

module.exports={
    async store(req, res){
        const {devId} = req.params;
        const {user} = req.headers;
        
        const loggedDev = await Dev.findById(user)
        const targeDev =await Dev.findById(devId);

        if(!targeDev)
            return res.status(400).json({error:'Dev not exists!'});
        

        if(targeDev.likes.includes(loggedDev._id))
            console.log('Deu Match')
        

        loggedDev.likes.push(targeDev._id);

        await loggedDev.save();

        return res.json(loggeddev);
         
    }
}