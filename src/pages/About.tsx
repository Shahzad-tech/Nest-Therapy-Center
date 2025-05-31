import { motion } from 'framer-motion'
import sehrishImage from '../assets/sehrish-javaid.jpeg'

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dedicated to providing exceptional care and support for children with special needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our mission is to empower children with special needs to reach their full potential through personalized therapy, compassionate care, and evidence-based interventions. We believe in creating a supportive environment where every child can thrive and develop essential life skills.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Values</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <li>• Compassionate Care</li>
                <li>• Professional Excellence</li>
                <li>• Individualized Approach</li>
                <li>• Family-Centered Practice</li>
                <li>• Continuous Learning</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Our Team</h3>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">            <div className="space-y-4">              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">                <img
                  className="w-full h-full object-cover object-center scale-125"
                  src={sehrishImage}
                  alt="Sehrish Javaid"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold">Sehrish Javaid</h4>
                <p className="text-gray-600">Speech-Language Pathologist</p>
                <p className="text-sm text-gray-500 mt-2">
                  Masters in Speech-Language Pathology
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
