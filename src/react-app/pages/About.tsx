import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { Activity, Target, Users, Heart, Award, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
              <Heart className="w-4 h-4 text-emerald-600 animate-pulse-soft" />
              <span className="text-sm font-semibold text-emerald-700">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              About BMI Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering individuals worldwide to take control of their health journey through accessible, accurate BMI calculations and personalized health insights.
            </p>
          </div>

          {/* Who We Are */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Who We Are
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                BMI Calculator is a dedicated health and wellness platform committed to making health monitoring accessible to everyone. We are a team of health enthusiasts, developers, and wellness advocates who believe that understanding your body is the first step toward a healthier lifestyle.
              </p>
              <p>
                Our platform was built on the principle that everyone deserves access to reliable health tools without barriers. Whether you're embarking on a fitness journey, monitoring your health, or simply curious about your body mass index, we're here to provide you with accurate, instant results and valuable insights.
              </p>
              <p>
                We understand that health is personal and multifaceted. That's why we've designed our BMI calculator to be not just a tool, but a comprehensive resource that educates, informs, and empowers you to make better health decisions.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What We Do
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Our platform offers a comprehensive suite of health-focused features designed to support your wellness journey:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Instant BMI Calculation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get your Body Mass Index calculated in seconds with our user-friendly, scientifically accurate calculator.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Personalized Insights
                  </h3>
                  <p className="text-sm text-gray-600">
                    Receive tailored health insights and actionable tips based on your specific BMI category.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Educational Resources
                  </h3>
                  <p className="text-sm text-gray-600">
                    Access comprehensive guides, articles, and FAQs to understand BMI and overall health better.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Privacy-First Approach
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your health data stays with you. We don't store personal information or track your calculations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why We Created This */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Why We Created This
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The idea for BMI Calculator was born from a simple observation: while health awareness is growing globally, many people still lack easy access to basic health monitoring tools. We noticed that calculating BMI often required complicated formulas, confusing charts, or downloading apps with questionable privacy practices.
              </p>
              <p>
                We created this platform to bridge that gap. Our mission is to democratize health awareness by providing a free, accurate, and privacy-respecting tool that anyone can use, anywhere, anytime. We believe that when people have access to information about their health, they're empowered to make better decisions.
              </p>
              <p>
                Beyond just numbers, we wanted to create an educational resource. Understanding what your BMI means, how it relates to your overall health, and what steps you can take to improve your wellness are all crucial components of a healthy lifestyle. That's why we've invested in creating comprehensive guides, tips, and insights that go beyond simple calculation.
              </p>
              <p>
                Our vision extends beyond BMI calculation. We aim to be a trusted companion in your health journey, providing reliable information, encouraging healthy habits, and supporting you every step of the way toward your wellness goals.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Our Core Values
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-700">
                  Health tools should be available to everyone, free of charge, without complicated sign-ups or hidden fees. We're committed to keeping our service 100% free and accessible.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-gray-700">
                  We use scientifically validated formulas and provide information based on established medical guidelines. Your health deserves nothing less than precise, reliable data.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy</h3>
                <p className="text-gray-700">
                  Your personal health information is sacred. We don't store your calculations, track your usage beyond basic analytics, or sell your data to third parties.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-700">
                  Knowledge is power when it comes to health. We strive to educate our users about BMI, healthy living, and wellness through comprehensive, easy-to-understand content.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Improvement</h3>
                <p className="text-gray-700">
                  We're always listening to our users and looking for ways to enhance our platform. Your feedback helps us build better tools and provide more value.
                </p>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Our Commitment to You
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We're committed to being your trusted partner in health and wellness. This means:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Providing accurate, scientifically-backed health information that you can trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintaining the highest standards of privacy and data protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuously improving our tools based on the latest health research and user feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Keeping our service free and accessible to everyone, everywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Creating educational content that empowers you to make informed health decisions</span>
                </li>
              </ul>
              <p className="mt-6">
                Thank you for choosing BMI Calculator as part of your health journey. Together, we can work toward a healthier, happier future.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
