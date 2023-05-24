const axios = require("axios");
const { Country, Activity } = require("../../db");
const { Sequelize } = require("sequelize");


const getCountryDB = async () => {
  const allCountries = await getCountryDB.findAll();
  return allCountries
}

const countries = async () => {
  try {
    const api = (
      await axios.get("https://restcountries.com/v3/all")
      ).data;
    const apiData = api.map(async (element) => {
      await Country.findOrCreate({
        where: {
          id: element.cca3,
          name: element.name["common"],
          flags: element.flags[0],
          continents: element.continents[0],
          capital:
            element.capital !== undefined
              ? element.capital[0]
              : "No esta definido Capital",
          subregion:
            element.subregion !== undefined
              ? element.subregion
              : "No esta definido Subregion",
          area: element.area,
          population: element.population,
        },
        row: false,
      });
      await Promise.all(apiData);
      return apiData;
    });
  } catch (error) {
    console.log(error);
  }
};

const getCountriesApi = async () => {
  try {
    const validarInfo = await Country.findAll()
    if(!validarInfo.length ){
      const countriesData = await countries();
    }
    
    const getCountries = await Country.findAll({
      attributes: ["id", "name", "flags", "continents", "population"],
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
    return getCountries;
  } catch (error) {
    console.log(error);
  }
};

const getDetailCountries = async (id) => {
  try {
    const validarInfo = await Country.findAll()
    if(!validarInfo.length  ){
      const countriesData = await countries();
    }
    
    const iD = id.toUpperCase(); // convierte en mayusculas
    const detailCountrie = await Country.findOne({
      where: {
        id: iD,
      },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });

    return detailCountrie;
  } catch (error) {
    console.log(error);
  }
};

const searchCountriesByName = async (name) => {
  try {
    const countrie = await Country.findAll({
      where: {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          "LIKE",
          `%${name.toLowerCase()}%`
        ),
      },

      raw: true,
    });

    Promise.all(countrie);
    if (countrie.length > 0) {
      return countrie;
    }
    return "No se encontro el pais";
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCountriesApi,
  getDetailCountries,
  searchCountriesByName,
  countries,
};
