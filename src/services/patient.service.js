const crypto = require('crypto');
const patient.Model = require('../models/patient.Model');

const findAll = async (filters) => {
    return patient.Model.findAll(filters);
};

const findById = async (id) => {
    return patient.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pat_' + crypto.randomUUID().slice(0, 8);
    return patient.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await patient.Model.findById(id);
    if (!existing) {
        const error = new Error('Patient. not found');
        error.status = 404;
        throw error;
    }
    return patient.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return patient.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
