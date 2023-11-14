const Article = require('../models/Article');

module.exports = {
  async getAllArticle() {
    try {
      const articleData = await Article.find();

      return articleData;
    } catch (error) {
      throw error;
    }
  },

  async getDetailArticle(id) {
    try {
      const articleData = await Article.findById(id);

      return articleData;
    } catch (error) {
      throw error;
    }
  },

  async addArticle(articleData) {
    try {
      const addedArticle = new Article({
        title: articleData.title,
        content: articleData.content,
        author: articleData.author,
        date: Date.now(),
      });

      await addedArticle.save();

      return addedArticle;
    } catch (error) {
      throw error;
    }
  },

  async updateArticle(id, articleData) {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        id,
        {
          $set: articleData,
          date: Date.now(),
        },
        { new: true }
      );

      return updatedArticle;
    } catch (error) {
      throw error;
    }
  },

  async deleteArticle(id) {
    try {
      const deletedArticle = await Article.findByIdAndDelete(id);

      return deletedArticle;
    } catch (error) {
      throw error;
    }
  },
};
