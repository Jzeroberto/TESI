const Fornecedor = require('../model/Fornecedor')

module.exports = {
    create: async (req,res) =>{
        await Fornecedor.create(req.body)
        return res.redirect('/fornecedor')
    },

    list: async (_,res) => {
        const fornecedorList = await Fornecedor.findAll()
        return res.render('fornecedor/list', {fornecedorList})
    },
    
    form: (_,res) => res.render('fornecedor/form'),
}
