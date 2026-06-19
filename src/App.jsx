import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Bug, 
  Download, 
  ArrowRight, 
  Terminal, 
  Settings, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Menu, 
  X, 
  ExternalLink, 
  Code, 
  ClipboardCheck, 
  Database, 
  Globe, 
  CheckSquare, 
  ShieldAlert, 
  FileText, 
  Cpu, 
  GitBranch,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const WhatsappIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
  </svg>
);

const MailIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(Scrolled => false);
  const [activeSection, setActiveSection] = useState("home");
  const [copiedText, setCopiedText] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [showToast, setShowToast] = useState(false);
  
  const projectsScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "experience", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 120;
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    const cvContent = `SAVINDI THARUKA - QUALITY ASSURANCE ENGINEER
        
About Me:
Detail-oriented Quality Assurance Engineer passionate about finding bugs, optimizing performance, and delivering seamless digital experiences.

Education:
- Sri Lanka Institute of Information Technology (SLIIT) (2022 - 2026)
  BSc(Hons) in Information Technology
- Aquinas College of Higher Studies
  English Language & Literature
- Holy Family Balika Maha Vidyalaya Wennappuwa
  G.C.E. Advanced Level - 2021 (Physical Science)
  G.C.E. Ordinary Level - 2017 (Passed with 8A, 1B)

Testing Skills:
- Manual: Regression, Bug lifecycle, Test Cases, SDLC/STLC
- Automation: Selenium, Playwright
- API & Databases: Postman, SQL`;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = 'Savindi_Tharuka_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill out required fields." });
      setShowToast(true);
      return;
    }
    setFormStatus({ type: "sending", message: "Sending your message..." });
    try {
      const response = await fetch("https://formsubmit.co/ajax/savinditharu611@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          message: formData.message
        })
      });
      if (response.ok) {
        setFormStatus({ type: "success", message: "Message sent! FormSubmit will forward it to savinditharu611@gmail.com." });
        setShowToast(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus({ type: "error", message: "Failed to send message. Please try again or email directly." });
        setShowToast(true);
      }
    } catch (error) {
      setFormStatus({ type: "error", message: "An error occurred. Please try again." });
      setShowToast(true);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const scrollProjects = (direction) => {
    if (projectsScrollRef.current) {
      const { scrollLeft, clientWidth } = projectsScrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      projectsScrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact Me", id: "contact" }
  ];

  const skillCategories = [
    {
      title: "Testing & QA",
      icon: Shield,
      skills: [
        "Manual Testing",
        "Test Case Design",
        "SDLC & SLTC",
        "Defect Reporting",
        "Agile",
        "Regression Testing"
      ]
    },
    {
      title: "Languages",
      icon: Code,
      skills: [
        "HTML",
        "CSS",
        "C",
        "JavaScript",
        "Java",
        "Python",
        "TypeScript"
      ]
    },
    {
      title: "Technologies & Tools",
      icon: Settings,
      skills: [
        "VS Code",
        "Android Studio",
        "Postman",
        "Figma",
        "GitHub",
        "Bitbucket",
        "Playwright",
        "Selenium",
        "Jira"
      ]
    },
    {
      title: "Frameworks & Concepts",
      icon: Cpu,
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "OOP"
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        "MySQL",
        "MongoDB",
        "SQLite"
      ]
    }
  ];

  const softSkills = [
    "Analytical Thinking",
    "Problem Solving",
    "Attention to Detail",
    "Team Collaboration",
    "Communication Skills",
    "Time Management",
    "Continuous Learning"
  ];

  const projects = [
    {
      title: "Playwright Document Converter",
      description: "Automated testing suite built with Playwright to validate document conversion processes and rendering accuracy.",
      tools: ["Playwright", "JavaScript", "HTML"],
      github: "https://github.com/Savindi-Tharuka/Playwright_DocumentConverter"
    },
    {
      title: "Cinnamon Harvest Scan",
      description: "Mobile grading application front-end built to classify cinnamon harvests using scanning flows.",
      tools: ["TypeScript", "React Native", "Expo", "Python"],
      github: "https://github.com/Savindi-Tharuka/Cinnamon_Harvest_Scan"
    },
    {
      title: "CinnamonSri Web Tracking",
      description: "Ceylon cinnamon production management web client mapping distribution batches, storage, and processing milestones.",
      tools: ["HTML", "CSS", "JavaScript"],
      github: "https://cinnamon-sri-web-three.vercel.app/#resources"
    },
    {
      title: "Hospital Management System",
      description: "Integrated hospital platform managing patient scheduling, billing workflows, and diagnostic records.",
      tools: ["Node.js", "Express", "API Gateway", "Swagger"],
      github: "https://github.com/Savindi-Tharuka/Hospital_Management_System"
    },
    {
      title: "Seat Reservation System",
      description: "Interactive booking database interface designed for bus seating layouts and reservation scheduling.",
      tools: ["React JS", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/Savindi-Tharuka/seat_reservation_system"
    },
    {
      title: "EcoWashR Car Wash System",
      description: "Car washing service platform designed to book, monitor, and execute cleaning operations.",
      tools: ["Java", "Android Studio", "Firebase"],
      github: "https://github.com/Savindi-Tharuka/EcoWashR-Repo"
    },
    {
      title: "EasyRent Property Listing",
      description: "Web platform for renting and hosting properties with advanced search and reservation checkouts.",
      tools: ["React", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/Savindi-Tharuka/EasyRent"
    },
    {
      title: "skillLink Freelancer Platform",
      description: "Community and service platform designed to match local freelancers with potential clients.",
      tools: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/Savindi-Tharuka/skillLink"
    },
    {
      title: "Note App",
      description: "Mobile application with CRUD operations to create, edit, and persist personal notes.",
      tools: ["Kotlin", "Android Studio", "SQLite"],
      github: "https://github.com/Savindi-Tharuka/Note-App"
    },
    {
      title: "VIVEE E-Commerce Website",
      description: "Female fashion brand website prototype designed in Figma using user-centric layout principles.",
      tools: ["Figma"],
      github: "https://www.figma.com/design/Ae7iPeiyzdkw4W7iMDkQc8/VIVEE-E-commerce-website?node-id=0-1&p=f"
    },
    {
      title: "Human Computer Interaction UX",
      description: "User experience research project applying usability testing and wireframes to interactive Figma designs.",
      tools: ["Figma"],
      github: "https://www.figma.com/proto/sr4R4amCijnjvOcUfrX2RB/Interactix?node-id=137-161&node-type=canvas&t=JFCtvWvvavq6Nafa-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=137%3A161"
    },
    {
      title: "Task Management App",
      description: "Automated mobile utility designed to organize, prioritize, and track tasks for workflows.",
      tools: ["Kotlin", "Android Studio"],
      github: "https://github.com/Savindi-Tharuka/Task-Management"
    }
  ];

  const education = [
    {
      type: "University",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2022 - 2026",
      title: "BSc(Hons) in Information Technology",
      specialization: "Specializing in Information Technology",
      iconType: "uni"
    },
    {
      type: "Higher Studies",
      institution: "Aquinas College of Higher Studies",
      period: "Language Studies",
      title: "English Language & Literature",
      specialization: "",
      iconType: "college"
    },
    {
      type: "Secondary School",
      institution: "Holy Family Balika Maha Vidyalaya Wennappuwa",
      period: "Secondary Education",
      title: "",
      specialization: "",
      milestones: [
        {
          title: "Passed G.C.E. Advanced Level - 2021",
          detail: "Physical Science stream (Combined Maths, Physics, Chemistry)"
        },
        {
          title: "Passed G.C.E. Ordinary Level - 2017",
          detail: "Passed with outstanding results (8A, 1B)"
        }
      ],
      iconType: "school"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 selection:bg-brand-accentPurple selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/85 backdrop-blur-md border-b border-purple-950/50 py-4 shadow-sm shadow-black/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className={`text-sm font-bold tracking-wider uppercase transition-colors duration-200 relative py-1 hover:text-brand-accentPurple ${activeSection === item.id ? 'text-brand-accentPurple' : 'text-slate-400'}`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accentPurple rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="w-full flex justify-between md:hidden">
            <span className="font-outfit font-bold text-lg tracking-wider text-white">PORTFOLIO</span>
            <button className="text-white hover:text-brand-accentPurple transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-purple-900/50 py-6 px-6 flex flex-col gap-4 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className={`text-left text-base font-semibold py-2 transition-colors ${activeSection === item.id ? 'text-brand-accentPurple' : 'text-slate-300'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-36 pb-24 md:py-48 overflow-hidden">
        {/* Radial Background Glows */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-accentPurple/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-100px] w-[350px] h-[350px] bg-brand-accentPurpleLight/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Left: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-brand-accentPurple via-white to-brand-accentPurple bg-clip-text text-transparent">Savindi Tharuka</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-slate-200">Quality Assurance</h2>
            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              Passionate about finding bugs, optimizing performance, and ensuring seamless digital experiences. Dedicated to delivering high-quality, reliable software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button 
                onClick={handleDownloadCV} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accentPurple hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(168,85,247,0.4)] cursor-pointer"
              >
                <Download size={18} /> Download CV
              </button>
              <button 
                onClick={() => smoothScroll("contact")} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-purple-900/40 text-slate-100 font-semibold rounded-xl transition-all duration-300 cursor-pointer"
              >
                Contact Me <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Hero Right: Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[410px] md:h-[410px] flex items-center justify-center animate-float-slow">
              {/* Outer pulsing ring glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-accentPurple to-brand-accentPurpleLight opacity-15 blur-2xl animate-pulse-ring"></div>
              
              {/* Profile Image container */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-[360px] md:h-[360px] rounded-full p-1 bg-gradient-to-br from-brand-accentPurple via-purple-900/40 to-slate-950 overflow-hidden shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden flex items-center justify-center border-4 border-slate-950">
                  <img 
                    src="/profile.jpg?v=2" 
                    alt="Savindi Tharuka Profile" 
                    className="w-full h-full object-cover scale-100"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-brand-accentPurple">
                          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 21a6 6 0 0 0-12 0"/>
                            <circle cx="12" cy="10" r="4"/>
                            <path d="M12 2v2"/>
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            About Me
          </h2>

          <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 max-w-4xl mx-auto mb-16 relative overflow-hidden group">
            {/* Ambient subtle glow background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accentPurple/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold text-white border-b border-purple-900/30 pb-4 font-outfit">
                Professional Overview & Focus
              </h3>
              
              <p className="text-slate-200 leading-relaxed text-base md:text-lg font-medium">
                I am an IT undergraduate with a strong passion for Software Quality Assurance and improving overall software quality. My core focus lies in ensuring that digital products are functional, reliable, and run seamlessly.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                I am well-versed in essential software testing concepts, manual testing, test case design, and defect reporting, along with practical exposure to modern test automation frameworks. With a detail-oriented mindset and analytical problem-solving abilities, I thrive in Agile team environments, bridging the gap between requirements and polished releases.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                Beyond my primary focus in QA, I also have experience in software development and UI/UX design. This cross-functional understanding allows me to appreciate the broader scope of product development, collaborate effectively with developers, and view system quality through the eyes of the end-user.
              </p>
            </div>
          </div>

          {/* Unified Overall Skills Grid */}
          <div className="pt-8 border-t border-purple-900/30">
            <h3 className="text-2xl font-bold text-white font-outfit text-center mb-8">
              Technical & Testing Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={index} 
                    className={`glass-panel p-6 rounded-3xl flex flex-col hover:border-brand-accentPurple/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${
                      index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    {/* Glowing card border and ambient light effect */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accentPurple/5 rounded-full blur-2xl group-hover:bg-brand-accentPurple/10 transition-all duration-500"></div>
                    
                    <div className="flex items-center gap-3 mb-5 border-b border-purple-900/20 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/20 border border-purple-900/30 flex items-center justify-center text-brand-accentPurple group-hover:text-brand-accentPurpleLight transition-colors duration-300">
                        <IconComponent size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-white font-outfit tracking-wide group-hover:text-brand-accentPurpleLight transition-colors duration-300">{category.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, sIndex) => (
                        <span 
                          key={sIndex} 
                          className="px-3.5 py-2 bg-purple-950/25 border border-purple-900/30 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-brand-accentPurple/50 hover:bg-purple-900/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="pt-12 border-t border-purple-900/30 mt-12">
            <h3 className="text-2xl font-bold text-white font-outfit text-center mb-8">
              Professional & Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {softSkills.map((skill, index) => (
                <div key={index} className="glass-panel px-6 py-3.5 rounded-2xl flex items-center gap-3 hover:border-brand-accentPurple/40 hover:shadow-[0_4px_20px_rgba(168,85,247,0.08)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-default">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-accentPurple animate-pulse"></span>
                  <span className="text-sm font-semibold text-slate-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative border-t border-purple-900/30">
        {/* Ambient background glow */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-brand-accentPurple/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Work Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-brand-accentPurple/50 hover:shadow-[0_12px_35px_-10px_rgba(168,85,247,0.15)] transition-all duration-300 transform hover:-translate-y-1">
              {/* Card Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accentPurple/10 rounded-full blur-2xl group-hover:bg-brand-accentPurple/20 transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 pb-6 border-b border-purple-900/20">
                <div>
                  <h3 className="text-2xl font-bold text-white font-outfit leading-tight group-hover:text-brand-accentPurpleLight transition-colors duration-300">
                    Software Engineer Intern
                  </h3>
                  <p className="text-brand-accentPurple font-semibold mt-1">Sri Lanka Telecom PLC (SLT)</p>
                </div>
                <div>
                  <span className="inline-block px-4 py-1.5 bg-brand-accentPurple/15 text-brand-accentPurpleLight text-xs font-semibold rounded-full border border-brand-accentPurple/25 tracking-wider">
                    July 2025 - January 2026
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Contributed to the development and testing of a MERN stack-based Incident Management System (IMS) for SLT, collaborating in an Agile team to deliver responsive features, validate system behavior, and streamline operational efficiency.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accentPurple mt-2 shrink-0"></span>
                  <p className="text-sm text-slate-400 leading-normal">
                    Collaborated in an Agile team to develop responsive frontend features and API integrations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accentPurple mt-2 shrink-0"></span>
                  <p className="text-sm text-slate-400 leading-normal">
                    Conducted thorough API testing and validation using Postman to ensure seamless database operations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accentPurple mt-2 shrink-0"></span>
                  <p className="text-sm text-slate-400 leading-normal">
                    Utilized GitHub and Bitbucket for team-wide version control and structured branch deployments.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accentPurple mt-2 shrink-0"></span>
                  <p className="text-sm text-slate-400 leading-normal">
                    Assisted in defect identification and tracking, boosting system performance and response times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Horizontal Slider Carousel with Arrow Buttons on the Sides */}
      <section id="projects" className="py-20 relative border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center text-white">
              Featured Projects
            </h2>
          </div>

          {/* Carousel Wrapper with Left & Right Arrows Aligning Next to the Projects Container */}
          <div className="relative px-16 md:px-24">
            {/* Left Scroll Arrow */}
            <button 
              onClick={() => scrollProjects('left')} 
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/95 border border-purple-900/40 text-slate-400 hover:text-brand-accentPurple hover:border-brand-accentPurple hover:bg-purple-950/30 flex items-center justify-center transition-all duration-300 z-10 shadow-lg shadow-black/80 cursor-pointer"
              title="Scroll Left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Scroll Arrow */}
            <button 
              onClick={() => scrollProjects('right')} 
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/95 border border-purple-900/40 text-slate-400 hover:text-brand-accentPurple hover:border-brand-accentPurple hover:bg-purple-950/30 flex items-center justify-center transition-all duration-300 z-10 shadow-lg shadow-black/80 cursor-pointer"
              title="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={projectsScrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((proj, idx) => (
                <div 
                  key={idx} 
                  className="snap-start shrink-0 w-[290px] sm:w-[320px] md:w-[330px] lg:w-[calc((100%-48px)/3)] bg-gradient-to-b from-slate-950/80 to-slate-900/95 border border-purple-900/40 rounded-3xl p-7 flex flex-col justify-between hover:border-brand-accentPurple/50 hover:shadow-[0_12px_35px_-10px_rgba(168,85,247,0.2)] transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  {/* Subtle glowing ambient dot in top right */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accentPurple/5 rounded-full blur-2xl group-hover:bg-brand-accentPurple/10 transition-all duration-500"></div>

                  <div className="space-y-4">
                    {/* Top Row with an elegant Code icon */}
                    <div className="flex justify-between items-center mb-1">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/20 border border-purple-900/30 flex items-center justify-center text-brand-accentPurple group-hover:text-brand-accentPurpleLight transition-colors duration-300">
                        <Code size={20} />
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white font-outfit leading-snug tracking-wide group-hover:text-brand-accentPurpleLight transition-colors duration-300">
                      {proj.title}
                    </h3>
                    
                    {/* Small Description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Languages & View Button Container */}
                  <div className="space-y-5 pt-5 border-t border-purple-900/20 mt-6">
                    <div className="flex flex-wrap gap-2">
                      {proj.tools.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 bg-purple-950/30 border border-purple-900/40 rounded-lg text-[10px] text-purple-300 font-semibold tracking-wider uppercase">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-brand-accentPurple hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.45)]"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Restored to the previous layout */}
      <section id="education" className="py-20 relative border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            My Education
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((item, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-brand-accentPurple/50 transition-all duration-300">
                {/* Accent glow on card hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accentPurple/10 rounded-full blur-2xl group-hover:bg-brand-accentPurple/20 transition-all duration-300"></div>

                <div className="flex items-start gap-4 mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-brand-accentPurple/30 flex items-center justify-center text-brand-accentPurple shrink-0">
                    {item.iconType === "uni" ? <GraduationCap size={24} /> : item.iconType === "college" ? <BookOpen size={24} /> : <Shield size={24} />}
                  </div>
                  <div>
                    {/* Period (Year) */}
                    <span className="px-3 py-1 bg-brand-accentPurple/15 text-brand-accentPurpleLight text-xs font-semibold rounded-full border border-brand-accentPurple/25">
                      {item.period}
                    </span>
                    <span className="block mt-1 text-xs uppercase font-bold text-slate-400 tracking-wider">{item.type}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-outfit mb-2 leading-snug">{item.institution}</h3>
                
                {/* Subtopic (degree title) */}
                {item.title && <h4 className="text-md font-semibold text-slate-300 mb-4">{item.title}</h4>}
                
                {item.specialization && (
                  <p className="text-xs font-bold text-brand-accentPurple uppercase tracking-wider mb-2">{item.specialization}</p>
                )}

                {/* Sub-Milestones (For High School) */}
                {item.milestones && (
                  <div className="space-y-3 pt-2">
                    {item.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 bg-slate-950/40 border-l-4 border-brand-accentPurpleLight rounded-r-xl space-y-1 hover:bg-purple-950/20 transition-all duration-200">
                        <h5 className="text-sm font-semibold text-white leading-snug">{m.title}</h5>
                        <p className="text-xs text-slate-400 leading-normal">{m.detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            {/* Direct Info with Internal Social Icons */}
            <div className="md:col-span-2">
              <div className="glass-panel p-6 rounded-3xl space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white font-outfit text-center">Get In Touch</h3>

                  {/* Email Card */}
                  <div className="relative group bg-purple-950/20 border border-purple-900/30 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="text-brand-accentPurple" size={20} />
                      <div>
                        <h4 className="text-xs text-slate-400 font-bold uppercase">Email</h4>
                        <p className="text-sm font-semibold text-white">savinditharu611@gmail.com</p>
                      </div>
                    </div>
                    <button type="button" onClick={() => handleCopy("savinditharu611@gmail.com", "email")} className="text-slate-400 hover:text-white p-1 cursor-pointer">
                      {copiedText === "email" ? <Check className="text-emerald-500" size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Phone Card */}
                  <div className="relative group bg-purple-950/20 border border-purple-900/30 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="text-brand-accentPurple" size={20} />
                      <div>
                        <h4 className="text-xs text-slate-400 font-bold uppercase">Phone</h4>
                        <p className="text-sm font-semibold text-white">+94701215676</p>
                      </div>
                    </div>
                    <button type="button" onClick={() => handleCopy("+94701215676", "phone")} className="text-slate-400 hover:text-white p-1 cursor-pointer">
                      {copiedText === "phone" ? <Check className="text-emerald-500" size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Location Card */}
                  <div className="relative group bg-purple-950/20 border border-purple-900/30 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                    <MapPin className="text-brand-accentPurple" size={20} />
                    <div>
                      <h4 className="text-xs text-slate-400 font-bold uppercase">Location</h4>
                      <p className="text-sm font-semibold text-white">Madampe, North Western, Sri Lanka</p>
                    </div>
                  </div>
                </div>

                {/* Social Icons row inside Get In Touch Box */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-purple-900/30">
                  <a href="https://github.com/Savindi-Tharuka" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-purple-950/20 border border-purple-900/30 text-slate-300 hover:text-brand-accentPurple hover:bg-purple-950/40 flex items-center justify-center transition-all duration-300 shadow-md">
                    <GithubIcon size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/savindii" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-purple-950/20 border border-purple-900/30 text-slate-300 hover:text-brand-accentPurple hover:bg-purple-950/40 flex items-center justify-center transition-all duration-300 shadow-md">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form with Immersive Popup Overlay */}
            <div className="md:col-span-3 relative">
              <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-4 h-full flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  {/* Topic in middle center with increased bottom gap */}
                  <h3 className="text-xl font-bold text-white font-outfit text-center mb-8">Send Message</h3>

                  {/* Sending Spinner Overlay */}
                  {formStatus.type === 'sending' && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full border-4 border-brand-accentPurple border-t-transparent animate-spin mb-4"></div>
                      <p className="text-sm font-semibold text-slate-300">{formStatus.message}</p>
                    </div>
                  )}

                  {/* Success / Error Popup Overlay Directly on the Form Section */}
                  {showToast && formStatus.message && formStatus.type !== 'sending' && (
                    <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center justify-center text-center z-25 transition-all duration-300">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${formStatus.type === 'success' ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-500 border border-rose-500/30'}`}>
                        {formStatus.type === 'success' ? <Check size={32} /> : <X size={32} />}
                      </div>
                      <h4 className="text-lg font-bold font-outfit text-white mb-2">
                        {formStatus.type === 'success' ? 'Message Sent!' : 'Error'}
                      </h4>
                      <p className="text-sm text-slate-300 max-w-xs mb-6 leading-relaxed">{formStatus.message}</p>
                      <button 
                        type="button" 
                        onClick={() => setShowToast(false)} 
                        className="px-6 py-2.5 bg-brand-accentPurple hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                      >
                        Okay
                      </button>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleInput} 
                        className="w-full bg-slate-950/50 border border-purple-900/30 focus:border-brand-accentPurple rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-950/40 transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleInput} 
                        className="w-full bg-slate-950/50 border border-purple-900/30 focus:border-brand-accentPurple rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-950/40 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase">Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInput} 
                      className="w-full bg-slate-950/50 border border-purple-900/30 focus:border-brand-accentPurple rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-950/40 transition-all"
                      placeholder="Subject Topic"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase">Message *</label>
                    <textarea 
                      name="message" 
                      required 
                      rows="4" 
                      value={formData.message} 
                      onChange={handleInput} 
                      className="w-full bg-slate-950/50 border border-purple-900/30 focus:border-brand-accentPurple rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-950/40 transition-all resize-none"
                      placeholder="Your Message..."
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accentPurple hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 mt-4 cursor-pointer shadow-lg shadow-purple-950/30">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/30 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Savindi Tharuka. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
