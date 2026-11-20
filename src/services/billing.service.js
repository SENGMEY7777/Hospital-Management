const crypto = require('crypto');
const billing.Model = require('../models/billing.Model');

const findAll = async (filters) => {
    return billing.Model.findAll(filters);
};

const findById = async (id) => {
    return billing.Model.findById(id);
};

const create = async (payload) => {
    const id = 'bil_' + crypto.randomUUID().slice(0, 8);
    return billing.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await billing.Model.findById(id);
    if (!existing) {
        const error = new Error('Billing. not found');
        error.status = 404;
        throw error;
    }
    return billing.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return billing.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
