const { Activity , Country } = require('../../db');

const createActivity = async function(activity) {
  try {
    const newActivity = await Activity.create({
      name: activity.name,
      difficulty: activity.difficulty,
      duration: activity.duration,
      season: activity.season
    });

    if (activity.countries && activity.countries.length > 0) {
      await Promise.all(activity.countries.map(async countryId => {
        const country = await Country.findOne({
          where: { id: countryId }
        });
        if (country) {
          await newActivity.addCountry(country);
        } else {
          throw new Error(`País con id ${countryId} no encontrado`);
        }
      }));
    }
    
    return newActivity;
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear actividad");
  }
};


module.exports = {
    createActivity
}
