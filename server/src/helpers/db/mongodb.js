import mongoose from "mongoose";
const url_db = "mongodb+srv://Augusto:ZVPkalszFsH9mZHR@assistbarber.mwqms.mongodb.net/assistbarber?retryWrites=true";
const init = () => {
  mongoose
    .connect(url_db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true
    })
    .catch((err) => {
      console.error('error: ' + err.stack);
      process.exit(1);
    });
  mongoose.connection.on('open', () => {
    console.log('connected to database');
  });

};

mongoose.Promise = global.Promise;

exports.default = init();
