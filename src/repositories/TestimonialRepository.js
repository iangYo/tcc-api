class TestimonialRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async index(limit, page) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonials = await Testimonial.find()
      .limit(limit)
      .skip((page - 1) * limit);

    return testimonials;
  }

  async create(body) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonial = new Testimonial({ ...body });
    await testimonial.save();
  }
}

module.exports = TestimonialRepository;
