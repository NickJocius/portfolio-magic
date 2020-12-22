const Category = require('../models/category');
const slugify = require('slugify');


exports.create = async (req, res) => {
    try {
        // create new category with name and slug
        const { name } = req.body;
        const category = await new Category({ name, slug: slugify(name).toLowerCase() }).save();
        res.json({ category });

    } catch (error) {
        res.status(400).send('Create category failed');
    }
};

exports.list = async (req, res) =>
    res.json(await Category.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
    try {
        // get a single category
        let category = await Category.findOne({ slug: req.params.slug }).exec();
        res.json(category);
    } catch (error) {
        res.status(400).send('Category not found');
    }
};

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Category.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name) },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).send("Category update failed");
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Create delete failed");
    }
};