const room.Service = require('../services/room.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await room.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await room.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Room. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await room.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Room. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await room.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Room. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await room.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Room. deleted successfully' });
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
