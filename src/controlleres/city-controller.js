const { CityService } = require('../services/index');
const cityService = new CityService();
/* 
* POST 
* data -> req.body
*/

const create = async (req, res ) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success: true,
            message :'Successfully create a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create a city',
            err: error

        });
    }
}
//DELETE  -> /city/:id
const destroy = async (req, res ) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message :'Successfully delete a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete the city',
            err: error

        });
    }
}

const get = async (req, res ) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message :'Successfully fetched a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get the city',
            err: error

        });
    }
}

const update = async (req, res ) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success: true,
            message :'Successfully updated the city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update the city',
            err: error

        });
    }
}

module.exports ={
    create,
    destroy,
    get,
    update
}