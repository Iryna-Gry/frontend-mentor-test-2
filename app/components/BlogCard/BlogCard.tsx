import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
  return (
    <li className='blog-card hover:shadow-card-shadow-hover focus:shadow-card-shadow-hover max-w-[320px] p-6 rounded-[10px] shadow-card-shadow bg-custom-white md:min-w-[385px]'>
      <div className='mb-6'>
        <Image
          src='illustration-article.svg'
          alt='html open tag'
          width='279'
          height='200'
          className='rounded-[10px] h-full w-full'
        />
      </div>
      <div className='bg-yellow-bg font-extrabold text-xs py-1 px-3 inline-block rounded-[4px] mb-3'>
        <p>Learning</p>
      </div>
      <p className='text-xs mb-3 md:text-sm'>Published 21 Dec 2023</p>
      <h2 className='font-extrabold text-xl mb-3 md:text-2xl'>
        HTML & CSS foundations
      </h2>
      <p className='text-sm text-custom-gray mb-3 md:text-base'>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className='flex items-center gap-2'>
        <Image
          src='/image-avatar.webp'
          alt='Greg Hooper avatar'
          width='32'
          height='32'
          className='rounded-full'
        />
        <p className='font-bold text-sm'>Greg Hooper</p>
      </div>
    </li>
  );
};

export default BlogCard;
