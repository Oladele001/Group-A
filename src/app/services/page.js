import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services - Group A Hospital",
  description: "Comprehensive medical services at Group A Hospital including emergency care, surgery, pediatrics, maternity, diagnostics, and pharmacy services.",
};

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Emergency Care",
      icon: (
        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3a1 1 0 011-2h3a1 1 0 011 2v3a1 1 0 002 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "24/7 emergency medical services with trained professionals ready to handle any medical emergency.",
      features: ["24/7 Availability", "Trauma Care", "Critical Care Unit", "Ambulance Services"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 2,
      name: "General Surgery",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 2.5a2.5 2.5 0 00-5 0v14a2 2 0 002 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.5 7.5v-5a2.5 2.5 0 00-5 0v14a2 2 0 002 2 0 014 0z" />
        </svg>
      ),
      description: "Advanced surgical procedures performed by experienced surgeons using modern equipment and techniques.",
      features: ["Minimally Invasive Surgery", "Laparoscopic Procedures", "Outpatient Surgery", "Post-operative Care"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 3,
      name: "Pediatrics",
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 007 7z" />
        </svg>
      ),
      description: "Specialized healthcare services for infants, children, and adolescents with a child-friendly environment.",
      features: ["Newborn Care", "Vaccination Programs", "Growth Monitoring", "Pediatric Emergency Care"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 4,
      name: "Maternity Services",
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Complete maternal healthcare including prenatal, delivery, and postnatal care in a comfortable setting.",
      features: ["Prenatal Care", "Labor & Delivery", "C-Section Services", "Postnatal Care", "Lactation Support"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 5,
      name: "Diagnostic Services",
      icon: "🔬",
      description: "State-of-the-art diagnostic imaging and laboratory services for accurate and timely diagnosis.",
      features: ["X-Ray & CT Scan", "Ultrasound", "MRI Services", "Laboratory Tests", "Pathology Services"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 6,
      name: "Pharmacy Services",
      icon: "💊",
      description: "Complete pharmaceutical services with genuine medications and professional pharmaceutical care.",
      features: ["Prescription Drugs", "Over-the-Counter Medicines", "Medication Counseling", "24/7 Service"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 7,
      name: "Cardiology",
      icon: "❤️",
      description: "Comprehensive heart care services including diagnosis, treatment, and prevention of cardiovascular diseases.",
      features: ["Echocardiography", "Stress Testing", "Cardiac Catheterization", "Heart Disease Management"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    },
    {
      id: 8,
      name: "Orthopedics",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Specialized care for bone, joint, and muscle conditions with advanced treatment options.",
      features: ["Joint Replacement", "Fracture Care", "Sports Medicine", "Physical Therapy"],
      image: "https://i.pinimg.com/564x/8f/3e/8f3e3c7e1f435b7ed8a7faa6ba29.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Our Medical Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs with excellence and compassion
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-700">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We go beyond standard healthcare to provide exceptional medical experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Availability</h3>
              <p className="text-gray-300">
                Our emergency services are available round the clock to ensure you get care when you need it most.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 text-center">
              <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                We maintain the highest standards of medical care with regular quality checks and certifications.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 text-center">
              <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Our medical professionals are highly qualified, experienced, and dedicated to providing the best care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Medical Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule an appointment with our expert medical team today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Book Appointment
            </Link>
            <Link 
              href="tel:+234 9035157889"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Emergency: +234 9035157889
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
