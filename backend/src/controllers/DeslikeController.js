const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
        const { devId }  = req.params;//Pega o dev dos parâmetros, será o dado like
        const { user } = req.headers;//Pega o dev do cabeçalho

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: 'Dev not exists'})
        }

        loggedDev.deslikes.push(targetDev._id);

        await loggedDev.save();
       return res.json(loggedDev);
    }
}