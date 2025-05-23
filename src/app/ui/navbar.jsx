'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className='flex my-5 text-2xl bg-blue-500 flex-row justify-around text-white font-bold'>
            <div className={pathname == '/about' ? 'w-1/8 bg-blue-200' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2'
                    href='/about'
                >
                    About
                </Link>
            </div >
            <div className={pathname == '/experience' ? 'w-1/8 bg-blue-200' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2'
                    href='/experience'
                >
                    Experience & Awards
                </Link>
            </div >
            <div className={pathname == '/projects' ? 'w-1/8 bg-blue-200' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2'
                    href='/projects'
                >
                    Projects
                </Link>
            </div >
        </nav >
    )
}
