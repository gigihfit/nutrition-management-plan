var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

seeder.connect('mongodb://127.0.0.1:27017/db_gigih_capstone', function () {});

// Connect to MongoDB via Mongoose
seeder.connect(
  'mongodb://127.0.0.1:27017/db_gigih_capstone',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      './models/Article',
      './models/Exercise',
      './models/HealthData',
      './models/Nutrition',
      './models/User',
    ]);

    // Clear specified collections
    seeder.clearModels(
      ['Article', 'Exercise', 'HealthData', 'Nutrition', 'User'],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: 'Article',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        title: 'Menjaga Kesehatan',
        content:
          'Menjaga kesehatan adalah sebuah aspek penting dalam kehidupan',
        author: 'Jerry A Pangaribuan',
        date: '12-12-2020',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        title: 'Menjaga Kesehatan',
        content:
          'Menjaga kesehatan adalah sebuah aspek penting dalam kehidupan',
        author: 'Ricky A Pangaribuan',
        date: '12-12-2021',
      },
    ],
  },
  {
    model: 'Exercise',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901211'),
        name: 'Jogging',
        description: 'Berlari sedang',
        level: 'Obese',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901212'),
        name: 'Angkat Beban',
        description: 'Mengangkat Beban',
        level: 'Obese, Normal',
      },
    ],
  },
  {
    model: 'HealthData',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901311'),
        height: 175,
        weight: 70.5,
        BMI: 23.0,
        userId: mongoose.Types.ObjectId('5e96cbe292b97300fc901511'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901312'),
        height: 175,
        weight: 70.5,
        BMI: 23.0,
        userId: mongoose.Types.ObjectId('5e96cbe292b97300fc901511'),
      },
    ],
  },
  {
    model: 'Nutrition',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901411'),
        food: 'Apel',
        calorie: 52,
        carbohydrate: 14,
        protein: 0.26,
        fat: 0.17,
        fiber: 2.4,
        calcium: 6,
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901412'),
        food: 'Kentang',
        calorie: 77,
        carbohydrate: 20.1,
        protein: 2,
        fat: 0.1,
        fiber: 2.2,
        calcium: 12,
      },
    ],
  },
  {
    model: 'User',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901511'),
        username: 'jerry2204',
        password: 'rahasia',
        name: 'Jerry Andrianto Pangaribuan',
        email: 'jerryandrianto22@gmail.com',
        dob: '12-12-2000',
        gender: 'Male',
        address: 'Perdagangan',
      },
    ],
  },
];
