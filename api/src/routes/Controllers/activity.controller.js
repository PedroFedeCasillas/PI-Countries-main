const { createActivity } = require('../Services/activity.services');

const create = async function(req, res, next) {
  try {
    const dataBody = await createActivity(req.body);
    res.status(201).json({ message: 'Actividad creada exitosamente', data: dataBody });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create
};


