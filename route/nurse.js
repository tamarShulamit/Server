const express=require('express');
const route=express.Router();
const controller=require('../controller/nurse');

route.get('/',controller.getByNameAndPassword);
route.put('/:id',controller.updateNurse);
route.post('/',controller.addNurse);
route.delete('/:id',controller.deleteNurse);

module.exports=route;