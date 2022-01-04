class AuthRepository {
  constructor(mongoose, hashPassword) {
    this.mongoose = mongoose;
    this.hashPassword = hashPassword;
  }

  async findByEmail(email) {
    const User = this.mongoose.model('User');
    const userExists = await User.findOne({ email });
    return userExists;
  }

  async create(body) {
    const User = this.mongoose.model('User');

    const hashedPass = await this.hashPassword(body.password);
    const user = new User({ ...body, password: hashedPass });
    const newUser = await user.save();

    const { password, ...rest } = newUser._doc;
    return rest;
  }
}

module.exports = AuthRepository;
