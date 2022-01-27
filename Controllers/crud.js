const conexion = require('../DataBase/db');

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