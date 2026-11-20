const crypto = require('crypto');
const appointment.Model = require('../models/appointment.Model');

const findAll = async (filters) => {
    return appointment.Model.findAll(filters);
};

const findById = async (id) => {
    return appointment.Model.findById(id);
};

const create = async (payload) => {
    const id = 'app_' + crypto.randomUUID().slice(0, 8);
    return appointment.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await appointment.Model.findById(id);
    if (!existing) {
        const error = new Error('Appointment. not found');
        error.status = 404;
        throw error;
    }
    return appointment.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return appointment.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
