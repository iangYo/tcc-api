class DiaryRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async index(id, limit, page) {
    const Diary = this.mongoose.model('Diary');
    const diary = await Diary.find({ user: id })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: 'desc' });

    return diary;
  }

  async create(body) {
    const Diary = this.mongoose.model('Diary');
    const diary = new Diary(body);
    await diary.save();
  }

  async update(id, body) {
    const Diary = this.mongoose.model('Diary');
    await Diary.updateOne({ _id: id }, body);
  }

  async remove(id) {
    const Diary = this.mongoose.model('Diary');
    await Diary.findOneAndDelete({ _id: id });
  }
}

module.exports = DiaryRepository;
