const crypto = require('crypto');
const admission.Model = require('../models/admission.Model');

const findAll = async (filters) => {
    return admission.Model.findAll(filters);
};

const findById = async (id) => {
    return admission.Model.findById(id);
};

const create = async (payload) => {
    const id = 'adm_' + crypto.randomUUID().slice(0, 8);
    return admission.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await admission.Model.findById(id);
    if (!existing) {
        const error = new Error('Admission. not found');
        error.status = 404;
        throw error;
    }
    return admission.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return admission.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
