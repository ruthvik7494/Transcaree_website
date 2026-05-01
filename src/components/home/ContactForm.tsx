import { useState } from 'react';

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);

    // Replace YOUR_ACCESS_KEY_HERE with the actual key from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="contact-us">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Contact Info */}
          <div className="bg-secondary text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8 md:mb-12">
                Have a question or need a custom quote? Fill out the form and our team will get back to you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Email Us</p>
                    <p className="font-bold break-all sm:break-normal text-sm sm:text-base">support@transcarrier.in</p>
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
          <div className="p-8 md:p-12 md:w-3/5">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    name="phone"
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select name="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white">
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
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "loading"}
                className={`w-full bg-primary hover:bg-secondary text-secondary hover:text-white font-black py-4 rounded-lg uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <div className={`text-center p-3 rounded-lg text-sm font-bold ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
