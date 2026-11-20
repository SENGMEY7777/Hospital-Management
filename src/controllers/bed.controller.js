const bed.Service = require('../services/bed.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await bed.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await bed.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Bed. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await bed.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Bed. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await bed.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Bed. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await bed.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Bed. deleted successfully' });
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
