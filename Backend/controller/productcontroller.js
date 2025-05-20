import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";

// get product for user
const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    const product = req.body;
    const id = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {
            new: true,
        });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndRemove(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};




export { getProduct, getProducts, createProduct, updateProduct, deleteProduct }


