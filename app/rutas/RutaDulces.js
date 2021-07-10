const { Router } = require('express');
const router = Router();
const ControladorDulces = require('../controlador/ControladorDulces');
const modeloDulces = require('../modelo/ModeloDulces');

 router.get('/',ControladorDulces.index )
       .post('/',ControladorDulces.agregar)
       .get('/:key/:value',ControladorDulces.buscar,ControladorDulces.mostrar)
       .put('/:key/:value', ControladorDulces.buscar, ControladorDulces.actualizar)
       .delete('/:key/:value', ControladorDulces.buscar, ControladorDulces.eliminar);


        // router.get('/', async (req, res) => {
        //     const dulces = await modeloDulces.find();
        //        res.render('index', {
        //            tasksAn:dulces
        //        });
        //    });

        // router.post('/addDul', async (req,res) => {
        //  const altDul = new modeloDulces(req.body);
        //  await altDul.save();

        //  console.log(req.body);
        //  res.send('<script>alert("Registro agregado correctamente"); window.location.href = "/";</script>');
        //  console.info(altDul);
        // });   

module.exports=router;