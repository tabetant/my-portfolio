import { exile } from '@/app/ui/fonts';
import Image from 'next/image'

export default function EduPage() {
    return (
        <>
            <section className="w-full bg-white text-black py-16 px-6 md:px-10 max-w-screen-lg mx-auto">
                <h1 className={`${exile.className} text-5xl text-center font-bold mb-6`}>Education</h1>
                <hr className="w-1/4 mx-auto border-gray-300 mb-12" />

                {/* Collège Section */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-2xl font-semibold">Collège Louise Wegmann, Badaro, Lebanon</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            French Baccalaureate Candidate; Specialty in: Mathematics, Physics and Chemistry, English.<br />
                            Overall GPA: 18.7/20 (Academic Year 2023–2024); Ranking: <strong>2/90</strong>
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/3 h-[200px] rounded-xl overflow-hidden">
                        <Image src="/images/clw.png" alt="CLW logo" fill className="object-cover" />
                    </div>
                </div>

                {/* UofT Section */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-2xl font-semibold">University of Toronto, Toronto, Canada</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Bachelor’s of Applied Science in Electrical and Computer Engineering + PEY Co-op<br />
                            Relevant Courses: Computer Fundamentals, Electrical Fundamentals, Introduction to Electrical and Computer Engineering<br />
                            GPA: <strong>3.77/4.0</strong> | Dean’s List, Academic Year 2024–2025
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/3 h-[150px] rounded-xl overflow-hidden bg-white">
                        <Image
                            src="/images/uoftalt.png"
                            alt="UofT logo"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}