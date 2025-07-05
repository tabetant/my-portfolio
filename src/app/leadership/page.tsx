'use client';
import { Card } from '../ui/Card';
import { exile } from '@/app/ui/fonts';

export default function EduPage() {
    return (
        <div className='bg-white text-black px-6 md:px-10 py-16 max-w-screen-lg mx-auto space-y-12'>
            <h1 className={`${exile.className} text-5xl font-bold text-center`}>Leadership & Volunteering</h1>
            <hr className='w-20 h-0.5 mx-auto border-0 bg-gray-300' />

            {/* Leadership Section */}
            <div className='space-y-8'>
                <h2 className='text-3xl font-semibold text-center'>Academic & Leadership Experiences</h2>

                <Card className='p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition'>
                    <div className='flex flex-col md:flex-row justify-between items-start mb-3'>
                        <h2 className='text-2xl font-semibold'>Harvard Model United Nations</h2>
                        <span className='text-sm italic text-gray-500'>Delegate — May 2022 – Jan 2023</span>
                    </div>
                    <ul className='list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2'>
                        <li>Represented Denmark in the Special Political and Decolonization Committee.</li>
                        <li>Earned a “Diplomatic Commendation” for diplomacy and negotiation.</li>
                        <li>Trained in research, speechwriting, and UN procedures.</li>
                    </ul>
                </Card>

                <Card className='p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition'>
                    <div className='flex flex-col md:flex-row justify-between items-start mb-3'>
                        <h2 className='text-2xl font-semibold'>Loudoun International Youth Leadership Summit</h2>
                        <span className='text-sm italic text-gray-500'>Student — March 2023</span>
                    </div>
                    <ul className='list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2'>
                        <li>Recognized as an “Outstanding Delegate” among global peers.</li>
                        <li>Attended talks with prominent leaders and changemakers.</li>
                    </ul>
                </Card>

                <Card className='p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition'>
                    <div className='flex flex-col md:flex-row justify-between items-start mb-3'>
                        <h2 className='text-2xl font-semibold'>John C. Maxwell Leadership Program</h2>
                        <span className='text-sm italic text-gray-500'>Student — Dec 2021 – May 2022</span>
                    </div>
                    <ul className='list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2'>
                        <li>Completed courses in life skills, leadership, and public speaking.</li>
                        <li>Practiced negotiation, teamwork, and emotional intelligence.</li>
                    </ul>
                </Card>
            </div>

            {/* Volunteering Section */}
            <div className='space-y-8'>
                <h2 className='text-3xl font-semibold text-center'>Volunteering Experiences</h2>

                <Card className='p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition'>
                    <div className='flex flex-col md:flex-row justify-between items-start mb-3'>
                        <h2 className='text-2xl font-semibold'>Les Scouts du Liban</h2>
                        <span className='text-sm italic text-gray-500'>Boy Scout — Sept 2016 – Present</span>
                    </div>
                    <ul className='list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2'>
                        <li>Led a troop of scouts, organized events, and taught outdoor survival skills.</li>
                        <li>Completed 80+ hours of service through fundraising and community cleanups.</li>
                        <li>Gained resilience, teamwork, and leadership in remote camping settings.</li>
                    </ul>
                </Card>

                <Card className='p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition'>
                    <div className='flex flex-col md:flex-row justify-between items-start mb-3'>
                        <h2 className='text-2xl font-semibold'>Order of Malta</h2>
                        <span className='text-sm italic text-gray-500'>Volunteer — July 2023</span>
                    </div>
                    <ul className='list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2'>
                        <li>Provided full-time care to a disabled person during a week-long village camp.</li>
                        <li>Strengthened empathy, patience, and communication through hands-on service.</li>
                    </ul>
                </Card>

                <Card className='p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition'>
                    <div className='flex flex-col md:flex-row justify-between items-start mb-3'>
                        <h2 className='text-2xl font-semibold'>Safe Space Drop-In</h2>
                        <span className='text-sm italic text-gray-500'>Volunteer — Nov 2024 – Present</span>
                    </div>
                    <ul className='list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2'>
                        <li>Serve meals to community members at monthly drop-in events.</li>
                        <li>Foster meaningful conversations with volunteers and visitors alike.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}