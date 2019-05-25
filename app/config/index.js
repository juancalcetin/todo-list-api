const NODE_ENV = process.env.NODE_ENV || "dev"; 



const ENVS = {

  dev: {

    SECRET_KEY: "799651B27B2E5D99D17C9CF6754B5",

    db: {

      url: 'mongodb+srv://admin:admin@cluster0-t5cl4.mongodb.net/todo-list'

    },

    port: 3000

  },

  test: {

    // EMPTY

  },

  production: {

    SECRET_KEY: "799651B27B2E5D99D17C9CF6754B5",

    db: {

      url: 'mongodb+srv://admin:admin@cluster0-t5cl4.mongodb.net/todo-list'

    },

    port: process.env.PORT

  }

};



module.exports = ENVS[NODE_ENV]

