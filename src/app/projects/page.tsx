'use client';
import { Card } from '../ui/Card';
import Link from 'next/link';
import { exile } from '@/app/ui/fonts';

export default function ProjectsPage() {
    return (
        <div className="bg-white text-black px-6 md:px-10 py-16 max-w-screen-lg mx-auto space-y-12">
            {/* Section Heading */}
            <h1 className={`${exile.className} text-5xl font-bold text-center`}>Projects & Experiences</h1>
            <hr className="w-20 h-0.5 mx-auto border-0 bg-gray-300" />

            {/* Project List */}
            <div className="space-y-8">
                {/* Single Project Card (repeat) */}
                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Customer Support Ticket System</h2>
                        <span className="text-sm italic text-gray-500">Full Stack Developer — May 2025 – June 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Built a ticketing app with draggable status-based columns and email notifications.</li>
                        <li>Implemented file uploads, Zod validation, Supabase storage, and react-email.</li>
                        <li>Practiced client-side rendering and secure Supabase CRUD using Drizzle ORM.</li>
                        <li><Link className='hover:text-blue-500' href='https://github.com/tabetant/cs-ticket-system'>Check out the CS Ticket System</Link></li>
                    </ul>
                </Card>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Job Application Tracker</h2>
                        <span className="text-sm italic text-gray-500">Full Stack Developer — May 2025 – June 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Tracked job applications with file uploads, inline editing, and Zod-based filtering.</li>
                        <li>Used Supabase and Drizzle to persist and retrieve user state in real time.</li>
                        <li><Link className='hover:text-blue-500' href='https://github.com/tabetant/job_app_manager'>Check out the Job App Tracker</Link></li>
                    </ul>
                </Card>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Task Manager</h2>
                        <span className="text-sm italic text-gray-500">Full Stack Developer — May 2025 – June 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Practiced CRUD fundamentals and Drizzle-based data persistence using tasks and checkboxes.</li>
                        <li>Built from scratch with minimal layout and used server actions for task completion toggles.</li>
                        <li><Link href='https://github.com/tabetant/task_manager' className='hover:text-blue-50'>Check out the Task Manager</Link></li>
                    </ul>
                </Card>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Food & Community Courtyard Initiative</h2>
                        <span className="text-sm italic text-gray-500">Team Leader — Sept 2024 – Dec 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Led a team to design a courtyard space combining sustainability, culture, and food access.</li>
                        <li>Applied structured teamwork and professional documentation using IEEE formatting.</li>
                    </ul>
                </Card>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition mt-5">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Bookend Design for Oversized Books (APS112)</h2>
                        <span className="text-sm italic text-gray-500">Team Leader — Jan 2025 – Apr 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Led a 6-member team to design a support system for 200-year-old parish registers in archival storage.</li>
                        <li>Oversaw the engineering process from stakeholder analysis to feasibility screening and solution selection.</li>
                        <li>Managed client communication, technical documentation, and adherence to archival preservation standards.</li>
                    </ul>
                </Card>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Remi – GenAI Genesis Hackathon</h2>
                        <span className="text-sm italic text-gray-500">Full Stack Developer — March 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Developed a memory aid tool for Alzheimer's patients using Gemini AI and ElevenLabs.</li>
                        <li>Used Whisper for real-time speech, and Figma for a caregiver dashboard prototype.</li>
                        <li>
                            <Link href="https://devpost.com/software/remi-a-friend-that-remembers" target="_blank" className="hover:text-blue-600">
                                Check Remi Out
                            </Link>
                        </li>
                    </ul>
                </Card>


                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">VoltsWagon – MakeUofT Hackathon</h2>
                        <span className="text-sm italic text-gray-500">Participant — February 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Designed and built a Bluetooth-controlled trash-collecting vehicle using Arduino Uno, C++, and Python (pygame).</li>
                        <li>Implemented servo-driven clamps and stepper motors for accurate object handling.</li>
                        <li>Resolved hardware failures under time pressure, delivering a working prototype in under 24 hours.</li>
                        <li>
                            <Link href="https://devpost.com/software/voltswagon" target="_blank" className="hover:text-blue-600">
                                Check VoltsWagon Out
                            </Link>
                        </li>
                    </ul>
                </Card>




            </div>
        </div>
    );
}
