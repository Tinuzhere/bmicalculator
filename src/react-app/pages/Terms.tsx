import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { FileText, AlertTriangle, Scale, UserCheck, Shield } from 'lucide-react';

export default function Terms() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

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
              <FileText className="w-4 h-4 text-emerald-600 animate-pulse-soft" />
              <span className="text-sm font-semibold text-emerald-700">Legal Terms</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last updated: {currentDate}
            </p>
          </div>

          {/* Introduction */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to BMI Calculator. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these Terms carefully before using our website. Your continued use of the website constitutes your acceptance of these Terms and any future amendments.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Acceptance of Terms
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By accessing and using BMI Calculator, you accept and agree to be bound by the terms and provisions of this agreement. Additionally, when using our website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
              <p>
                If you do not agree to these Terms, you must immediately stop using our website and services.
              </p>
            </div>
          </section>

          {/* Use of Service */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Use of Service
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our BMI Calculator service is provided free of charge for personal, non-commercial use. You agree to use the service only for lawful purposes and in accordance with these Terms.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">You agree not to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use the website in any way that violates any applicable national or international law or regulation</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Exploit, harm, or attempt to exploit or harm minors in any way</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transmit any advertising or promotional material without our prior written consent</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Impersonate or attempt to impersonate BMI Calculator, our employees, other users, or any other person or entity</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use any robot, spider, or other automatic device to access the website for any purpose</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Attempt to gain unauthorized access to any portion of the website or any systems or networks connected to it</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Medical Disclaimer
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-5">
                <p className="font-semibold text-red-900 mb-3">IMPORTANT NOTICE:</p>
                <p className="mb-3">
                  The BMI Calculator and all information provided on this website are for informational and educational purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="mb-3">
                  BMI is a screening tool and should not be used as a diagnostic tool. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or health objectives.
                </p>
                <p>
                  Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
                </p>
              </div>
              
              <p>
                The calculations, results, and health insights provided by our BMI Calculator are based on standard formulas and general health guidelines. Individual health needs vary, and what may be appropriate for one person may not be suitable for another.
              </p>
              
              <p>
                We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Intellectual Property Rights
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The website and its original content, features, and functionality are owned by BMI Calculator and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You may store files that are automatically cached by your web browser for display enhancement purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use</span>
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              User Responsibilities
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a user of our website, you are responsible for:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ensuring that all information you provide is accurate, current, and complete</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintaining the security of your device and internet connection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Understanding that BMI is just one health metric and should be considered alongside other factors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consulting with healthcare professionals for personalized medical advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Not relying solely on our calculator for health decisions</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Limitation of Liability
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, in no event shall BMI Calculator, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, the website.
              </p>
              <p>
                Under no circumstances will BMI Calculator be responsible for any damage, loss, or injury resulting from hacking, tampering, or other unauthorized access or use of the website or the information contained therein.
              </p>
              <p>
                We assume no liability or responsibility for any:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Errors, mistakes, or inaccuracies of content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personal injury or property damage resulting from your access to or use of our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Any unauthorized access to or use of our servers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Any interruption or cessation of transmission to or from the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Any bugs, viruses, or similar items that may be transmitted through the website by any third party</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Third-Party Links and Content
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by BMI Calculator. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that BMI Calculator shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
              </p>
              <p>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Indemnification
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You agree to defend, indemnify, and hold harmless BMI Calculator and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Your use and access of the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Your violation of any term of these Terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Any claim that your use of the website caused damage to a third party</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Changes to Terms
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Governing Law and Jurisdiction
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                These Terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>
          </section>

          {/* Severability */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Severability and Waiver
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Severability:</strong> If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
              <p>
                <strong>Waiver:</strong> Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-emerald-200 animate-scale-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Contact Us
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> tinuzhere@gmail.com
              </p>
              <p>
                <strong>Website:</strong> Use our <a href="/contact" className="text-emerald-600 hover:text-emerald-700 font-semibold underline">Contact Form</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
