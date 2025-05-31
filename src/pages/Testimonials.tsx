import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    name: 'Emily R.',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The transformation we\'ve seen in our child since starting therapy here has been remarkable. The staff is incredibly patient and caring.',
    rating: 5,
  },
  {
    name: 'Michael S.',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The therapists here have given our family hope and the tools we need to help our child succeed. We\'re grateful for their expertise and support.',
    rating: 5,
  },
  {
    name: 'Sarah T.',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'We\'ve seen significant progress in our child\'s communication skills. The personalized approach makes all the difference.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Parents Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read about the experiences of families who have been part of our therapy center.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div className="flex items-center gap-x-4 mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full bg-gray-50"
                />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-6 text-gray-600">
                <div className="flex gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-base italic">"{testimonial.quote}"</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
