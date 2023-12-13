import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image width={500} height={2} className='w-[500px] mx-auto my-4' src="/laptop.jpg" alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-7xl sm:text-7xl text-7xl font-bold py-2'>WHO ARE WE?</h1>
          <p>
          A startup full of zealous geeks, run by convivial crackerjacks that has more successful projects than the number of people that worked on them.
          </p>
          <div className='flex justify-left items-left lg:flex-row flex-wrap'>
            <div className="flex">
                <h1  className='md:text-6xl sm:text-6xl text-4xl font-bold pr-2'>40</h1>
                <h1 className="text-5xl text-fuchsia-400 text-bold pr-4">Greeks</h1>
            </div>
            <div className="flex">
                <h1  className='md:text-6xl sm:text-6xl text-4xl font-bold pr-2'>89</h1>
                <h1 className="text-5xl text-violet-300 text-bold">Projects</h1>
            </div>
            <div className="flex">
                <h1  className='md:text-6xl sm:text-6xl text-4xl font-bold  pr-2'>545</h1>
                <h1 className="text-5xl text-violet-200 text-bold">Days</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
// AboutWallpaper.jpg

{/* <div className="bg-[url('/AboutWallpaper.jpg')] flex flex-wrap">
<div className=' mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center'>
  <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 px-6'>
    WHO ARE WE?
  </h1>
  <p className='md:text-2xl text-xl font-bold text-white mt-10 p-6'>A startup full of zealous geeks, run by convivial crackerjacks that has more successful projects than the number of people that worked on them.</p>
  <div className='flex justify-left items-left lg:flex-row pl-6 flex-wrap'>
    <div className="flex">
        <h1  className='md:text-6xl sm:text-6xl text-4xl font-bold pr-2'>40</h1>
        <h1 className="text-5xl text-fuchsia-400 text-bold pr-4">Greeks</h1>
    </div>
    <div className="flex">
        <h1  className='md:text-6xl sm:text-6xl text-4xl font-bold pr-2'>89</h1>
        <h1 className="text-5xl text-violet-300 text-bold">Projects</h1>
    </div>
    <div className="flex">
        <h1  className='md:text-6xl sm:text-6xl text-4xl font-bold lg:pl-4 pr-2'>545</h1>
        <h1 className="text-5xl text-violet-200 text-bold">Days</h1>
    </div>
  </div>
</div>
</div> */}