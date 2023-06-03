const express = require('express');
const router = express.Router();
const Produit = require("../models/produit")
// afficher la liste des produits.
router.get('/', async (req, res,) => {
    try {
        const produits = await
        Produit.find().populate("categorieID").exec();
        res.status(200).json(produits);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvel produit
router.post('/', async (req, res) => {
    const nouvproduit = new Produit(req.body)
    try {
        await nouvproduit.save();
        res.status(200).json(nouvproduit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// chercher un produit
router.get('/:produitId', async (req, res) => {
    try {
        const art = await Produit.findById(req.params.produitId);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un produit
router.put('/:produitId', async (req, res) => {
    const { reference,
        designation, price, marque, qtestock, imageart, categorieID } = req.body;
    const id = req.params.produitId;
    try {
        const prod1 = {
            reference: reference, designation: designation, price: price, qtestock: qtestock, imageart: imageart,categorieID:categorieID, _id: id
        };
        await Produit.findByIdAndUpdate(id, prod1);
        res.json(prod1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer un produit
router.delete('/:produitId', async (req, res) => {
    const id = req.params.produitId;
    await Produit.findByIdAndDelete(id);
    res.json({ message: "product deleted successfully." });
});
module.exports = router;