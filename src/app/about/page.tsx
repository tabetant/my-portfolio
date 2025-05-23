import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className='flex flex-col text-black items-center'>
            <div className='flex flex-row '>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h1
                            className='text-black text-center text-5xl italic mx-5'
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
                        <h2 className='text-black text-center text-5xl italic mx-5'>Skills</h2>
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
                <Image className='rounded-xl mx-5' width={500} height={300} src='/images/pianoedited.jpg' alt='piano' />
            </div>
            <div className='flex flex-row my-5'>
                <div className='mx-5'>
                    <h2 className='text-5xl'>Languages</h2>
                    <div>
                        <ul className='text-2xl'>
                            <li>English</li>
                            <li>French</li>
                            <li>Arabic</li>
                            <li>Spanish</li>
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