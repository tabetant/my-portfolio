import Link from 'next/link'

export default function ProjectsPage() {
    return (
        <div className='text-black flex flex-col justify-center'>
            <div>
                <h1>
                    <strong>
                        Food and Community Courtyard Initiative (APS111 course)
                    </strong>,
                    <em>Team Leader
                        <div>
                            September
                            2024
                            - December 2025
                        </div>
                    </em>
                </h1>
                <ul>
                    <li>
                        Led and facilitated structured team meetings, setting clear agendas and task assignments
                        to
                        ensure
                        efficiency
                    </li>
                    <li>
                        Applied problem-solving and team-building skills to navigate project challenges and
                        drive
                        successful
                        outcomes
                    </li>
                    <li>
                        Researched and implemented innovative design solutions to optimize community engagement
                        and
                        sustainability
                    </li>
                    <li>
                        Documented the project in IEEE format using Google Docs and Sheets, enhancing
                        professional
                        technical
                        writing skills
                    </li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>
                    <strong>
                        Bookend Design for Oversized Books (APS112 Course)
                    </strong>,
                    <em>Team Leader
                        <div>January 2025 -
                            April
                            2025</div>
                    </em>
                </h4>
                <ul>
                    <li>
                        Led a 6-member engineering team in developing a physical support system for 200-year-old
                        parish
                        registers stored in archival shelves, addressing client needs for preservation and
                        accessibility
                    </li>
                    <li>
                        Spearheaded the engineering design process including problem definition, stakeholder
                        analysis,
                        functional decomposition, objective ranking (pairwise comparison), constraint
                        specification,
                        and
                        environmental analysis
                    </li>
                    <li>
                        Facilitated idea generation using morphological charts, SCAMPER, and benchmarking to
                        generate 61
                        full solutions, followed by feasibility screening, multivoting, and selection tools
                        including a
                        graphical decision matrix and the Pugh method.
                    </li>
                    <li>
                        Managed team communication, client meetings, and technical documentation, ensuring
                        compliance
                        with
                        University of Toronto engineering standards and archival preservation policies.
                    </li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>
                    <strong>
                        Remi - GenAI Genesis Hackathon
                    </strong>,
                    <em>Full Stack Developer
                        <div>
                            March 2025
                        </div>
                    </em>
                </h4>
                <ul>
                    <li>Designed and built an AI-powered memory companion using Python (backend) and JavaScript
                        (frontend)
                        to support individuals with Alzheimer’s through personalized conversation and memory
                        games
                    </li>
                    <li>Integrated Gemini API for context-aware dialogue, Whisper for real-time speech-to-text,
                        and
                        ElevenLabs for human-like voice synthesis</li>
                    <li>Developed an adaptive memory game that adjusts difficulty based on user performance and
                        tracks
                        cognitive progress
                    </li>
                    <li>Created a doctor-facing dashboard (Figma prototype) to visualize patient engagement and
                        cognitive
                        trends over time</li>
                    <li>Prioritized accessibility and emotional design, focusing on a calm and intuitive
                        interface
                        for
                        users
                        with cognitive impairments
                    </li>
                    <li>
                        <Link
                            href="https://devpost.com/software/remi-a-friend-that-remembers"
                            target="_blank">
                            Check Remi Out
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>
                    <strong>
                        VoltsWagon - MakeUofT Hackathon
                    </strong>,
                    <em>Participant
                        <div>
                            March 2025
                        </div>
                    </em>
                </h4>
                <ul>
                    <li>Designed and prototyped a remote-controlled trash collecting vehicle using Arduino Uno,
                        Python
                        (pygame), and C++
                    </li>
                    <li>
                        Engineered a servo-driven clamp and integrated stepper motors, enabling precise object
                        collection
                        and release
                    </li>
                    <li>Overcame hardware challenges, including motor optimizations and circuit failures, to
                        build a
                        functional prototype in 24 hours</li>
                    <li>Strengthened expertise in embedded systems, Bluetooth communication, and
                        hardware-software
                        integration</li>
                    <li><a href="https://devpost.com/software/voltswagon" target="_blank">Check VoltsWagon
                        Out</a>
                    </li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4><strong>
                    Ace the Case - Deloitte & UTESCA Case Competition
                </strong>,
                    <em>Participant
                        <div>
                            March 2025
                        </div>
                    </em>
                </h4>
                <ul>
                    <li>
                        Conducted a strategic analysis on project management software solutions for a $3B smart
                        home manufacturing facility
                    </li>
                    <li>
                        Developed a data-driven recommendation using SWOT analysis, cost-benefit evaluation, and
                        stakeholder impact assessment
                    </li>
                    <li>
                        Presented findings to Deloitte professionals, demonstrating problem-solving,
                        communication, and analytical skills under time pressure.
                    </li>
                    <li>
                        Collaborated with a team to synthesize complex data into a compelling and structured
                        pitch
                    </li>
                </ul>
            </div>
        </div >

    )
}