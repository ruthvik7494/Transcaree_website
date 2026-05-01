

const ContactForm = () => {
  return (
    <section className="section-padding bg-gray-50" id="contact-us">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Contact Info */}
          <div className="bg-secondary text-white p-12 md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-12">
                Have a question or need a custom quote? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Email Us</p>
                    <p className="font-bold">support@transcarrier.in</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">
                © 2026 Trans Carrier Logistics
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-12 md:w-3/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white">
                    <option>General Inquiry</option>
                    <option>Request a Quote</option>
                    <option>Partnership</option>
                    <option>Support</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-secondary hover:text-white font-black py-4 rounded-lg uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
