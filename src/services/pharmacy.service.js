const crypto = require('crypto');
const pharmacy.Model = require('../models/pharmacy.Model');

const findAll = async (filters) => {
    return pharmacy.Model.findAll(filters);
};

const findById = async (id) => {
    return pharmacy.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pha_' + crypto.randomUUID().slice(0, 8);
    return pharmacy.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await pharmacy.Model.findById(id);
    if (!existing) {
        const error = new Error('Pharmacy. not found');
        error.status = 404;
        throw error;
    }
    return pharmacy.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return pharmacy.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
