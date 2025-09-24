import SectionWrapper from '@/components/SectionWrapper';
import GradientWrapper from '@/components/GradientWrapper';
import user1 from '@/public/testimonial/user1.webp';
import user2 from '@/public/testimonial/user2.webp';
import user3 from '@/public/testimonial/user3.webp';
import user4 from '@/public/testimonial/user4.webp';
import user5 from '@/public/testimonial/user5.webp';
import user6 from '@/public/testimonial/user6.webp';
import Image from 'next/image';
import LayoutEffect from '@/components/LayoutEffect';

export default function Testimonial() {
  const testimonials = [
    { avatar: user1, name: 'Mark Zuckerberg', title: 'Founder of meta', quote: "FILEONIX made our files discoverable across teams. Versioning and permissions saved us hours every week." },
    { avatar: user2, name: 'Guillermo Rauch', title: 'Founder of Vercel', quote: 'We switched to FILEONIX for its blazing search and simple sharing. It just works.' },
    { avatar: user3, name: 'Sidi jeddou', title: 'Founder of Float UI', quote: 'I can finally keep design assets organized. FILEONIX tagging and folders are a game changer.' },
    { avatar: user4, name: 'Ghazbel', title: 'Founder of forceY', quote: 'Audit logs and roles gave us the confidence to collaborate externally without risking leaks.' },
    { avatar: user5, name: 'Ana khan', title: 'Founder of larax', quote: 'FILEONIX is intuitive yet powerful. Our onboarding took minutes and productivity went up.' },
    { avatar: user6, name: 'Ahmed khasem', title: 'Founder of Let’s code', quote: 'Version recovery has saved us multiple times. FILEONIX paid for itself in a week.' },
  ];

  return (
    <SectionWrapper>
      <div id='testimonials' className='custom-screen text-gray-700 dark:text-gray-300'>
        <div className='max-w-2xl text-center md:mx-auto'>
          <h2 className='text-gray-900 dark:text-gray-50 text-3xl font-semibold sm:text-4xl'>
            FILEONIX is trusted by teams worldwide
          </h2>
        </div>
        <GradientWrapper wrapperClassName='max-w-sm h-40 top-12 inset-x-0' className='mt-12'>
          <LayoutEffect
            className='duration-1000 delay-300'
            isInviewState={{
              trueState: 'opacity-1',
              falseState: 'opacity-0 translate-y-12',
            }}
          >
            <ul className='grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3'>
              {testimonials.map((item, idx) => (
                <li
                  key={idx}
                  className='p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-transparent'
                  style={{
                    backgroundImage: 'radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)',
                  }}
                >
                  <figure className='flex flex-col justify-between gap-y-6 h-full'>
                    <blockquote className=''>
                      <p className='text-gray-700 dark:text-gray-300'>{item.quote}</p>
                    </blockquote>
                    <div className='flex items-center gap-x-4'>
                      <Image src={item.avatar} alt={item.name} className='w-14 h-14 rounded-full object-cover' />
                      <div>
                        <span className='block text-gray-900 dark:text-gray-50 font-semibold'>{item.name}</span>
                        <span className='block text-sm mt-0.5 text-gray-600 dark:text-gray-400'>{item.title}</span>
                      </div>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </LayoutEffect>
        </GradientWrapper>
      </div>
    </SectionWrapper>
  );
}