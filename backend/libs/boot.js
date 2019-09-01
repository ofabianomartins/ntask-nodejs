import https from "https";
import fs from "fs";

module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    const credentials = {
      key: fs.readFileSync("ntask.key","utf8"),
      cert: fs.readFileSync("ntask.cert","utf8")
    }
    app.db
      .sequelize.sync({ underscored: true })
      .then(() => https.createServer(credentials,app).listen(app.set("port")))
      .then(() => console.log(`NTask API - porta ${app.set("port")}`) );
  }else{
    app.db.sequelize.sync({ underscored: true })
  }
}