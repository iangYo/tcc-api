class ObjectiveRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async index(id, limit, page) {
    const Objective = this.mongoose.model('Objective');
    const objective = await Objective.find({ user: id })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: 'desc' });

    return objective;
  }

  async create(body) {
    const Objective = this.mongoose.model('Objective');
    const objective = new Objective(body);
    await objective.save();
  }

  async update(id, body) {
    const Objective = this.mongoose.model('Objective');
    await Objective.updateOne({ _id: id }, body);
  }

  async remove(id) {
    const Objective = this.mongoose.model('Objective');
    await Objective.findOneAndDelete({ _id: id });
  }
}

module.exports = ObjectiveRepository;
