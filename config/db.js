const mongoose = require('mongoose');

exports.connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/maindb', {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
