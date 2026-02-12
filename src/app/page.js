import Image from "next/image";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-blue-50/90 dark:from-gray-900/90 dark:via-gray-800 dark:to-gray-900/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 dark:bg-blue-900/30 dark:text-blue-300">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Since 2010
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-jakarta leading-tight dark:text-white">
                Quality Healthcare
                <span className="gradient-text block">For All</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl dark:text-gray-300">
                Group A Hospital is committed to providing <span className="font-semibold text-blue-600 dark:text-blue-400">exceptional medical care</span> to the Apomu community and beyond. Your health and well-being are our top priorities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-jakarta btn-primary"
                >
                   Book Appointment
                </Link>
                <Link 
                  href="tel:+234 9035157889"
                  className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-jakarta"
                >
                  Emergency: <span className="text-white">+234 9035157889</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeInRight">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=90"
                  alt="Group A Hospital Founder"
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <div className="bg-blue-600/90 backdrop-blur-sm px-8 py-4 rounded-xl">
                    <p className="text-xl font-bold">Dr. SODIQ O</p>
                    <p className="text-base opacity-90">Founder & Medical Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-jakarta dark:text-white">
              Why Choose <span className="gradient-text">Group A Hospital</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
              We combine <span className="font-semibold text-blue-600 dark:text-blue-400">advanced medical technology</span> with compassionate care to deliver the best healthcare experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-700 transform hover:scale-105">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=90"
                    alt="24/7 Emergency Care"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jakarta dark:text-white">24/7 Emergency Care</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  Our emergency department is always ready with <span className="font-semibold">immediate medical attention</span> when you need it most.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-green-200 dark:from-green-900/20 dark:to-green-800/20 dark:border-green-700 transform hover:scale-105">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=90"
                    alt="Expert Medical Team"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jakarta dark:text-white">Expert Medical Team</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  Our team of <span className="font-semibold">experienced medical professionals</span> is dedicated to providing personalized care for every patient.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 dark:border-purple-700 transform hover:scale-105">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=90"
                    alt="Modern Facilities"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jakarta dark:text-white">Modern Facilities</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  <span className="font-semibold">State-of-the-art medical equipment</span> and comfortable facilities ensure the best possible treatment outcomes.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 dark:border-orange-700 transform hover:scale-105">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=90"
                    alt="Patient-Centered Care"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jakarta dark:text-white">Patient-Centered Care</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  We put <span className="font-semibold">your health and well-being</span> first with compassionate, personalized medical attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive medical services to meet all your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Emergency Care", icon: "🚑", description: "24/7 emergency medical services" },
              { name: "General Surgery", icon: "⚕️", description: "Advanced surgical procedures" },
              { name: "Pediatrics", icon: "👶", description: "Specialized care for children" },
              { name: "Maternity", icon: "🤱", description: "Complete maternal healthcare" },
              { name: "Diagnostics", icon: "🔬", description: "Advanced diagnostic imaging" },
              { name: "Pharmacy", icon: "💊", description: "Complete pharmaceutical services" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conveniently located in the heart of Apomu, Osun State
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Hospital Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Group A Hospital</p>
                      <p className="text-gray-300">Awala Road, Apomu</p>
                      <p className="text-gray-300">Osun State, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-300">+234 9035157889</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300">info@groupahospital.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Working Hours</p>
                      <p className="text-gray-300">24/7 Emergency Services</p>
                      <p className="text-gray-300">Outpatient: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <GoogleMap address="Apomu, Osun State, Nigeria" height="400px" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your appointment today and take the first step towards better health.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
