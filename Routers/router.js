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

//CONTROLADORES CLIENTES

const crud = require('../Controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)

//CONTROLADORES CARDEX

router.post('/saveCardex', crud.saveCardex)
router.post('/update', crud.update)
module.exports = router;