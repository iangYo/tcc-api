class TestimonialRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async create(body) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonial = new Testimonial({ ...body });
    await testimonial.save();
  }
}

module.exports = TestimonialRepository;
