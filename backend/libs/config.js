const envs = {
  development: {
    database: "ntask_development",
    username: "ntask",
    password: "ntask",
    params: {
      dialect: "postgres",
      logging: true
    },
    jwtSecret: "Nta$K-AP1",
    jwtSession: { session: false }
  },
  test: {
    database: "ntask_test",
    username: "ntask",
    password: "ntask",
    params: {
      dialect: "postgres",
      logging: false
    },
    jwtSecret: "NTASK_TEST",
    jwtSession: { session: false }
  }
}

const env = process.env.NODE_ENV || "development";

module.exports = envs[env]