const crypto = require('crypto');
const laboratory.Model = require('../models/laboratory.Model');

const findAll = async (filters) => {
    return laboratory.Model.findAll(filters);
};

const findById = async (id) => {
    return laboratory.Model.findById(id);
};

const create = async (payload) => {
    const id = 'lab_' + crypto.randomUUID().slice(0, 8);
    return laboratory.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await laboratory.Model.findById(id);
    if (!existing) {
        const error = new Error('Laboratory. not found');
        error.status = 404;
        throw error;
    }
    return laboratory.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return laboratory.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
