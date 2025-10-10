import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent(`${formData.subject} - CHANAFARM Inquiry`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Category: ${formData.category}

Message:
${formData.message}

---
This message was sent from the CHANAFAM INVESTMENT website contact form.`
    );

    // Open default email client
    window.location.href = `mailto:info@chanafarm.com?subject=${emailSubject}&body=${emailBody}`;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Juja Farm', 'Kiambu County', 'Kenya'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 799 063 452', '+254 106 713 487', '+254 726 495 237'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@chanafarm.com', 'sales@chanafarm.com'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Sat: 7:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'text-orange-600'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'delivery', label: 'Delivery Services' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'custom', label: 'Custom Services' },
    { value: 'complaint', label: 'Complaints' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Hero%201%20-%20Copy%20-%20Copy%20-%20Copy.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Get in touch with our expert team for quotes, questions, or project consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-200 animate-bounce-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${info.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-full flex items-center justify-center mx-auto mb-4 animate-rotate-in`}>
                  <info.icon size={32} className={info.color} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Your email client should have opened. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                        >
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors resize-vertical"
                        placeholder="Please provide details about your inquiry, project requirements, or any specific questions you have..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                    >
                      Send Message
                      <Send size={20} className="ml-2" />
                    </button>

                    <p className="text-sm text-gray-600">
                      * Required fields. We typically respond within 24 hours during business days.
                    </p>
                  </form>
                )}
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Location</h2>
                <p className="text-gray-600 mb-6">
                  Visit our showroom and warehouse to see our extensive product range and 
                  speak with our knowledgeable staff.
                </p>

                {/* Location Image */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 relative overflow-hidden animate-fade-in-up">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63823.9319308017!2d37.00918522167967!3d-1.163472700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4375959c8c8b%3A0x2c0a002ea755b731!2sChana%20Farm%20Investment!5e0!3m2!1sen!2ske!4v1760103369284!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                  title="CHANAFAM INVESTMENT Location"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">CHANAFAM INVESTMENT</h3>
                <p className="text-sm">Juja Farm, Kiambu County</p>
                </div> 
            </div>

                {/* Quick Contact Options */}
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Need Immediate Assistance?</h3>
                    <p className="text-gray-700 mb-3">Call us directly for urgent inquiries or immediate quotes:</p>
                    <a
                      href="tel:+254 106 713 487"
                      className="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-500 transition-colors"
                    >
                      <Phone size={16} className="mr-2" />
                      +254 106 713 487
                    </a>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-700 mb-3">For detailed inquiries and file attachments:</p>
                    <a
                      href="mailto:info@chanafarm.com"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      <Mail size={16} className="mr-2" />
                      info@chanafarm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  question: 'What are your delivery charges?',
                  answer: 'Delivery charges vary by location and order size. We offer free delivery for orders over $500 within our main service area.'
                },
                {
                  question: 'Do you offer bulk pricing?',
                  answer: 'Yes, we provide competitive bulk pricing for large orders. Contact our sales team for custom quotes.'
                },
                {
                  question: 'Can you custom cut materials?',
                  answer: 'Absolutely! We offer custom cutting services for steel, lumber, and other materials to your specifications.'
                },
                {
                  question: 'What is your return policy?',
                  answer: 'We accept returns within 30 days for unused materials in original packaging. Custom-cut materials may have restrictions.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
