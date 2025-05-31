import { motion } from 'framer-motion'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { AnimatedButton } from '../components/AnimatedButton'

const services = [
  {
    title: 'Speech Therapy',
    description: 'Help children develop clear speech and improve communication skills through personalized therapy sessions.',
    icon: '🗣️',
    features: [
      'Speech sound development',
      'Language development',
      'Communication skills',
      'Social interaction',
    ],
  },
  {
    title: 'Occupational Therapy',
    description: 'Support children in developing essential life skills and improving their independence in daily activities.',
    icon: '🎯',
    features: [
      'Fine motor skills',
      'Sensory processing',
      'Self-care skills',
      'Visual motor integration',
    ],
  },
  {
    title: 'Physical Therapy',
    description: 'Help children improve their physical strength, balance, and coordination through targeted exercises.',
    icon: '💪',
    features: [
      'Gross motor development',
      'Balance and coordination',
      'Strength building',
      'Movement patterns',
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll direction="up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Specialized Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive therapeutic services tailored to your child's unique needs.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={service.title}
                direction="up"
                delay={index * 0.2}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-lg shadow-gray-900/5 ring-1 ring-gray-200"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <motion.div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-3xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="flex-auto text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <motion.ul
                    className="mt-6 space-y-3 text-sm text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center"
                      >
                        <motion.span
                          className="mr-2 text-primary-600"
                          whileHover={{ scale: 1.2 }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-8">
                    <AnimatedButton
                      to="/contact"
                      variant="outline"
                      className="w-full justify-center"
                    >
                      Book Consultation
                    </AnimatedButton>
                  </div>
                </dd>
              </AnimateOnScroll>
            ))}
          </dl>
        </div>

        <AnimateOnScroll direction="up" delay={0.6} className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Not sure which service is right for your child?
          </p>
          <AnimatedButton to="/contact" variant="primary">
            Schedule a Free Assessment
          </AnimatedButton>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
