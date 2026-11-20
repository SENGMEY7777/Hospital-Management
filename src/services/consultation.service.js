const crypto = require('crypto');
const consultation.Model = require('../models/consultation.Model');

const findAll = async (filters) => {
    return consultation.Model.findAll(filters);
};

const findById = async (id) => {
    return consultation.Model.findById(id);
};

const create = async (payload) => {
    const id = 'con_' + crypto.randomUUID().slice(0, 8);
    return consultation.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await consultation.Model.findById(id);
    if (!existing) {
        const error = new Error('Consultation. not found');
        error.status = 404;
        throw error;
    }
    return consultation.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return consultation.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
