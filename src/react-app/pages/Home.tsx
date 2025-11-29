import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import BMICalculator from '@/react-app/components/BMICalculator';
import AdPlaceholder from '@/react-app/components/AdPlaceholder';
import { Activity, TrendingUp, Heart, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="text-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full animate-pulse-soft">
              <Heart className="w-4 h-4 text-emerald-600 animate-float" />
              <span className="text-sm font-semibold text-emerald-700">Track Your Health Journey</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Free BMI Calculator
              </span>
              <br />
              <span className="text-gray-800">Check Your Body Mass Index</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Calculate your BMI instantly and get personalized health insights based on your height and weight.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                <TrendingUp className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-gray-700">100% Free</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                <Activity className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-gray-700">Health Insights</span>
              </div>
            </div>
          </div>

          {/* Top Ad Space */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <AdPlaceholder position="top" />
          </div>

          {/* Calculator Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <BMICalculator />
            </div>
            
            {/* Sidebar Ad Space */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="sticky top-24">
                <AdPlaceholder position="sidebar" />
              </div>
            </div>
          </div>

          {/* Bottom Ad Space */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <AdPlaceholder position="bottom" />
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* What is BMI */}
            <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  What is BMI?
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                BMI (Body Mass Index) is a numerical value derived from an individual's height and weight. It is widely used as a screening tool to categorize individuals into different weight categories, which can indicate potential health risks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While BMI is a useful indicator for most people, it's important to note that it doesn't directly measure body fat. Factors like muscle mass, bone density, and overall body composition should also be considered when evaluating health status.
              </p>
            </section>

            {/* How to Calculate BMI */}
            <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-slide-up">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                How to Calculate BMI?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Calculating BMI is straightforward. The formula is:
              </p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-4 rounded-lg mb-4 shadow-inner">
                <p className="font-mono text-lg text-gray-800">
                  BMI = Weight (kg) ÷ Height² (m²)
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                For example, if you weigh 70 kg and your height is 170 cm (1.7 m), your BMI would be:
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg mb-4 shadow-inner border border-gray-200">
                <p className="font-mono text-gray-800">
                  70 ÷ (1.7 × 1.7) = 70 ÷ 2.89 = 24.2
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our calculator does this automatically for you - just enter your height in centimeters and weight in kilograms, and we'll provide your BMI along with its category and health insights.
              </p>
            </section>

            {/* BMI Chart */}
            <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-slide-up">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                BMI Chart for Adults
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">BMI Range</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Category</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Health Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-blue-50 transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                      <td className="py-4 px-4 text-gray-700 font-medium">Below 18.5</td>
                      <td className="py-4 px-4 font-bold text-blue-600">Underweight</td>
                      <td className="py-4 px-4 text-gray-600">Malnutrition, osteoporosis</td>
                    </tr>
                    <tr className="hover:bg-emerald-50 transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                      <td className="py-4 px-4 text-gray-700 font-medium">18.5 - 24.9</td>
                      <td className="py-4 px-4 font-bold text-emerald-600">Normal Weight</td>
                      <td className="py-4 px-4 text-gray-600">Low risk</td>
                    </tr>
                    <tr className="hover:bg-orange-50 transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                      <td className="py-4 px-4 text-gray-700 font-medium">25.0 - 29.9</td>
                      <td className="py-4 px-4 font-bold text-orange-600">Overweight</td>
                      <td className="py-4 px-4 text-gray-600">Enhanced risk</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                      <td className="py-4 px-4 text-gray-700 font-medium">30.0 and above</td>
                      <td className="py-4 px-4 font-bold text-red-600">Obese</td>
                      <td className="py-4 px-4 text-gray-600">High risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Note: BMI categories may vary slightly based on age, gender, and ethnicity. Always consult with a healthcare professional for personalized health advice.
              </p>
            </section>

            {/* FAQs */}
            <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-slide-up">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Is BMI accurate for everyone?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    BMI is a useful screening tool for most adults, but it has limitations. It may not accurately reflect body composition for athletes with high muscle mass, pregnant women, elderly individuals, or people with certain medical conditions. It's best used as a general guide alongside other health assessments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    What should I do if my BMI is outside the normal range?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If your BMI indicates you're underweight, overweight, or obese, consider consulting with a healthcare professional or registered dietitian. They can provide personalized advice based on your overall health, lifestyle, and individual circumstances to help you achieve a healthier weight safely.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    How often should I check my BMI?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For most people, checking BMI every few months is sufficient to track general trends. If you're actively working on weight management, monthly checks can help monitor progress. However, remember that BMI is just one health metric, and other factors like body composition, fitness level, and overall well-being are equally important.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Does gender affect BMI calculation?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The BMI formula itself is the same for both males and females. However, men and women typically have different body compositions at the same BMI value. Women generally have more body fat than men at the same BMI. This is why healthcare providers consider gender when interpreting BMI results.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Can children use this BMI calculator?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    This calculator is designed for adults aged 18 and over. Children and teenagers require different BMI calculations that account for age and sex, using growth charts with percentiles. If you need to calculate BMI for a child, please consult with a pediatrician who can properly assess their growth and development.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
