const express = require('express');
const router = express.Router();

const conexion = require('../DataBase/db');

router.get('/', (req, res)=> { 
      res.render('index')
      
})

// RUTAS CLIENTES 

router.get('/cliente', (req, res)=> {
      conexion.query('SELECT * FROM cliente', (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Cliente/cliente', { results:results });
            }
      })
})

router.get('/cliente_edit/:Id_cliente', (req, res)=>{
      const id = req.params.Id_cliente;
      conexion.query('SELECT * FROM cliente WHERE Id_cliente = ?', [id], (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Cliente/cliente_edit', { cliente:results[0] });
            }
      })      
})    

router.get('/delete/:Id_cliente', (req, res)=>{
      const id = req.params.Id_cliente;
      conexion.query('DELETE FROM cliente WHERE Id_cliente = ?',[id],(error, results)=>{
            if(error){
                  throw error;
            }
            else{
                  res.redirect('/cliente');
            }
      })

});

// RUTAS CARDEX

router.get('/cardex', (req, res)=> {
      conexion.query('SELECT * FROM cardex', (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Cardex/cardex', { results:results });
            }
      })
})

router.get('/cardex_edit/:Id_producto', (req, res)=>{
      const id = req.params.Id_producto;
      conexion.query('SELECT * FROM cardex WHERE Id_cliente = ?', [id], (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Cardex/cardex_edit', { cardex:results[0] });
            }
      })      
})    

router.get('/delete_C/:Id_producto', (req, res)=>{
      const id = req.params.Id_producto;
      conexion.query('DELETE FROM cardex WHERE Id_producto = ?',[id],(error, results)=>{
            if(error){
                  throw error;
            }
            else{
                  res.redirect('/cardex');
            }
      })

});

//RUTAS COMPRAS

router.get('/compra', (req, res)=> {
      conexion.query('SELECT * FROM compra', (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Compra/compra', { results:results });
            }
      })
})

router.get('/compra_edit/:Id_compra', (req, res)=>{
      const id = req.params.Id_compra;
      conexion.query('SELECT * FROM compra WHERE Id_compra = ?', [id], (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Compra/compra_edit', { compra:results[0] });
            }
      })      
})    

router.get('/deleteCompra/:Id_compra', (req, res)=>{
      const id = req.params.Id_compra;
      conexion.query('DELETE FROM compra WHERE Id_compra = ?',[id],(error, results)=>{
            if(error){
                  throw error;
            }
            else{
                  res.redirect('/compra');
            }
      })

});
//rutas ventas
router.get('/venta', (req, res)=> {
      conexion.query('SELECT * FROM venta', (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Venta/venta', { results:results });
            }
      })
})

router.get('/venta_edit/:Id_venta', (req, res)=>{
      const id = req.params.Id_venta;
      conexion.query('SELECT * FROM venta WHERE Id_venta = ?', [id], (error, results) => {
            if(error){
                  throw error;
            }
            else{
                  res.render('../Views/Venta/venta_edit', { venta:results[0] });
            }
      })      
})    

router.get('/deleteVenta/:Id_venta', (req, res)=>{
      const id = req.params.Id_venta;
      conexion.query('DELETE FROM venta WHERE Id_venta = ?',[id],(error, results)=>{
            if(error){
                  throw error;
            }
            else{
                  res.redirect('/venta');
            }
      })

});

//CONTROLADORES CLIENTES

const crud = require('../Controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)

//controladores venta

router.post('/saveVenta', crud.saveVenta)
router.post('/updateVenta', crud.updateVenta)

//CONTROLADORES CARDEX

router.post('/saveCardex', crud.saveCardex)
router.post('/updateCardex', crud.updateCardex)

//CONTROLADORES COMPRA

router.post('/saveCompra', crud.saveCompra)
router.post('/updateCompra', crud.updateCompra)

module.exports = router;