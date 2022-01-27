const conexion = require('../DataBase/db');

//CRUD CLIENTE

exports.save = (req, res) => {
      const nombre =  req.body.nombre;
      const apellido =  req.body.apellido;
      const correo =  req.body.correo;
      const telefono =  req.body.telefono;

      conexion.query('INSERT INTO cliente SET ?', {Nombre:nombre, Apellido:apellido, Correo:correo, Telefono:telefono}, (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/cliente')
            }
      })
};

exports.update = (req, res) => {
      const id = req.body.id;
      const nombre =  req.body.nombre;
      const apellido =  req.body.apellido;
      const correo =  req.body.correo;
      const telefono =  req.body.telefono;

      conexion.query('UPDATE cliente SET ? WHERE Id_cliente = ?', [{Nombre:nombre, Apellido:apellido, Correo:correo, Telefono:telefono}, id], (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/cliente')
            }
      })
};

//CRUD CARDEX

exports.saveCardex = (req, res) => {
      const nombre =  req.body.nombre;
      const cantidad =  req.body.cantidad;
      const precio =  req.body.precio;
      

      conexion.query('INSERT INTO cardex SET ?', {Nombre:nombre, Cantidad:cantidad, Precio:precio}, (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/cardex')
            }
      })
};

exports.updateCardex = (req, res) => {
      const id = req.body.id;
      const nombre =  req.body.nombre;
      const cantidad =  req.body.cantidad;
      const precio =  req.body.precio;
      

      conexion.query('UPDATE cardex SET ? WHERE Id_producto = ?', [{Nombre:nombre, Cantidad:cantidad, Precio:precio}, id], (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/cardex')
            }
      })
};
