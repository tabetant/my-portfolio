'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className='flex rounded-full shadow px-6 py-2 my-5 text-2xl bg-blue-500 flex-row justify-around text-white font-bold'>
            <div className={pathname == '/about' ? 'w-1/8 bg-blue-200 rounded-full' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2 font-bold space-x-6'
                    href='/about'
                >
                    About
                </Link>
            </div >
            <div className={pathname == '/education' ? 'w-1/8 bg-blue-200 rounded-full' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2 font-bold space-x-6'
                    href='/education'
                >
                    Education & Awards
                </Link>
            </div >
            <div className={pathname == '/projects' ? 'w-1/8 bg-blue-200 rounded-full' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2 font-bold space-x-6'
                    href='/projects'
                >
                    Projects
                </Link>
            </div >
            <div className={pathname == '/leadership' ? 'w-1/8 bg-blue-200 rounded-full' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2 font-bold space-x-6'
                    href='/leadership'
                >
                    Leadership and Volunteering
                </Link>
            </div >
            <div className={pathname == '/work' ? 'w-1/8 bg-blue-200 rounded-full' : 'w-1/8 bg-blue-500'}>
                <Link
                    className='hover:text-black mx-2 font-bold space-x-6'
                    href='/work'
                >
                    Work
                </Link>
            </div >
        </nav >
    )
}
