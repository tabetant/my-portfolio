import Image from 'next/image'
import { exile } from '@/app/ui/fonts';

export default function AboutPage() {
    return (
        <div className='flex flex-col items-center bg-white w-full'>
            <div className='w-full max-w-screen-xl'>
                <div className='flex flex-col md:flex-row w-full max-w-screen-xl px-6 md:px-10 gap-10 items-center'>
                    <div className='md:w-1/2'>
                        <section className="w-full max-w-screen-lg px-6 md:px-10 py-16">
                            <h1
                                className={`${exile.className} text-5xl md:text-6xl font-bold tracking-tight text-center mb-6`}
                            >About Me
                            </h1>
                            <hr className="w-1/4 mx-auto border-gray-300 mb-8" />
                            <p className='text-lg leading-relaxed text-gray-700'>
                                I am a Computer Engineering student at the University of Toronto with a strong passion for
                                leveraging technology to solve real-world challenges. With a foundation in programming, hardware
                                systems, and problem-solving, I thrive in environments where I can apply analytical thinking and
                                creativity. Through hackathons, academic projects, and leadership experiences, I have developed
                                expertise in embedded systems, system design, and project management. I am eager to continue
                                refining my technical and strategic skills while contributing to innovative and impactful solutions.
                            </p>
                        </section>
                        <section className="w-full max-w-screen-lg px-6 md:px-10 py-12 bg-gray-50">
                            <h1 className={`${exile.className} text-5xl md:text-6xl font-semibold text-center mb-6`}>Skills</h1>
                            <hr className='w-1/5 mx-auto border-gray-300 mb-8' />
                            <ul className='space-y-3 text-lg leading-relaxed text-gray-700'>
                                <li><strong>Programming:</strong> Python, C, C++, Arduino, JavaScript, Next JS, TypeScript, Supabase, Drizzle ORM, Tailwind CSS, React </li>
                                <li><strong>Hardware & Embedded Systems:</strong> Arduino Uno, Microcontrollers, Circuit Design
                                </li>
                                <li><strong>Software Tools:</strong> Microsoft Office Suite, Google Docs, Excel</li>
                                <li><strong>Leadership & Problem-Solving:</strong> Advanced Leadership Certification, Conflict
                                    Resolution, Public Speaking</li>
                            </ul>
                        </section>
                    </div>
                    <div className="relative w-full md:w-1/2 h-[400px] md:h-[450px] rounded-xl overflow-hidden">
                        <Image
                            src="/images/pianoedited.jpg"
                            alt="piano"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center space-y-16'>
                    <section className='w-full max-w-screen-lg px-6 md:px-10 py-12'>
                        <h2 className='text-4xl font-semibold text-center mb-6'>Languages</h2>
                        <hr className='w-1/5 mx-auto border-gray-300 mb-8' />
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm text-lg">
                                🇨🇦 English
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm text-lg">
                                🇫🇷 French
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm text-lg">
                                🇱🇧 Arabic
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm text-lg">
                                🇪🇸 Spanish
                            </div>
                        </div>
                    </section>
                    <section className=' bg-gray-50 w-full max-w-screen-lg px-6 md:px-10 py-12'>
                        <h2 className='font-bold text-5xl text-center'>Hobbies & Interests</h2>
                        <hr className=" w-20 h-0.5 mx-auto my-4 border-0 bg-gray-300" />
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-lg shadow-sm">
                                Song & Poetry Writing
                            </span>
                            <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-lg shadow-sm">
                                Skiing & Basketball
                            </span>
                            <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-lg shadow-sm">
                                Coding & Hardware Projects
                            </span>
                            <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-lg shadow-sm">
                                Reading & Personal Growth
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}