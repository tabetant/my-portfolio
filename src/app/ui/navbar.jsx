'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className='flex flex-row justify-center text-black'>
            <div>
                <Link
                    className={pathname === '/about' ? 'hover:text-violet-600 mx-2 bg-blue-100' : 'hover:text-violet-600 mx-2'}
                    href='/about'
                >
                    About
                </Link>
            </div>
            <div>
                <Link
                    href='/projects'
                    className={pathname === '/projects' ? 'hover:text-violet-600 mx-2 bg-blue-100' : 'hover:text-violet-600 mx-2'}
                >
                    Projects
                </Link>
            </div>
        </nav>
    )
}
