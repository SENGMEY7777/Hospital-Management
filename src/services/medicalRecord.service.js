const crypto = require('crypto');
const medicalRecord.Model = require('../models/medicalRecord.Model');

const findAll = async (filters) => {
    return medicalRecord.Model.findAll(filters);
};

const findById = async (id) => {
    return medicalRecord.Model.findById(id);
};

const create = async (payload) => {
    const id = 'med_' + crypto.randomUUID().slice(0, 8);
    return medicalRecord.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await medicalRecord.Model.findById(id);
    if (!existing) {
        const error = new Error('MedicalRecord. not found');
        error.status = 404;
        throw error;
    }
    return medicalRecord.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return medicalRecord.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
