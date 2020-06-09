// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/lowonganApi"
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/tlowonganApi"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
