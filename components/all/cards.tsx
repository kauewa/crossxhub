import { useIsMobile } from '@/functions/auxiliares';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  imageSrc: string;
  headline: string;
  description: string;
  autor: string;
  date: string;
}

export const CardBig: React.FC<CardProps> = ({ id, imageSrc, headline, autor }) => {
  const isMobile = useIsMobile();

  

  return (
    <Link href={`/post/${id}`}>
    <div className={`${isMobile ? 'h-[32rem] w-full' : 'h-[15rem] w-[60rem] flex rounded-xl' }  my-4 overflow-hidden bg-white shadow-green hover:shadow-green-hover hover:underline`}>
        <Image src={imageSrc} alt={headline} width={1080} height={1080} className={`${isMobile ? 'h-3/4 w-full' : 'w-1/4 h-full' } object-cover`}/>
        <div className={`${isMobile ? 'h-1/4' : ' w-3/4' } p-4 h-full flex flex-col justify-between`}>
          <h3>{headline}</h3>
          {/* <h2>
          {description}
        </h2> */}
          <p className='pt-2'>{autor}</p>
        </div>
    </div>
    </Link>
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


