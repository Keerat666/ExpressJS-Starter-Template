const { model, Schema } = require('mongoose');

const createdAtType = {
  type: Date,
  default: new Date(),
};

const postSchema = new Schema({
  title: String,
  caption: String,
  image: String,
  username: String,
  createdAt: createdAtType,
  comments: [
    {
      body: String,
      username: String,
      createdAt: createdAtType,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: createdAtType,
    },
  ],
});

module.exports = model('Post', postSchema);
