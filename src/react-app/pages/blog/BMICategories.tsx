import { Link } from 'react-router';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp } from 'lucide-react';

export default function BMICategories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        <article className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-6 transition-colors animate-slide-up"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8 animate-slide-up">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                BMI Basics
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 18, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min read
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              BMI Weight Categories Explained: What Your Number Really Means
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your BMI number is just the beginning. Understanding which category you fall into and what it means for your health is crucial for making informed decisions about your wellness journey. This comprehensive guide breaks down each BMI category, the associated health implications, and actionable steps you can take.
            </p>
          </header>

          <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop" 
              alt="BMI Categories"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                The Standard BMI Categories
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The World Health Organization (WHO) has established standardized BMI categories that are used globally by healthcare professionals, researchers, and public health organizations. These categories help identify individuals who may be at increased risk for various health conditions based on their weight relative to their height.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While these categories provide useful guidelines, it's important to remember that they represent general population trends and may not perfectly apply to every individual. Factors such as age, gender, ethnicity, muscle mass, and overall health should all be considered when interpreting BMI results.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Underweight: BMI Below 18.5
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Health Risks Associated with Being Underweight</h3>
                <p className="text-gray-700 mb-4">
                  Being underweight can be just as concerning as being overweight, though it often receives less attention. When your BMI falls below 18.5, you may be at increased risk for several health problems:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Weakened immune system:</strong> Insufficient body weight can compromise your immune function, making you more susceptible to infections and illnesses.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Osteoporosis:</strong> Low body weight is associated with decreased bone density, increasing the risk of fractures and osteoporosis, particularly in women.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Malnutrition:</strong> Being underweight often indicates insufficient caloric intake or nutrient deficiencies, which can affect every system in your body.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Fertility issues:</strong> Low body weight can disrupt hormonal balance and menstrual cycles in women, potentially affecting fertility.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Anemia:</strong> Insufficient dietary intake can lead to iron deficiency and other forms of anemia.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Steps to Reach a Healthier Weight</h3>
                <p className="text-gray-700 mb-3">
                  If you're underweight, gaining weight in a healthy way is important. Here are evidence-based strategies:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Eat more frequently with nutrient-dense foods including nuts, seeds, avocados, whole grains, and lean proteins</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Include healthy fats and complex carbohydrates in your diet to increase caloric intake</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engage in strength training to build muscle mass rather than just fat</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consult with a registered dietitian or healthcare provider to rule out underlying health conditions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Normal Weight: BMI 18.5-24.9
              </h2>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">The Healthy Range</h3>
                <p className="text-gray-700 mb-4">
                  A BMI between 18.5 and 24.9 is considered the healthy or normal weight range. People in this category generally have the lowest risk of weight-related health problems. Research shows that maintaining a BMI in this range is associated with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Lower disease risk:</strong> Reduced likelihood of developing cardiovascular disease, type 2 diabetes, and certain cancers</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Better metabolic health:</strong> Improved insulin sensitivity and healthier blood lipid profiles</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Enhanced mobility:</strong> Easier physical activity and reduced stress on joints</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Longevity:</strong> Studies suggest people with BMIs in this range tend to live longer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintaining a Healthy Weight</h3>
                <p className="text-gray-700 mb-3">
                  If you're in the normal weight range, focus on maintenance through healthy lifestyle habits:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continue eating a balanced diet rich in fruits, vegetables, whole grains, and lean proteins</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Stay physically active with at least 150 minutes of moderate exercise per week</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monitor your weight periodically to catch any significant changes early</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Practice stress management and get adequate sleep</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                Overweight: BMI 25-29.9
              </h2>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Understanding the Overweight Category</h3>
                <p className="text-gray-700 mb-4">
                  A BMI between 25 and 29.9 places you in the overweight category. This doesn't mean you're unhealthy, but it does indicate an increased risk for certain health conditions. Many people in this range are metabolically healthy, especially if they're physically active and have good muscle mass. However, the health risks include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Cardiovascular disease:</strong> Increased risk of high blood pressure, heart disease, and stroke</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Type 2 diabetes:</strong> Higher likelihood of developing insulin resistance and diabetes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Sleep apnea:</strong> Excess weight can contribute to breathing problems during sleep</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Joint problems:</strong> Extra weight puts additional stress on joints, particularly knees and hips</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Certain cancers:</strong> Slightly elevated risk for some types of cancer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Moving Toward a Healthier Weight</h3>
                <p className="text-gray-700 mb-3">
                  Even modest weight loss of 5-10% can significantly improve health markers. Consider these approaches:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Create a moderate caloric deficit through balanced nutrition rather than extreme dieting</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Increase physical activity gradually, combining cardio and strength training</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Focus on sustainable lifestyle changes rather than quick fixes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Track your progress with measurements beyond just weight, such as how you feel and your fitness improvements</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Seek support from healthcare providers, nutritionists, or support groups</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Obese: BMI 30 and Above
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-red-900 mb-3">Classifications of Obesity</h3>
                <p className="text-gray-700 mb-4">
                  Obesity is further divided into three classes based on BMI:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Class I (BMI 30-34.9):</strong> Moderate obesity with moderately increased health risks</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Class II (BMI 35-39.9):</strong> Severe obesity with significantly elevated health risks</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Class III (BMI 40+):</strong> Very severe or morbid obesity with extremely high health risks</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-red-900 mb-3 mt-6">Serious Health Risks</h3>
                <p className="text-gray-700 mb-4">
                  Obesity is associated with numerous serious health conditions:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Heart disease and stroke:</strong> Significantly elevated risk of cardiovascular events</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Type 2 diabetes:</strong> Very high likelihood of developing diabetes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Certain cancers:</strong> Increased risk of colorectal, breast, endometrial, and other cancers</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Liver disease:</strong> Higher risk of non-alcoholic fatty liver disease</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Kidney disease:</strong> Increased risk of chronic kidney disease</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Respiratory problems:</strong> Sleep apnea, asthma, and breathing difficulties</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Mental health issues:</strong> Higher rates of depression and anxiety</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Treatment and Management Options</h3>
                <p className="text-gray-700 mb-3">
                  Managing obesity often requires comprehensive medical support:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Work with healthcare providers to develop a comprehensive weight loss plan</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consider medically supervised weight loss programs</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Explore medication options if lifestyle changes aren't sufficient</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>For Class II and III obesity, bariatric surgery may be an option to consider</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Address underlying psychological factors with mental health support</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Join support groups to connect with others facing similar challenges</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-emerald-200 mb-8 animate-scale-in">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Important Reminders
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While BMI categories provide useful general guidelines, remember that:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>BMI is a screening tool, not a diagnostic tool</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Individual health varies greatly within each category</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Other factors like waist circumference, body composition, and overall fitness matter</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gradual, sustainable changes are more effective than drastic measures</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional medical guidance is essential for safe and effective weight management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 text-center animate-scale-in">
            <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Check Your BMI Category</h3>
            <p className="text-white/90 mb-6">
              Use our free calculator to find out where you fall and get personalized health insights.
            </p>
            <Link 
              to="/"
              className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Calculate Now
            </Link>
          </div>

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
