const prescription.Service = require('../services/prescription.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await prescription.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await prescription.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Prescription. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await prescription.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Prescription. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await prescription.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Prescription. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await prescription.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Prescription. deleted successfully' });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteItem,
};
