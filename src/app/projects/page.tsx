'use client';
import { Card } from '../ui/Card';
import Link from 'next/link';
import { exile } from '@/app/ui/fonts';
import { useState } from 'react';
export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    return (
        <div className="bg-white text-black px-6 md:px-10 py-16 max-w-screen-lg mx-auto space-y-12">
            <h1 className={`${exile.className} text-5xl font-bold text-center`}>Projects & Experiences</h1>
            <hr className="w-20 h-0.5 mx-auto border-0 bg-gray-300" />

            {/* Technical Projects Section */}
            <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-center">Technical Coding Projects</h2>

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
                        <li><Link className='hover:text-blue-500' href='https://github.com/tabetant/task_manager'>Check out the Task Manager</Link></li>
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
                            <Link href='https://github.com/ryabalta/Remi' target="_blank" className="hover:text-blue-600">
                                Check Remi Out
                            </Link>
                        </li>
                        <li>
                            <Link href="https://devpost.com/software/remi-a-friend-that-remembers" target="_blank" className="hover:text-blue-600">
                                Watch us Demo Remi
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
                        <li>Designed a Bluetooth-controlled trash-collecting car using Arduino, Python, and C++.</li>
                        <li>Integrated servo-driven clamps, stepper motors, and Bluetooth communication.</li>
                        <li>
                            <Link href='https://github.com/oHqrizon/MakeUofT' target='_blank' className='hover:text-blue-600'>
                                Check VoltsWagon out
                            </Link>
                        </li>
                        <li>
                            <Link href="https://devpost.com/software/voltswagon" target="_blank" className="hover:text-blue-600">
                                Watch us Demo VoltsWagon
                            </Link>
                        </li>
                    </ul>
                </Card>
            </div>

            {/* Design / Leadership */}
            <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-center">Design & Leadership</h2>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Bookend Design for Oversized Books (APS112)</h2>
                        <span className="text-sm italic text-gray-500">Team Leader — Jan 2025 – Apr 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Led a team to design a preservation system for historical parish registers.</li>
                        <li>Directed a structured engineering process from stakeholder mapping to solution selection.</li>
                        <li>Managed documentation, client meetings, and compliance with archival standards.</li>
                    </ul>
                </Card>

                <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                        <h2 className="text-2xl font-semibold">Food & Community Courtyard Initiative</h2>
                        <span className="text-sm italic text-gray-500">Team Leader — Sept 2024 – Dec 2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Led a design team creating an inclusive, sustainable courtyard space at UofT.</li>
                        <li>Applied professional project planning, stakeholder engagement, and IEEE-style documentation.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}
