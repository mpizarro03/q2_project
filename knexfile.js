// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/xg'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/xg'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
