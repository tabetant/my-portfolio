import Image from 'next/image'
import { exile } from '@/app/ui/fonts';

export default function AboutPage() {
    return (
        <div className='flex flex-col text-black items-center'>
            <div className='flex flex-row '>
                <div className='flex flex-col justify-start md:w-1/2'>
                    <div>
                        <h1
                            className={`${exile.className} text-black text-center text-5xl mx-5`}
                        >About Me
                        </h1>
                        <hr />
                        <p className='text-xl mx-5 '>
                            I am a Computer Engineering student at the University of Toronto with a strong passion for
                            leveraging technology to solve real-world challenges. With a foundation in programming, hardware
                            systems, and problem-solving, I thrive in environments where I can apply analytical thinking and
                            creativity. Through hackathons, academic projects, and leadership experiences, I have developed
                            expertise in embedded systems, system design, and project management. I am eager to continue
                            refining my technical and strategic skills while contributing to innovative and impactful solutions.
                        </p>
                    </div>
                    <div className="my-5">
                        <h2 className={` ${exile.className} text-black text-center text-5xl mx-5`}>Skills</h2>
                        <hr />
                        <ul className='text-xl mx-5 '>
                            <li><strong>Programming:</strong> Python, C, C++, Arduino</li>
                            <li><strong>Hardware & Embedded Systems:</strong> Arduino Uno, Microcontrollers, Circuit Design
                            </li>
                            <li><strong>Software Tools:</strong> Microsoft Office Suite, Google Docs, Excel</li>
                            <li><strong>Leadership & Problem-Solving:</strong> Advanced Leadership Certification, Conflict
                                Resolution, Public Speaking</li>
                        </ul>
                    </div>
                </div>
                <div className='relative aspect-[4/3] w-full md:w-[60%] h-auto rounded-xl overflow-hidden'>
                    <Image fill className='object-cover' src='/images/pianoedited.jpg' alt='piano' />
                </div>
            </div>
            <div className='flex flex-row my-5 justify-start w-full'>
                <div className='mx-5'>
                    <h2 className='text-5xl'>Languages</h2>
                    <div className='text-center my-5'>
                        <ul className='text-3xl'>
                            <li className='bg-red-500'>🇨🇦 English</li>
                            <li className='bg-blue-500'>🇫🇷 French</li>
                            <li className='bg-green-500'>🇱🇧 Arabic</li>
                            <li className='bg-yellow-500'>🇪🇸 Spanish</li>
                        </ul>
                    </div>
                </div>
                <div className='mx-5'>
                    <h2 className='text-5xl'>Hobbies & Interests</h2>
                    <div>
                        <ul className='text-2xl'>
                            <li>Song & Poetry Writing</li>
                            <li>Skiing & Basketball</li>
                            <li>Coding & Hardware Projects</li>
                            <li>Reading & Personal Growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}