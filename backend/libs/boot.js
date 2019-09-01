module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    app.db
      .sequelize.sync({ underscored: true })
      .then(() => app.listen(app.set("port")))
      .then(() => console.log(`NTask API - porta ${app.set("port")}`) );
  }else{
    app.db.sequelize.sync({ underscored: true })
  }
}