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

//CRUD COMPRA

exports.saveCompra = (req, res) => {
      const empresa =  req.body.empresa;
      const cantidad =  req.body.cantidad;
      const precio =  req.body.precio;
      const preciototal =  req.body.preciototal;
      
      conexion.query('INSERT INTO compra SET ?', {Empresa:empresa, Cantidad:cantidad, Precio:precio, PrecioTotal:preciototal}, (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/compra')
            }
      })
};

exports.updateCompra = (req, res) => {
      const id = req.body.id;
      const empresa =  req.body.empresa;
      const cantidad =  req.body.cantidad;
      const precio =  req.body.precio;
      const preciototal =  req.body.preciototal;

      conexion.query('UPDATE compra SET ? WHERE Id_compra = ?', [{Empresa:empresa, Cantidad:cantidad, Precio:precio, PrecioTotal:preciototal}, id], (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/compra')
            }
      })
};
//crud venta
exports.saveVenta = (req, res) => {
      const nombrecliente =  req.body.nombrecliente;
      const producto =  req.body.producto;
      const cantidad =  req.body.cantidad;
      const total =  req.body.total;
      
      conexion.query('INSERT INTO venta SET ?', {NombreCliente:nombrecliente, Producto:producto, Cantidad:cantidad, Total:total}, (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/venta')
            }
      })
};

exports.updateVenta = (req, res) => {
      const id = req.body.id;
      const nombrecliente =  req.body.nombrecliente;
      const producto =  req.body.producto;
      const cantidad =  req.body.cantidad;
      const total =  req.body.total;

      conexion.query('UPDATE venta SET ? WHERE Id_venta = ?', [{NombreCliente:nombrecliente, Producto:producto, Cantidad:cantidad, Total:total}, id], (error,results) => {
            if(error){
                  console.log(error);
            }else{
                  res.redirect('/venta')
            }
      })
};