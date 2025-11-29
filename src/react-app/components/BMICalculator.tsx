import { useState } from 'react';
import { Calculator, Smile, Meh, Frown, TrendingUp, Activity } from 'lucide-react';

interface BMIResult {
  bmi: number;
  category: string;
  description: string;
  color: string;
  emoji: 'happy' | 'normal' | 'sad';
  bgGradient: string;
  tips: string[];
}

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (!heightInMeters || !weightInKg || heightInMeters <= 0 || weightInKg <= 0) {
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for animation effect
    setTimeout(() => {
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      const roundedBMI = Math.round(bmi * 10) / 10;

      let category = '';
      let description = '';
      let color = '';
      let emoji: 'happy' | 'normal' | 'sad' = 'normal';
      let bgGradient = '';

      let tips: string[] = [];

      if (roundedBMI < 18.5) {
        category = 'Underweight';
        description = 'You may need to gain some weight. Consider consulting a healthcare professional for personalized advice.';
        color = 'text-blue-600';
        emoji = 'sad';
        bgGradient = 'from-blue-50 to-cyan-50';
        tips = [
          'Increase calorie intake with nutrient-dense foods like nuts, seeds, avocados, and whole grains',
          'Eat more frequently with 5-6 smaller meals throughout the day instead of 3 large ones',
          'Include protein-rich foods like lean meats, fish, eggs, legumes, and dairy products',
          'Add strength training exercises to build muscle mass',
          'Consider adding healthy fats like olive oil, nut butters, and fatty fish to your diet',
          'Stay hydrated but avoid drinking large amounts before meals',
          'Consult a healthcare provider to rule out underlying health conditions'
        ];
      } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
        category = 'Normal Weight';
        description = 'Great job! You are in a healthy weight range. Keep maintaining your healthy lifestyle.';
        color = 'text-emerald-600';
        emoji = 'happy';
        bgGradient = 'from-emerald-50 to-teal-50';
        tips = [
          'Maintain your current healthy eating habits with balanced meals',
          'Continue regular physical activity - aim for at least 150 minutes of moderate exercise per week',
          'Stay hydrated by drinking 8-10 glasses of water daily',
          'Get 7-9 hours of quality sleep each night',
          'Practice stress management through meditation, yoga, or other relaxation techniques',
          'Schedule regular health check-ups and screenings',
          'Keep your diet varied with plenty of fruits, vegetables, whole grains, and lean proteins'
        ];
      } else if (roundedBMI >= 25 && roundedBMI < 30) {
        category = 'Overweight';
        description = 'You may benefit from a balanced diet and regular exercise. Consider consulting a healthcare professional.';
        color = 'text-orange-600';
        emoji = 'normal';
        bgGradient = 'from-orange-50 to-amber-50';
        tips = [
          'Reduce portion sizes and practice mindful eating',
          'Increase physical activity - start with 30 minutes of walking daily and gradually increase',
          'Cut back on processed foods, sugary drinks, and excessive snacking',
          'Fill half your plate with vegetables and fruits at each meal',
          'Choose whole grains over refined carbohydrates',
          'Limit alcohol consumption as it adds empty calories',
          'Track your food intake and physical activity to stay accountable',
          'Aim for gradual weight loss of 1-2 pounds per week for sustainable results'
        ];
      } else {
        category = 'Obese';
        description = 'It is recommended to consult with a healthcare professional for personalized guidance on achieving a healthier weight.';
        color = 'text-red-600';
        emoji = 'sad';
        bgGradient = 'from-red-50 to-rose-50';
        tips = [
          'Consult with a healthcare provider or registered dietitian for a personalized weight loss plan',
          'Start with small, achievable goals - even 5-10% weight loss can improve health significantly',
          'Begin with low-impact exercises like swimming, cycling, or walking',
          'Focus on whole, unprocessed foods and eliminate sugary beverages',
          'Consider joining a support group or working with a behavioral therapist',
          'Get screened for related health conditions like diabetes, high blood pressure, and sleep apnea',
          'Prioritize sleep and stress management as they affect weight',
          'Be patient - sustainable weight loss takes time and consistency'
        ];
      }

      setResult({
        bmi: roundedBMI,
        category,
        description,
        color,
        emoji,
        bgGradient,
        tips
      });
      setIsCalculating(false);
    }, 800);
  };

  const getEmojiIcon = () => {
    if (!result) return null;
    
    const iconClass = "w-16 h-16 transition-all duration-500 animate-scale-in";
    
    switch (result.emoji) {
      case 'happy':
        return <Smile className={`${iconClass} text-emerald-500 animate-float`} />;
      case 'normal':
        return <Meh className={`${iconClass} text-orange-500 animate-pulse-soft`} />;
      case 'sad':
        return <Frown className={`${iconClass} text-red-500`} />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform transition-all duration-500 hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)] hover:scale-[1.02] border border-emerald-100/50 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/50 opacity-50 pointer-events-none"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6 animate-slide-up">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow transform transition-all duration-300 hover:rotate-12 hover:scale-110">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                BMI Calculator
              </h2>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Activity className="w-3 h-3" />
                <span>Track your health metrics</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                Height (cm)
              </label>
              <input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in cm"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-emerald-300"
              />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                Weight (kg)
              </label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-emerald-300"
              />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    gender === 'male'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg glow transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    gender === 'female'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg glow transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={calculateBMI}
            disabled={isCalculating}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed animate-gradient relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isCalculating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" />
                  Calculate BMI
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {result && (
            <div className={`mt-8 p-6 bg-gradient-to-br ${result.bgGradient} rounded-2xl border-2 border-white/50 shadow-xl animate-scale-in backdrop-blur-sm`}>
              <div className="flex flex-col items-center text-center gap-4">
                {getEmojiIcon()}
                
                <div className="animate-slide-up">
                  <div className="text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-2 animate-pulse-soft">
                    {result.bmi}
                  </div>
                  <div className={`text-2xl font-bold ${result.color} mb-3 animate-slide-up`} style={{ animationDelay: '0.2s' }}>
                    {result.category}
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    {result.description}
                  </p>
                </div>

                {/* Health Tips Section */}
                <div className="w-full mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 mb-4 justify-center">
                    <Activity className={`w-5 h-5 ${result.color}`} />
                    <h3 className={`text-lg font-bold ${result.color}`}>
                      Health Insights & Tips
                    </h3>
                  </div>
                  <div className="space-y-3 text-left max-w-2xl mx-auto">
                    {result.tips.map((tip, index) => (
                      <div 
                        key={index}
                        className="flex gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] border border-white/50 animate-slide-up"
                        style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                      >
                        <div className={`mt-1 w-2 h-2 rounded-full ${result.color.replace('text-', 'bg-')} flex-shrink-0`}></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
