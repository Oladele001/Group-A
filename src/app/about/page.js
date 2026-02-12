import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Group A Hospital",
  description: "Learn about Group A Hospital's history, mission, and our commitment to providing quality healthcare in Apomu, Osun State.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Group A Hospital
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A legacy of compassionate healthcare serving Apomu community and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To provide exceptional, accessible, and compassionate healthcare services to all members of our community, 
                regardless of their background or financial status. We are committed to improving health outcomes through 
                innovative medical practices, patient-centered care, and continuous community engagement.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare institution in Osun State, recognized for excellence in medical care, 
                innovation in treatment approaches, and unwavering commitment to community health. We aspire to create 
                a healthier future where quality healthcare is a right, not a privilege.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a beacon of hope in healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1995 - The Beginning</h3>
                    <p className="text-gray-600">
                      Group A Hospital was founded with a simple mission: to bring quality healthcare to the people of Apomu. 
                      Starting with just a small clinic and a handful of dedicated medical professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2005 - Expansion</h3>
                    <p className="text-gray-600">
                      A decade of service saw us expand our facilities, add new departments, and introduce advanced medical 
                      equipment to better serve our growing community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2015 - Modernization</h3>
                    <p className="text-gray-600">
                      Major renovations and technological upgrades transformed us into a modern healthcare facility, 
                      capable of handling complex medical cases and procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Present - Excellence</h3>
                    <p className="text-gray-600">
                      Today, we stand as a premier healthcare institution, serving thousands of patients annually with 
                      compassion, excellence, and unwavering dedication to health and wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Group A Hospital Building"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Compassion</h3>
              <p className="text-gray-300">
                We treat every patient with empathy, dignity, and respect, understanding the human side of healthcare.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                We strive for the highest standards in medical care, continuously improving our services and outcomes.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
              <p className="text-gray-300">
                We operate with honesty, transparency, and ethical principles in all our interactions and decisions.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-20 h-20 bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-300">
                We are committed to serving our community and improving the health and well-being of those around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The visionary behind Group A Hospital's legacy of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Dr. SODIQ O</h3>
                <p className="text-blue-400 font-semibold mb-6">Founder & Chief Executive Officer</p>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Dr. SODIQ O is a renowned medical professional with over 30 years of experience in healthcare 
                    management and clinical practice. With a vision to make quality healthcare accessible to all, 
                    they lead Group A Hospital with excellence and compassion.
                  </p>
                  <p>
                    After completing their medical education at Ladoke Akintola University Of Technology , Dr. SODIQ O gained extensive 
                    experience working in various hospitals across Nigeria before bringing their expertise to 
                    healthcare leadership.
                  </p>
                  <p>
                    Under their leadership, Group A Hospital provides exceptional medical care and serves as a trusted name in healthcare throughout 
                    Osun State and beyond.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-400">30+</p>
                      <p className="text-gray-300">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">50K+</p>
                      <p className="text-gray-300">Lives Touched</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. SODIQ O"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <div className="bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <p className="text-sm font-semibold">Dr. SODIQ O</p>
                    <p className="text-xs opacity-90">Founder & Medical Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied patients who trust Group A Hospital for their medical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Book Appointment
            </Link>
            <Link 
              href="/services"
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-700"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
