// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:3000/xg'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost:3000/xg'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
