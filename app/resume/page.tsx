import Head from "next/head";

export default function Resume() {
  return (
    <div className="min-h-screen font-sans">
      <Head>
        <title>Aswin K M - Resume</title>
        <meta name="description" content="Aswin K M's professional resume" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="border-b border-black dark:border-white pb-6 mb-6">
          <h1 className="text-4xl font-bold mb-2">ASWIN K M</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <p>Email: aswinkmanoj101@gmail.com</p>
            <p>Phone: +91-7907468285</p>
            <p>LinkedIn: linkedin.com/in/aswin-k-manoj</p>
            <p>GitHub: github.com/aswinkmanoj</p>
          </div>
        </header>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-black dark:border-white mb-4">
            EDUCATION
          </h2>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-bold">Lovely Professional University</h3>
              <p>2022 - 2026</p>
            </div>
            <p className="text-sm">Punjab, India</p>
            <p className="text-sm">
              Bachelor of Technology in Computer Science and Engineering
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-bold">GVHSS PUTHENCHIRA</h3>
              <p>2018 - 2020</p>
            </div>
            <p className="text-sm">Thrissur, Kerala, India</p>
            <p className="text-sm">12th in Science GPA: 95.96%</p>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-bold">GVHSS PUTHENCHIRA</h3>
              <p>2017 - 2018</p>
            </div>
            <p className="text-sm">Thrissur, Kerala, India</p>
            <p className="text-sm">10th GPA: CGPA: 9.9</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-black dark:border-white mb-4">
            EXPERIENCE
          </h2>

          <div>
            <div className="flex justify-between">
              <h3 className="font-bold">HackAI Hackathon</h3>
              <p>February 2025</p>
            </div>
            <p className="text-sm mb-2">
              Remote | Software Developer (Blockchain & AI)
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Engineered a blockchain-powered pension distribution system
                using React.js, Solidity, and Web3.js, ensuring secure and
                tamper-proof transactions.
              </li>
              <li>
                Integrated an AI-driven fraud detection mechanism to identify
                suspicious activities and enhance trust in the system.
              </li>
              <li>
                Designed and deployed smart contracts to automate pension
                distribution, reducing reliance on manual processes and
                improving efficiency.
              </li>
              <li>
                Collaborated with a cross-functional team to build a scalable
                and user-friendly platform under tight hackathon deadlines.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b dark:border-white border-black mb-4">
            SKILLS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-1">Programming Languages:</h3>
              <p>JavaScript, Python, C++</p>
            </div>

            <div>
              <h3 className="font-bold mb-1">Frameworks:</h3>
              <p>React.js, Next.js, Node.js, React Native, Flutter</p>
            </div>

            <div>
              <h3 className="font-bold mb-1">Tools:</h3>
              <p>
                Web3.js, MongoDB, Tailwind CSS, Express.js, SQL, Firebase,
                Supabase, Auth0
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-1">Libraries:</h3>
              <p>Three.js, Framer Motion, Reanimated Library</p>
            </div>

            <div>
              <h3 className="font-bold mb-1">Soft Skills:</h3>
              <p>Communication, Problem Solving, Teamwork, Adaptability</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold dark:border-white  border-b border-black mb-4">
            PROJECTS
          </h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <div>
              <h3 className="font-bold mb-1">Pick Me Some</h3>
              <p className="text-sm mb-2">
                React.js, Framer Motion, Tailwind CSS, Lenis, Axios
              </p>
              <p className="mb-2">
                A dynamic web application that helps users discover and curate
                their next movie or TV show watch list through an engaging,
                Tinder-like interface.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold">Carousel Showcase:</span>{" "}
                  Browse through popular and top-rated movies and TV shows in a
                  sleek carousel display.
                </li>
                <li>
                  <span className="font-semibold">Detailed Views:</span> Click
                  on any title to view comprehensive information about the movie
                  or show.
                </li>
                <li>
                  <span className="font-semibold">Swipe Interface:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      &quot;Pick Me a Movie&quot; - Swipe right to add movies to
                      your watchlist, left to skip.
                    </li>
                    <li>
                      &quot;Pick Me a Show&quot; - Same intuitive interface for
                      TV shows.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Smooth User Experience:</span>{" "}
                  Clean animations powered by Framer Motion, smooth scrolling
                  with Lenis, and responsive design with Tailwind CSS.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="font-bold mb-1">Design Challenge</h3>
              <p className="text-sm mb-2">
                React Native, Flutter, UI Design, Redux, Provider, Mobile
                Development
              </p>
              <p className="mb-2">
                Recreated multiple Dribbble UI designs as fully functional
                mobile applications using React Native and Flutter, achieving
                pixel-perfect replication with smooth animations and intuitive
                user interfaces.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Implemented Redux (React Native) and Provider (Flutter) for
                  state management.
                </li>
                <li>
                  Utilized component-based architecture and scalable design
                  patterns.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <h3 className="font-bold mb-1">Task Manager</h3>
              <p className="text-sm mb-2">
                Next.js, Express.js, Node.js, MongoDB, Tailwind CSS, REST API,
                User Authentication
              </p>
              <p className="mb-2">
                Developed a full-stack task manager application using Next.js,
                Express.js, Node.js, and MongoDB.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Implemented user authentication and REST APIs for task CRUD
                  operations.
                </li>
                <li>
                  Styled the application with Tailwind CSS, creating a modern
                  and responsive interface.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
