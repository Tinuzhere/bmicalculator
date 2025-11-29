import { Link } from 'react-router';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';

export default function UnderstandingBMI() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        <article className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-6 transition-colors animate-slide-up"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8 animate-slide-up">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                Health Basics
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 20, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Understanding BMI: A Comprehensive Guide to Body Mass Index
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Body Mass Index (BMI) is one of the most widely used health metrics in the world. Whether you're visiting your doctor, starting a fitness program, or simply curious about your health status, you've likely encountered this measurement. But what exactly is BMI, how is it calculated, and what does it really tell us about our health?
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop" 
              alt="Understanding BMI"
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                What Is BMI?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Body Mass Index, commonly known as BMI, is a numerical value calculated from a person's weight and height. Developed in the 19th century by Belgian mathematician Adolphe Quetelet, BMI provides a simple, quick assessment of body fat based on height and weight that applies to adult men and women.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The BMI formula is straightforward: it's your weight in kilograms divided by the square of your height in meters. In mathematical terms, this is expressed as BMI = kg/m². For those using imperial measurements, the formula is: BMI = (weight in pounds × 703) / (height in inches)².
              </p>
              <p className="text-gray-700 leading-relaxed">
                This standardized measurement allows healthcare providers to quickly categorize individuals into weight categories that may indicate potential health risks. It's used worldwide as a screening tool to identify individuals who may be underweight, at a healthy weight, overweight, or obese.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                The History and Purpose of BMI
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BMI wasn't originally designed as a health metric. Adolphe Quetelet created it in the 1830s and 1840s as part of his work in social physics, attempting to define the characteristics of the "average man." It wasn't until the 1970s that researcher Ancel Keys popularized the term "Body Mass Index" and proposed it as a useful tool for studying obesity in populations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The medical community adopted BMI because it offered several advantages: it's easy to calculate, requires only basic measurements (height and weight), doesn't need expensive equipment, and can be used to compare populations across different countries and time periods. These practical benefits made it an ideal tool for large-scale health studies and public health initiatives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, BMI is used by healthcare providers, insurance companies, researchers, and individuals as a quick screening tool. It helps identify people who may be at increased risk for health problems related to weight, from malnutrition and osteoporosis on the low end to cardiovascular disease and diabetes on the high end.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                BMI Categories and What They Mean
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The World Health Organization (WHO) and most health organizations worldwide use standard BMI categories to classify weight status. Understanding these categories can help you interpret your BMI results:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Underweight (BMI below 18.5)</h3>
                  <p className="text-gray-700">
                    A BMI below 18.5 suggests that a person may be underweight, which can indicate malnutrition, eating disorders, or other health issues. Being underweight can lead to weakened immune function, osteoporosis, fertility problems, and increased vulnerability to illness. If your BMI falls in this range, it's important to consult with a healthcare provider to identify any underlying causes and develop a plan to reach a healthier weight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Normal Weight (BMI 18.5-24.9)</h3>
                  <p className="text-gray-700">
                    A BMI in this range is generally considered healthy and is associated with the lowest risk of weight-related health problems. People with BMIs in this range typically have a lower risk of developing conditions like heart disease, type 2 diabetes, and certain cancers. However, it's important to remember that BMI is just one health indicator, and maintaining a healthy lifestyle through proper nutrition and regular exercise is crucial regardless of your BMI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                  <h3 className="text-xl font-bold text-orange-900 mb-2">Overweight (BMI 25-29.9)</h3>
                  <p className="text-gray-700">
                    A BMI in this range indicates that a person may be carrying excess weight, which can increase the risk of various health conditions. However, being in the overweight category doesn't automatically mean poor health. Some people in this range are metabolically healthy and active. That said, maintaining a BMI in the overweight range over time can increase risks for cardiovascular disease, type 2 diabetes, sleep apnea, and joint problems. Lifestyle modifications focusing on balanced nutrition and increased physical activity can help move toward a healthier weight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100">
                  <h3 className="text-xl font-bold text-red-900 mb-2">Obese (BMI 30 and above)</h3>
                  <p className="text-gray-700">
                    A BMI of 30 or higher indicates obesity, which is associated with significantly increased health risks. Obesity is further divided into three classes: Class I (BMI 30-34.9), Class II (BMI 35-39.9), and Class III (BMI 40 or higher, sometimes called severe or morbid obesity). People in these categories face higher risks for serious health conditions including heart disease, stroke, type 2 diabetes, certain cancers, liver disease, kidney disease, and respiratory problems. Medical intervention, lifestyle changes, and sometimes bariatric surgery may be recommended to improve health outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                The Limitations of BMI
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While BMI is a useful screening tool, it's important to understand its limitations. BMI doesn't directly measure body fat or distinguish between muscle mass and fat mass. This can lead to misclassification in certain populations:
              </p>
              
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Athletes and muscular individuals:</strong> Muscle weighs more than fat, so people with high muscle mass may have a high BMI despite having low body fat. A bodybuilder or professional athlete might be classified as overweight or obese based on BMI alone, even though they're in excellent physical condition.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Elderly individuals:</strong> Older adults often lose muscle mass as they age (sarcopenia), so they might have a "normal" BMI while actually having excess body fat and insufficient muscle mass.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Different ethnicities:</strong> Research has shown that the health risks associated with different BMI levels can vary by ethnicity. For example, Asian populations may face increased health risks at lower BMI levels than Caucasian populations.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Gender differences:</strong> Women typically have more body fat than men at the same BMI. The formula doesn't account for these natural differences in body composition.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Fat distribution:</strong> BMI doesn't indicate where body fat is located. Visceral fat (fat around organs) is more dangerous than subcutaneous fat (fat under the skin), but BMI can't distinguish between them.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Because of these limitations, BMI should be used as one tool among many when assessing health. Healthcare providers often use additional measurements like waist circumference, body fat percentage, blood pressure, blood sugar levels, and cholesterol levels to get a complete picture of a person's health status.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                How to Use BMI Effectively
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite its limitations, BMI remains a valuable tool when used appropriately. Here's how to make the most of your BMI information:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Use it as a starting point</h3>
                  <p className="text-gray-700">
                    Think of BMI as an initial screening tool rather than a definitive diagnosis. If your BMI suggests you might be at risk, use that information to have a more detailed conversation with your healthcare provider about your overall health.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Track trends over time</h3>
                  <p className="text-gray-700">
                    Rather than focusing on a single BMI measurement, track how your BMI changes over time. Trends can be more informative than individual readings and can help you see if your lifestyle changes are having the desired effect.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consider it alongside other metrics</h3>
                  <p className="text-gray-700">
                    Combine BMI with other measurements and health indicators. Waist circumference, waist-to-hip ratio, body fat percentage, blood pressure, cholesterol levels, and blood sugar can provide a more complete health picture.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Focus on overall health, not just numbers</h3>
                  <p className="text-gray-700">
                    Remember that health is multidimensional. Regular physical activity, balanced nutrition, adequate sleep, stress management, and strong social connections all contribute to wellbeing regardless of your BMI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consult with professionals</h3>
                  <p className="text-gray-700">
                    If you're concerned about your BMI or weight, talk to healthcare providers who can assess your individual situation. They can help you understand what your BMI means in the context of your overall health and develop personalized strategies for improvement if needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-emerald-200 mb-8 animate-scale-in">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BMI is a useful and accessible tool for assessing weight status and identifying potential health risks at a population level. Its simplicity makes it valuable for screening large groups of people and tracking weight trends over time. However, it's crucial to understand that BMI is just one piece of the health puzzle.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your BMI number doesn't define your health or worth as a person. It's a screening tool that, when interpreted correctly and combined with other health assessments, can help guide conversations about health and wellness. Whether your BMI is in the "normal" range or not, focusing on healthy behaviors like eating nutritious foods, staying physically active, managing stress, and getting regular check-ups is what truly matters for long-term health.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you're concerned about your weight or health, the best step is to consult with qualified healthcare professionals who can provide personalized advice based on your complete health profile, not just a single number. Remember, health is a journey, not a destination, and every positive step you take matters.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 text-center animate-scale-in">
            <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Calculate Your BMI Now</h3>
            <p className="text-white/90 mb-6">
              Use our free BMI calculator to check your body mass index and get personalized health insights.
            </p>
            <Link 
              to="/"
              className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Go to Calculator
            </Link>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between animate-fade-in">
            <div className="text-sm text-gray-600">
              Share this article:
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
