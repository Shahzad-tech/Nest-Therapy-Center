import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HeartIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { AnimateOnScroll } from '../components/AnimateOnScroll'

const features = [
  {
    name: 'Target Behavior',
    description: 'Specialized intervention programs focusing on behavioral development and positive reinforcement strategies.',
    icon: HeartIcon,
  },
  {
    name: 'Academic Skills',
    description: 'Comprehensive academic support through activity-based learning, making education engaging and effective.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Daily Life Skills',
    description: 'Practical training in essential life skills to promote independence and confidence in everyday activities.',
    icon: UserGroupIcon,
  },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative isolate">        <div className="mx-auto max-w-7xl pb-24 pt-4 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-24 sm:mt-32 lg:mt-16"
                >
                  <div className="inline-flex space-x-6">
                    <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                      Professional Care
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Nurturing expressions and speech therapy center
                  </h1>            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering development through activity-based learning, focusing on target behavior, academic skills, and essential daily life skills in a nurturing, supportive environment.
            </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/contact"
                        className="rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                      >
                        Schedule Consultation
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to="/services"
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <AnimateOnScroll direction="up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a range of specialized therapeutic services designed to support your child's development and growth.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <AnimateOnScroll 
                key={feature.name} 
                direction="up" 
                delay={index * 0.2}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600"
                  >
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </motion.div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <motion.div whileHover={{ x: 5 }} whileTap={{ x: -2 }}>
                      <Link to="/services" className="text-sm font-semibold leading-6 text-primary-600">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </motion.div>
                  </p>
                </dd>
              </AnimateOnScroll>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
