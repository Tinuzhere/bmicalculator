import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { Shield, Cookie, Database, Eye, Lock, AlertCircle } from 'lucide-react';

export default function Privacy() {
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
              <Shield className="w-4 h-4 text-emerald-600 animate-pulse-soft" />
              <span className="text-sm font-semibold text-emerald-700">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last updated: {currentDate}
            </p>
          </div>

          {/* Introduction */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <p className="text-gray-700 leading-relaxed mb-4">
              At BMI Calculator ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of any information you provide while using our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Information We Collect
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Data</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you use our BMI Calculator, we do not collect or store your height, weight, or calculated BMI results. All calculations are performed locally in your browser, and no personal health data is transmitted to our servers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you choose to contact us through our contact form, we may collect:
                </p>
                <ul className="space-y-2 ml-6 mt-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Name</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Email address</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Message content</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Browser type and version</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Operating system</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>IP address</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Time zone and location</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pages visited and time spent on pages</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Referring website addresses</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Cookies and Tracking Technologies
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold">Essential Cookies:</span> These cookies are necessary for the website to function properly and cannot be disabled.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold">Analytics Cookies:</span> We use these cookies to understand how visitors interact with our website, helping us improve user experience.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold">Advertising Cookies:</span> These cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
                    </div>
                  </li>
                </ul>
              </div>

              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                How We Use Your Information
              </h2>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect in the following ways:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To provide, operate, and maintain our website</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To improve, personalize, and expand our website</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To understand and analyze how you use our website</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To develop new products, services, features, and functionality</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To communicate with you for customer service and support</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To send you updates and marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To find and prevent fraud and abuse</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg glow">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Data Security
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
              <p>
                We use industry-standard encryption protocols (SSL/TLS) to protect data transmission between your browser and our servers. Your BMI calculations are performed entirely in your browser and are never transmitted to our servers.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Third-Party Services and Data Sharing
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, perform website-related services, or assist us in analyzing how our website is used. These third parties may include:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Analytics providers:</strong> We may use services like Google Analytics to track and analyze website usage patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Advertising partners:</strong> We may work with advertising networks to display relevant ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Hosting providers:</strong> Our website is hosted on secure servers provided by third-party hosting companies</span>
                </li>
              </ul>
              <p>
                These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              <p>
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
              </p>
            </div>
          </section>

          {/* Your Privacy Rights */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Your Privacy Rights
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Access</h3>
                  <p className="text-sm text-gray-700">
                    You have the right to request copies of your personal data that we hold.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Rectification</h3>
                  <p className="text-sm text-gray-700">
                    You have the right to request that we correct any information you believe is inaccurate or incomplete.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Erasure</h3>
                  <p className="text-sm text-gray-700">
                    You have the right to request that we erase your personal data under certain conditions.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Restrict Processing</h3>
                  <p className="text-sm text-gray-700">
                    You have the right to request that we restrict the processing of your personal data under certain conditions.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Data Portability</h3>
                  <p className="text-sm text-gray-700">
                    You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Children's Privacy
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our website is intended for use by adults aged 18 and over. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us immediately.
              </p>
              <p>
                If we become aware that we have collected personal data from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 mb-8 animate-scale-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Changes to This Privacy Policy
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-emerald-200 animate-scale-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Contact Us
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
