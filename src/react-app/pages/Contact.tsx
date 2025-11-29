import { useState } from 'react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { Mail, User, MessageSquare, Send, CheckCircle, Sparkles, Heart } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Create mailto link with pre-filled content
    const recipientEmail = 'tinuzhere@gmail.com';
    const subject = encodeURIComponent('Message from BMI Calculator Website');
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `---\n` +
      `This message was sent from the BMI Calculator contact form.`
    );
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md w-full text-center animate-scale-in">
            <div className="mb-6 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl glow-strong">
                <CheckCircle className="w-14 h-14 text-white animate-float" />
              </div>
            </div>
            
            <div className="mb-2 flex justify-center gap-2">
              <Sparkles className="w-6 h-6 text-emerald-500 animate-float" />
              <Heart className="w-6 h-6 text-red-500 animate-pulse-soft" />
              <Sparkles className="w-6 h-6 text-teal-500 animate-float-delayed" />
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-slide-up">
              Email Client Opened!
            </h2>
            <p className="text-lg text-gray-600 mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Your default email application should now be open.
            </p>
            <p className="text-base text-gray-500 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Please check your email client and click send to complete your message. If it didn't open, please check your browser settings.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-gradient animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Send Another Message
            </button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse-soft" />
              <span className="text-sm font-semibold text-emerald-700">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Share your thoughts, questions, or feedback with us. Fill out the form and your email client will open with your message ready to send!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 border border-emerald-100/50 transform transition-all duration-500 hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)] animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span>Your Name</span>
                  </div>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-emerald-300"
                  required
                />
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span>Your Email Address</span>
                  </div>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-emerald-300"
                  required
                />
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <span>Your Message</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm hover:border-emerald-300"
                  required
                />
              </div>

              {error && (
                <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl text-red-600 text-sm font-medium animate-scale-in flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 animate-gradient animate-slide-up relative overflow-hidden group"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Open Email to Send
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          <div className="mt-8 text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-gray-500">
              📧 Your email client will open with the message pre-filled
            </p>
            <p className="text-xs text-gray-400">
              Make sure you have a default email application configured on your device
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
