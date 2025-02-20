const { defineConfig } = require("cypress");
const { Pool } = require("pg");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here

      const pool = new Pool({
        user: 'neondb_owner',
        password: 'npg_yNsXVz9WYM4P',
        host: 'ep-blue-moon-a4gtw5t0-pooler.us-east-1.aws.neon.tech',
        port: 5432,
        database: 'neondb',
        ssl: { rejectUnauthorized: false },
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

