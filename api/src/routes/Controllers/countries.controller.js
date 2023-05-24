const { getCountriesApi, getDetailCountries, searchCountriesByName} = require('../Services/countries.service')

const getCountries = async function (req, res, next) {
    if(!req.params.id && !req.query.name) {
        try{
            const api = await getCountriesApi();
            
            res.status(200).send(api)
        } catch(error) {
            next(error)
        }
    } else {
        next()
    }
    
}

const getCountriesById = async function(req, res, next) {
    if(req.params.id && !req.query.name){
        try{
            const detail = await getDetailCountries(req.params.id);
            res.status(200).send(detail)
        } catch(error) {
            next(error)
        }
    } else {
        next()
    }
    
}

const getCountriesByName = async function(req, res, next){
    try{
        if(!req.params.id && req.query.name) {
            const search = await searchCountriesByName(req.query.name)
            res.status(200).send(search)
        }
    } catch(error){
        next(error)
    }
    
    
}

module.exports = {
    getCountries,
    getCountriesById,
    getCountriesByName
}