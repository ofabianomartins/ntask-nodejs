envs = {
  development: {
    database: "ntask_development",
    username: "ntask",
    password: "ntask",
    params: {
      dialect: "postgres",
    },
    jwtSecret: "Nta$K-AP1",
    jwtSession: { session: false }
  }
}

const env = process.env.PORT || "development";

module.exports = envs[env]