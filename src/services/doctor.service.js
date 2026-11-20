const crypto = require('crypto');
const doctor.Model = require('../models/doctor.Model');

const findAll = async (filters) => {
    return doctor.Model.findAll(filters);
};

const findById = async (id) => {
    return doctor.Model.findById(id);
};

const create = async (payload) => {
    const id = 'doc_' + crypto.randomUUID().slice(0, 8);
    return doctor.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await doctor.Model.findById(id);
    if (!existing) {
        const error = new Error('Doctor. not found');
        error.status = 404;
        throw error;
    }
    return doctor.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return doctor.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
