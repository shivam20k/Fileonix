import LayoutEffect from '@/components/LayoutEffect';
import SectionWrapper from '@/components/SectionWrapper';

const faqsList = [
  {
    q: 'What is FILEONIX?',
    a: 'FILEONIX is a secure file management system that helps you store, organize, search, and share files across your team and devices.',
  },
  {
    q: 'How does FILEONIX keep my files secure?',
    a: 'We provide role-based access controls, password-protected links, and activity logs so you can manage who sees what and when.',
  },
  {
    q: 'Can I migrate files from other drives?',
    a: 'Yes. FILEONIX supports imports from popular cloud drives and bulk uploads with automatic foldering and tags.',
  },
  {
    q: 'Does FILEONIX support versioning?',
    a: 'Absolutely. FILEONIX tracks versions, so you can restore previous states or recover deleted files within retention windows.',
  },
  {
    q: 'Can I collaborate with external partners?',
    a: 'You can create expiring, password-protected share links with granular permissions for clients or contractors.',
  },
  {
    q: 'Is there a free plan?',
    a: 'We offer a free tier suitable for individuals and small teams. Upgrade to unlock more storage and advanced controls.',
  },
];

export default function FAQs() {
  return (
    <SectionWrapper id='faqs'>
      <div className='custom-screen text-gray-700 dark:text-gray-300'>
        <div className='max-w-xl text-center xl:mx-auto'>
          <h2 className='text-gray-900 dark:text-gray-50 text-3xl font-extrabold sm:text-4xl'>
            Everything you need to know
          </h2>
          <p className='mt-3 text-gray-600 dark:text-gray-300'>Get answers about storage, security, collaboration, and pricing.</p>
        </div>
        <div className='mt-12'>
          <LayoutEffect
            className='duration-1000 delay-300'
            isInviewState={{
              trueState: 'opacity-1',
              falseState: 'opacity-0 translate-y-12',
            }}
          >
            <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
              {faqsList.map((item, idx) => (
                <li key={idx} className='space-y-3'>
                  <summary className='flex items-center justify-between font-semibold text-gray-900 dark:text-gray-100'>
                    {item.q}
                  </summary>
                  <p dangerouslySetInnerHTML={{ __html: item.a }} className='leading-relaxed text-gray-600 dark:text-gray-300'></p>
                </li>
              ))}
            </ul>
          </LayoutEffect>
        </div>
      </div>
    </SectionWrapper>
  );
}