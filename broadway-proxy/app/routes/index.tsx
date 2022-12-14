import React from "react";


export function ImageCard({ src }: { src?: string }) {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className='p-8 w-full min-h-full flex items-center justify-center'>
      <div className='w-full h-auto overflow-hidden shadow-lg flex items-start justify-start flex-col  rounded-lg'>
        <div className='w-full flex items-center justify-center border-b dark:border-gray-800 relative'>
          <img
            alt='Forest'
            src={src ?? 'https://source.unsplash.com/1200x630/?forest'}
            width='1200'
            height='630'
            className={`w-full h-auto transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'
              }`}
            onLoad={() => {
              setLoading(false);
            }}
          />
          <div className='absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0'>
            <div className='flex justify-between'>
              <p className='text-sm text-gray-300 flex items-center'></p>
              <p className='text-sm text-gray-300 flex items-center'>
                <svg
                  width='10'
                  height='10'
                  fill='currentColor'
                  className='h-4 w-4'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z' />
                </svg>
                Designed By Bresnow
              </p>
            </div>
          </div>
          {loading && (
            <div className='absolute w-full h-full top-0 left-0 animate-pulse bg-gray-100 dark:bg-gray-900' />
          )}
        </div>
        <div className='p-4 w-full flex items-center justify-start flex-row-reverse'>
          <button
            type='button'
            className='bg-gray-800 py-2 px-4 text-white rounded-lg hover:bg-gray-700 active:bg-gray-600'
          >
            Action
          </button>
        </div>
      </div>
    </div>
  );
}
const IndexRoute: React.FC<{}> = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center py-6 min-h-screen bg-gray-50 sm:py-12">
     <ImageCard/>
    </div>
  );
};

export default IndexRoute;
