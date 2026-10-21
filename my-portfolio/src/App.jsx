import React from 'react';
import { 
  Globe, 
  Cpu, 
  Layers, 
  Database, 
  Terminal, 
  ExternalLink,
  Mail,
  ChevronRight
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- DATA ---
const projects = [
  {
    title: 'Kisan Vaani',
    role: 'AI Agricultural Platform',
    desc: 'A full-stack platform providing farmers with real-time market data, localized weather forecasts, and AI-driven crop diagnostics.',
    tech: ['React', 'Node.js', 'Gemini AI'],
    link: 'https://kisan-vani-client.onrender.com',
    icon: <Globe className="h-6 w-6 text-emerald-500" />,
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-200 hover:border-emerald-400'
  },
  {
    title: 'AI Interview Copilot',
    role: 'Autonomous Interview Agent',
    desc: 'An AI-powered mock interview platform that parses resumes, generates context-aware technical questions, and streams live voice.',
    tech: ['React', 'WebRTC', 'Gemini API'],
    link: 'https://interview-ai-client-1mwd.onrender.com/login',
    icon: <Cpu className="h-6 w-6 text-blue-500" />,
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-200 hover:border-blue-400'
  },
  {
    title: 'Social Media App',
    role: 'Full Stack Social Platform',
    desc: 'A dynamic, real-time social networking application allowing users to share updates, interact with content, and connect.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://social-app-chi-peach.vercel.app',
    icon: <Layers className="h-6 w-6 text-purple-500" />,
    color: 'from-purple-500/10 to-pink-500/10 border-purple-200 hover:border-purple-400'
  },
  {
    title: 'E-commerce Platform',
    role: 'Digital Storefront',
    desc: 'A robust digital storefront featuring secure payment processing, shopping cart state management, and an intuitive UI.',
    tech: ['React', 'Redux', 'Express'],
    link: 'https://ecommerce-website-frontend-hhuq.onrender.com',
    icon: <Database className="h-6 w-6 text-orange-500" />,
    color: 'from-orange-500/10 to-amber-500/10 border-orange-200 hover:border-orange-400'
  },
  {
    title: 'Universal Auth Portal',
    role: 'Security Infrastructure',
    desc: 'A centralized, secure authentication gateway featuring JWT session management and role-based access control.',
    tech: ['React', 'JWT', 'Tailwind CSS'],
    link: 'https://authentication-app-clientt.onrender.com',
    icon: <Terminal className="h-6 w-6 text-rose-500" />,
    color: 'from-rose-500/10 to-red-500/10 border-rose-200 hover:border-rose-400'
  }
];

const skills = [
  "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", 
  "HTML5 & CSS3", "Tailwind CSS", "REST APIs", "Google Gemini API", "Git & GitHub"
];

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-blue-600">
        Portfolio.
      </div>
      <div className="hidden md:flex gap-8">
        {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-slate-600 hover:text-blue-600 font-bold transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full">
    {/* Soft Pastel Background Glows */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-left">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-blue-600 font-bold text-xl mb-4 tracking-wide uppercase">
          Hello, I'm
        </p>
        
        {/* Name: Made strictly text-slate-900 so it never washes out */}
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-2 tracking-tight">
          Yashdeep
        </h1>
        
        {/* Title: Replaced gradient with solid blue for maximum visibility */}
        <h2 className="text-4xl md:text-5xl font-black text-blue-600 mb-6 pb-2">
          Full Stack Web Developer
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
          I craft high-performance, beautiful digital experiences that live on the web. Passionate about building scalable applications and intuitive interfaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a href="#work" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2">
            See My Work <ChevronRight className="w-5 h-5" />
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full bg-white text-blue-600 border-2 border-blue-500 font-bold hover:bg-blue-50 hover:scale-105 transition-all">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Restored exact requested image path */}
          <img 
            src="/profile.jpg"
            alt="Yashdeep Profile" 
            className="relative w-72 h-72 md:w-96 md:h-100 rounded-full object-cover border-8 border-white shadow-2xl z-10 bg-slate-200"
          />
        </div>
      </div>

    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white/40 relative z-10 backdrop-blur-sm w-full">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-4">About Me</h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8" />
      <p className="text-lg text-slate-600 leading-relaxed">
        I am a dedicated Full Stack Developer with a strong foundation in modern web technologies. I specialize in building responsive, user-centric applications using React, Node.js, and MongoDB. Whether I'm developing an AI-powered agricultural platform or engineering real-time communication tools, I am driven by the challenge of turning complex problems into elegant, scalable solutions.
      </p>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-4">My Skills</h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-12" />
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-6 py-3 bg-white text-slate-700 font-bold rounded-full shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 hover:text-purple-600 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className={`group rounded-3xl bg-gradient-to-br ${project.color} bg-white/60 backdrop-blur-xl border p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-left`}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
        {project.icon}
      </div>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full text-slate-400 hover:text-blue-500 hover:shadow-md transition-all"
        title="View Live Project"
      >
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>
    
    <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
    <p className="text-blue-600 text-sm font-black tracking-wide uppercase mb-4">{project.role}</p>
    <p className="text-slate-600 leading-relaxed mb-8 flex-1">
      {project.desc}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((t, i) => (
        <span key={i} className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-white rounded-full shadow-sm">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Work = () => (
  <section id="work" className="py-24 bg-white/40 relative z-10 backdrop-blur-sm w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Featured Work</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 relative z-10 w-full">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-6">Let's Connect</h2>
      <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
      </p>
      
      <div className="flex justify-center gap-6 mb-16">
        <a href="https://github.com/yashdeep0904" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full text-slate-600 hover:text-purple-600 hover:-translate-y-1 hover:shadow-lg transition-all shadow-sm border border-slate-100">
          <FaGithub className="w-7 h-7" />
        </a>
        <a href="https://www.linkedin.com/in/yashdeep0904" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full text-slate-600 hover:text-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all shadow-sm border border-slate-100">
          <FaLinkedin className="w-7 h-7" />
        </a>
        <a href="mailto:dhankharyashdeep@gmail.com" className="p-4 bg-white rounded-full text-slate-600 hover:text-pink-600 hover:-translate-y-1 hover:shadow-lg transition-all shadow-sm border border-slate-100">
          <Mail className="w-7 h-7" />
        </a>
      </div>
    </div>
  </section>
);

export default function Portfolio() {
  return (
    // Forced w-full, p-0, m-0, and !max-w-none to break out of Vite's default CSS box
    <div className="min-h-screen w-full !max-w-none m-0 p-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 font-sans selection:bg-purple-200 text-slate-800 scroll-smooth overflow-x-hidden text-left">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Work />
      </main>
      <Contact />
      
      <footer className="py-8 text-center text-slate-500 text-sm font-bold bg-white/50 border-t border-slate-200 backdrop-blur-md w-full">
        <p>© {new Date().getFullYear()} Yashdeep. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}