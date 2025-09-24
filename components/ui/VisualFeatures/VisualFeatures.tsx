import SectionWrapper from '@/components/SectionWrapper';
import Feature1 from '@/public/images/Feature-1.svg';
import Feature2 from '@/public/images/Feature-2.svg';
import Image from 'next/image';

export default function VisualFeatures() {
  const features = [
    { title: 'Centralized Library', desc: 'Bring all your files into one organized workspace with folders and tags.', img: Feature1 },
    { title: 'Secure Collaboration', desc: 'Share files with expiring links, access roles, and audit history in FILEONIX.', img: Feature2 },
  ];
  return (
    <SectionWrapper>
      <div className='custom-screen text-gray-700 dark:text-gray-300'>
        <div className='max-w-xl mx-auto text-center'>
          <h2 className='text-gray-900 dark:text-gray-50 text-3xl font-semibold sm:text-4xl'>
            Work smarter with FILEONIX
          </h2>
          <p className='mt-3 text-gray-600 dark:text-gray-300'>
            Store, organize, and collaborate on files with confidence.
          </p>
        </div>
        <div className='mt-12'>
          <ul className='space-y-8 gap-x-6 sm:flex sm:space-y-0'>
            {features.map((item, idx) => (
              <li
                className='flex-1 flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-transparent'
                key={idx}
                style={{
                  background: 'radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)',
                }}
              >
                <div className='p-8'>
                  <h3 className='text-gray-900 dark:text-gray-50 text-xl font-semibold'>{item.title}</h3>
                  <p className='mt-3 sm:text-sm md:text-base text-gray-600 dark:text-gray-300'>{item.desc}</p>
                </div>
                <div className='pl-8'>
                  <Image src={item.img} className='w-full ml-auto' alt={item.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}