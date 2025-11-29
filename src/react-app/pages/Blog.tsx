import { Link } from 'react-router';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import { BookOpen, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-bmi-comprehensive-guide',
    title: 'Understanding BMI: A Comprehensive Guide to Body Mass Index',
    excerpt: 'Explore everything you need to know about BMI, from its calculation to its limitations and how it fits into your overall health assessment.',
    category: 'Health Basics',
    readTime: '8 min read',
    date: 'November 20, 2025',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop'
  },
  {
    slug: 'bmi-weight-categories-explained',
    title: 'BMI Weight Categories Explained: What Your Number Really Means',
    excerpt: 'Learn about the different BMI categories, what they indicate about your health, and how to interpret your results accurately.',
    category: 'BMI Basics',
    readTime: '7 min read',
    date: 'November 18, 2025',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop'
  },
  {
    slug: 'healthy-weight-loss-strategies',
    title: '10 Evidence-Based Strategies for Healthy Weight Loss',
    excerpt: 'Discover scientifically proven methods to lose weight safely and sustainably without fad diets or extreme measures.',
    category: 'Weight Management',
    readTime: '10 min read',
    date: 'November 15, 2025',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&fit=crop'
  },
  {
    slug: 'nutrition-guide-balanced-diet',
    title: 'The Complete Nutrition Guide: Building a Balanced Diet for Optimal Health',
    excerpt: 'Master the fundamentals of nutrition and learn how to create meal plans that support your health goals and maintain ideal body weight.',
    category: 'Nutrition',
    readTime: '12 min read',
    date: 'November 12, 2025',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop'
  },
  {
    slug: 'exercise-fitness-weight-management',
    title: 'Exercise and Fitness: Your Complete Guide to Weight Management',
    excerpt: 'Understand how different types of exercise impact your weight, metabolism, and overall health, plus create an effective workout routine.',
    category: 'Fitness',
    readTime: '9 min read',
    date: 'November 10, 2025',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
              <BookOpen className="w-4 h-4 text-emerald-600 animate-pulse-soft" />
              <span className="text-sm font-semibold text-emerald-700">Health & Wellness Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              BMI & Health Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights, research-backed advice, and practical tips for maintaining a healthy weight and improving your overall well-being.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12 animate-scale-in">
            <Link to={`/blog/${blogPosts[0].slug}`} className="group">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-emerald-100/50 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                        {blogPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                      <span className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-emerald-100/50 h-full transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <TrendingUp className="w-16 h-16 text-white mx-auto mb-4 animate-float" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Start Your Health Journey Today
                </h2>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  Calculate your BMI now and get personalized health insights to guide your wellness journey.
                </p>
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Calculate Your BMI
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
