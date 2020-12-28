const Sub = require('../models/sub');
const slugify = require('slugify');


exports.create = async (req, res) => {
    try {
        // create new category with name and slug
        const { name, parent } = req.body;
        const sub = await new Sub({ name, parent, slug: slugify(name).toLowerCase() }).save();
        res.json({ sub });

    } catch (error) {
        res.status(400).send('Create subcategory failed');
    }
};

exports.list = async (req, res) =>
    res.json(await Sub.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
    try {
        // get a single category
        let sub = await Sub.findOne({ slug: req.params.slug }).exec();
        res.json(sub);
    } catch (error) {
        res.status(400).send('Subcategory not found');
    }
};

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Sub.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name) },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).send("Subcategory update failed");
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Subcategory delete failed");
    }
};