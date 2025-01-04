import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  imageSrc: string;
  headline: string;
  description: string;
  autor: string;
}

export const CardBig: React.FC<CardProps> = ({ id ,imageSrc, headline, autor }) => {
  return (
    
    <div className="w-full my-4 h-[32rem] overflow-hidden shadow-lg bg-white">
      <Link href={`/post/${id}`}>
      <Image src={imageSrc} alt={headline} width={1080} height={1080} className="w-full h-3/4 object-cover" />
      <div className="px-5 py-4 h-1/4">
        <h1>{headline}</h1>
        {/* <h2>
          {description}
        </h2> */}
        <p>{autor}</p>
      </div>
      </Link>
    </div>
    
  );
}

export const CardSmall: React.FC<CardProps> = ({ id, imageSrc, headline, autor }) => {
  return (
    <div className="flex my-4 w-[90%] h-[7rem] rounded overflow-hidden shadow-lg bg-white">
      <Link href={`/post/${id}`}>
      <Image src={imageSrc} alt={headline} width={100} height={50} className="w-full w-2/6 object-cover" />
      <div className="px-6 py-4 w-4/6">
      <h1>{headline}</h1>
        {/* <h2>
          {description}
        </h2> */}
        <p>{autor}</p>
      </div>
      </Link>
    </div>
    
  );
}


