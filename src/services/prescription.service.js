const crypto = require('crypto');
const prescription.Model = require('../models/prescription.Model');

const findAll = async (filters) => {
    return prescription.Model.findAll(filters);
};

const findById = async (id) => {
    return prescription.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pre_' + crypto.randomUUID().slice(0, 8);
    return prescription.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await prescription.Model.findById(id);
    if (!existing) {
        const error = new Error('Prescription. not found');
        error.status = 404;
        throw error;
    }
    return prescription.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return prescription.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
