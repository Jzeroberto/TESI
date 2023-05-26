const Fornecedor = require('../model/Fornecedor')
const Product = require('../model/Product')

module.exports = {
    home: (_,res) => res.render('index'),

    market: async (_,res) => {
        const fornecedorList = await Fornecedor.findAll()
        const productsList = await Product.findAll()
        return res.render('market', {fornecedorList, productsList})
    }
}
