import LayoutEffect from '@/components/LayoutEffect';
import SectionWrapper from '@/components/SectionWrapper';

export default function Features() {
  const featuresList = [
    {
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3.75h16.5v16.5H3.75zM7.5 7.5h9m-9 4.5h9m-9 4.5h6' />
        </svg>
      ),
      title: 'Smart Foldering & Tags',
      desc: 'Create nested folders, add tags, and auto-organize files with rules for consistent structure.',
    },
    {
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 3.75l8.25 4.5-8.25 4.5-8.25-4.5 8.25-4.5zM3 12l8.25 4.5L19.5 12M3 15.75l8.25 4.5 8.25-4.5' />
        </svg>
      ),
      title: 'Lightning Search',
      desc: 'Instantly find files by name, type, tags, content, or metadata—powered by fast indexing.',
    },
    {
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v7.5m-3.75-3.75h7.5M3.75 6h16.5v12.75A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V6z' />
        </svg>
      ),
      title: 'Secure Sharing',
      desc: 'Share links with expiry, passwords, and fine-grained permissions for teams and external users.',
    },
    {
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 6.75h12m-12 3H12m-7.5 6.75l6-6 4.5 4.5 6-6' />
        </svg>
      ),
      title: 'Versioning & Recovery',
      desc: 'Track file versions, restore previous states, and recover deleted files within retention windows.',
    },
    {
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3 7.5l9-4.5 9 4.5v9l-9 4.5-9-4.5v-9z' />
        </svg>
      ),
      title: 'Access Controls & Audit',
      desc: 'Role-based access with activity logs and audits to keep your content compliant and secure.',
    },
    {
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 6.75h15m-15 4.5h15m-15 4.5h15' />
        </svg>
      ),
      title: 'Integrations',
      desc: 'Connect cloud drives, Slack, and productivity tools to streamline file flows in FILEONIX.',
    },
  ];

  return (
    <SectionWrapper>
      <div id='features' className='custom-screen text-gray-700 dark:text-gray-300'>
        <LayoutEffect
          className='duration-1000 delay-300'
          isInviewState={{
            trueState: 'opacity-1',
            falseState: 'opacity-0 translate-y-6',
          }}
        >
          <div className='max-w-xl mx-auto text-center'>
            <h2 className='text-gray-900 dark:text-gray-50 text-3xl font-semibold sm:text-4xl'>
              Powerful file management with FILEONIX
            </h2>
            <p className='mt-3 text-gray-600 dark:text-gray-300'>
              Keep your library organized, searchable, and secure with features built for modern teams.
            </p>
          </div>
        </LayoutEffect>
        <LayoutEffect
          className='duration-1000 delay-500'
          isInviewState={{
            trueState: 'opacity-1',
            falseState: 'opacity-0',
          }}
        >
          <div className='relative mt-12'>
            <ul className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {featuresList.map((item, idx) => (
                <li
                  key={idx}
                  className='space-y-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-transparent'
                  style={{
                    background: 'radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)',
                  }}
                >
                  <div className='w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-50 rounded-lg'>
                    {item.icon}
                  </div>
                  <h3 className='text-lg text-gray-900 dark:text-gray-50 font-semibold'>{item.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300'>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </LayoutEffect>
      </div>
    </SectionWrapper>
  );
}