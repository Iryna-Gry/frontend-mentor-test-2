import Image from 'next/image';
import BlogCard from './components/BlogCard/BlogCard';

export default function Home() {
  return (
    <main className='flex justify-center bg-yellow-bg min-h-screen flex-col items-center'>
      <h1 className='visually-hidden'>Blog Cards</h1>
      <ul>
        <BlogCard />
      </ul>
    </main>
  );
}
