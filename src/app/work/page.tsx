import { Card } from "../ui/Card";
import { exile } from '@/app/ui/fonts';

export default function EduPage() {
    return (
        <div className="bg-white text-black px-6 md:px-10 py-16 max-w-screen-lg mx-auto space-y-12">
            < h1 className={`${exile.className} text-5xl font-bold text-center`
            }> My Work Experiences</h1 >
            <hr className="w-20 h-0.5 mx-auto border-0 bg-gray-300" />
            <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <h2 className="text-2xl font-semibold">Aspire Software – Software Engineering Intern</h2>
                    <span className="text-sm italic text-gray-500">May 2025 – June 2025</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                    <li>Completed a mentorship-focused internship in full-stack web development using Next.js, TypeScript, Supabase, Drizzle ORM, and Tailwind CSS.</li>
                    <li>Built five end-to-end applications including a ticket system, job tracker, task manager, and event dashboard.</li>
                    <li>Practiced React Hook Form + Zod validation, Supabase Auth, and tools like react-draggable and react-email.</li>
                    <li>Focused on modular architecture, authentication flows, and type-safe backend logic with Drizzle ORM migrations.</li>
                </ul>
            </Card>

            <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <h2 className="text-2xl font-semibold">Private Tutor</h2>
                    <span className="text-sm italic text-gray-500">Tutor — April 2023 – Present</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                    <li>Provided one-on-one tutoring for high school students in mathematics, physics, and chemistry.</li>
                    <li>Developed customized study plans to help students excel in official exams.</li>
                    <li>Compiled tailored study materials to simplify complex concepts.</li>
                </ul>
            </Card>

            <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <h2 className="text-2xl font-semibold">Harvard MUN Internship – The Council Leadership Academy</h2>
                    <span className="text-sm italic text-gray-500">Advisor — July 2023 – January 2024</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                    <li>Trained Harvard MUN 2024 delegates in public speaking, research, and negotiation.</li>
                    <li>Led weekly sessions on conference procedures and resolution drafting.</li>
                    <li>Reviewed position papers and speeches, providing detailed feedback.</li>
                </ul>
            </Card>

            <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <h2 className="text-2xl font-semibold">Colonie de Vacances Souraty</h2>
                    <span className="text-sm italic text-gray-500">Tutor — July & August 2024, 2025</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                    <li>Led groups of 10 children through activities including sports, DIY, and bonfires.</li>
                    <li>Learned leadership, communication, and crisis-handling in high-pressure settings.</li>
                </ul>
            </Card>

            <Card className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <h2 className="text-2xl font-semibold">Test Prep Institute (Certified by Kaplan)</h2>
                    <span className="text-sm italic text-gray-500">SAT Assistant Instructor — August 2023</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed space-y-2">
                    <li>Supported instruction in SAT Math and English classes.</li>
                    <li>Led solution walkthroughs, graded tests, and held office hours for extra help.</li>
                </ul>
            </Card>
        </div >
    );
}
