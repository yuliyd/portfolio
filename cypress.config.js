const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // env: {
  //   userEmail: `yuliyd99@gmail.com`,
  //   userPassword: `gEh!SaPXQD5qgnH`,
  //   fakeEmail: `fakeemail@gmail.com`,
  //   fakePassword: `fakePassword`,
    
  //   realtorEmail: `123@gmail.com`,
  //   realtorPassword: `testAdmin`,
  //   adminEmail: `admin@gmail.com`,
  //   adminPassword: `1`
  // },

  e2e: {
    baseUrl: 'https://www.mythicos.store/'
  }
})
