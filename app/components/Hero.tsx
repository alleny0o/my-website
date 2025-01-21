import Image from 'next/image';
import photo from '../../public/portfolio-photo.jpg';

export function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 gap-4 pt-5">
      <div className="col-span-1 sm:col-span-2 bg-gray-100 min-h-[250px] sm:min-h-[450px] rounded-2xl p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight">
          Allen is currently a student attending the University of Maryland College Park, studying Computer Science. He is interested in cybersecurity and software development.
        </h1>
      </div>
      <div className="relative col-span-1 sm:col-span-1 min-h-[250px] sm:min-h-[450px] rounded-2xl overflow-hidden">
        <Image 
          src={photo} 
          alt="Allen" 
          className="object-cover h-full w-full"
          priority
        />
      </div>
    </div>
  );
}
