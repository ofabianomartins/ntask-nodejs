module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    app.db.sequelize.sync({ logging: console.log })
      .done( () => {
        app.listen(app.set("port"), () => {
          console.log(`NTask API - porta ${app.set("port")}`)
        });
      });
  }else{
    app.db.sequelize.sync({ logging: false })
  }
}