const express = require('express')

const path = require('path')

//______________Controladores______________
const ProductController = require('./controller/ProductController')
const HomeController = require('./controller/HomeController')
const FornecedorController = require('./controller/FornecedorController')

//______________Configurações Service_____________
const app = express()

app.listen(8080, () => {
    console.log('Serviço Executando......Disponível em http://localhost:8080')
    console.log('Para finalizar, pressione CTRL + C')
})

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded())



//______________Rotas_______________
app.get('/', HomeController.home)
app.get('/market', HomeController.market)

app.get('/products', ProductController.list)
app.get('/products/form', ProductController.form)
app.post('/products/create', ProductController.create)

app.get('/fornecedor', FornecedorController.list)
app.get('/fornecedor/form', FornecedorController.form)
app.post('/fornecedor/create', FornecedorController.create)

//______________Execução_____________