import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png';


export default function MenuDesktop() {
    return (
        <nav className="bg-green shadow-green">
            <div className="container flex justify-between items-center px-20">
                <Link href="/home"><Image src={Logo} alt="Logo" width={1080} height={1080} className='w-20 h-20' /></Link>
                <div className="space-x-6 text-lg">
                    <Link href="/home" className='hover:underline'>
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    )
}


