const { defineConfig } = require("cypress");
const { Pool } = require("pg");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here

      const pool = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
      })

      on ('task', {
        removeUser(email) {
          return new Promise(function(resolve){
            pool.query('DELETE FROM users WHERE email = $1', [email], function(error, result){
              if (error) throw error;
              resolve({success: result})
            })
          })
        }
      })
    },

    baseUrl: "http://localhost:3000",
    viewportWidth: 1440,
    viewportHeight: 900
  },
});

