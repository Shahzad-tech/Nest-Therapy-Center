import { motion } from 'framer-motion'
import { ChatBubbleLeftIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're here to help. Reach out to us for any questions or to schedule a consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2"
        >          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Get in Touch</h3>
            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPinIcon className="h-7 w-6 text-gray-600" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-gray-600">House 140B, Street 9, Block C B-17</p>
                  <p className="text-gray-600">Multi-Gardens, Islamabad</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Hours</span>
                  <ClockIcon className="h-7 w-6 text-gray-600" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Contact</span>
                  <ChatBubbleLeftIcon className="h-7 w-6 text-gray-600" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-gray-600">Phone: 03495119950</p>
                  <p className="text-gray-600">Email: nestspeechtherapycenter@gmail.com</p>
                </dd>
              </div>
            </dl>
          </div>          {/* Contact form temporarily removed
          Future implementation will include:
          - Name input
          - Email input
          - Message textarea
          - Submit button with API integration
          */}
          </motion.div>
      </div>
    </div>
  )
}
