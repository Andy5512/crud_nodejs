const express = require('express');
const router = express.Router();

const conexion = require('../DataBase/db');

router.get('/', (req, res)=> { 
      res.render('index')
      
})

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

const crud = require('../Controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)


module.exports = router;