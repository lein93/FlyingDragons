/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    pasarpote:{
                type:'string'
            },
    nombre:{
                type:'string'
            },
    apellido:{
                type:'string'
            },
    paisPasaporte:{
                type:'string'
    },
    idReserva:{
          model:'Reserva',
          defaultsTo:1
      }

  }
};

