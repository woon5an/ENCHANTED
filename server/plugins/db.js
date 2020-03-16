module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect("mongodb://127.0.0.1:27017/enchanted", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.once("open", function () {
    console.log("数据库连接成功")
  })
}