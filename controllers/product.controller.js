const Product = require("../model/products");


const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};


const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//creating a product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//updating a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
// deleting a product
const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const productDelete = await Product.findByIdAndDelete(id);

        if (!productDelete) {
            return res.status(404).json({ message: "prouct not found" });
        }
        res.status(200).json({ message: "product sucessfully deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};