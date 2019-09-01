import logger from "./logger.js";

const envs = {
  development: {
    database: "ntask_development",
    username: "ntask",
    password: "ntask",
    params: {
      dialect: "postgres",
      logging: (sql) => {
        logger.info(`[${new Date()}] ${sql}`)
      },
      snake_case: true
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
      logging: false,
      underscored: true,
      underscoredAll: true,
      snake_case: true
    },
    jwtSecret: "NTASK_TEST",
    jwtSession: { session: false }
  }
}

const env = process.env.NODE_ENV || "development";

module.exports = envs[env]