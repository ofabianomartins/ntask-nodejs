module.exports = app => {
  app.db.sequelize.sync({ logging: console.log })
    .done( () => {
      app.listen(app.set("port"), () => {
        console.log(`NTask API - porta ${app.set("port")}`)
      });
    });
}