import React, { useState, useEffect } from 'react';
import { FiCode, FiCpu, FiLayers, FiZap, FiGithub, FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import { SiJavascript, SiPython, SiHtml5, SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGit, SiFirebase } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Summary />
      <TechStack />
      <Projects />
      <Focus />
      <Contact />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">HB</div>
        <div className="hidden md:flex gap-8">
          {['About', 'Tech Stack', 'Projects', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-700 hover:text-cyan-600 font-medium">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const roles = ['Full Stack Developer', 'AI/ML Developer', 'Backend Engineer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((currentRole + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">Hashanashrestha Behera</h1>
        <div className="h-16 mb-6">
          <h2 className="text-2xl md:text-4xl gradient-text font-semibold">{displayText}<span className="animate-pulse">|</span></h2>
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Results-driven developer building scalable full-stack and AI-powered systems.</p>
      </div>
    </section>
  );
}

function Summary() {
  const highlights = [
    { icon: FiCode, title: 'Full-Stack Development', description: 'Building end-to-end web applications with React and Node.js', color: 'cyan' },
    { icon: FiCpu, title: 'AI/ML Integration', description: 'Deploying machine learning models into production systems', color: 'purple' },
    { icon: FiLayers, title: 'Scalable Architecture', description: 'Designing maintainable systems with best practices', color: 'blue' },
    { icon: FiZap, title: 'Performance Optimization', description: 'Enhancing system efficiency and response times', color: 'green' },
  ];

  const colors = {
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">About Me</h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">I'm a full-stack developer with expertise in building scalable web applications and integrating AI/ML solutions.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className={`${colors[h.color]} border-2 rounded-2xl p-6 hover:-translate-y-2 transition-all`}>
              <div className="inline-block p-3 rounded-xl mb-4"><h.icon size={32} /></div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{h.title}</h3>
              <p className="text-gray-600 text-sm">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const tech = [
    { title: 'Languages', items: [{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }, { name: 'Python', icon: SiPython, color: '#3776AB' }, { name: 'HTML5', icon: SiHtml5, color: '#E34F26' }, { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' }] },
    { title: 'Frontend', items: [{ name: 'React.js', icon: SiReact, color: '#61DAFB' }, { name: 'Redux', icon: SiRedux, color: '#764ABC' }, { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }, { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' }] },
    { title: 'Backend', items: [{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' }, { name: 'Express', icon: SiExpress, color: '#000' }] },
    { title: 'Databases', items: [{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' }, { name: 'MySQL', icon: SiMysql, color: '#4479A1' }, { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' }] },
    { title: 'Tools', items: [{ name: 'Git', icon: SiGit, color: '#F05032' }, { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }] }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Tech Stack</h2>
        <div className="grid gap-8">
          {tech.map(cat => (
            <div key={cat.title} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-600">{cat.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.items.map(t => (
                  <div key={t.name} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200">
                    <t.icon size={40} style={{ color: t.color }} />
                    <span className="text-sm text-gray-700 font-medium">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Health Data Tracker',
      featured: true,
      description: 'Full-stack health monitoring application with ML-powered predictions',
      tech: ['React', 'Flask', 'SQLite', 'Scikit-learn'],
      features: ['Tracks steps and calories', 'ML model ~85% accuracy', 'Interactive charts', 'JWT authentication'],
      impact: ['Improved readability by 40%', 'Reduced API time by 30%'],
      github: 'https://github.com/Hashan25-Dev/Health-Data-Tracker'
    },
    {
      title: 'Campus Movie Poll',
      description: 'Real-time polling system for campus movie selections',
      tech: ['React Native', 'Firebase', 'Firestore'],
      features: ['Real-time polling', 'Firestore sync <1s', 'Secure authentication', 'Cross-platform'],
      impact: ['Increased engagement by 50%', 'Real-time sync'],
      github: 'https://github.com/Hashan25-Dev/Movie-Night-Campus-Movie-Poll'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(p => (
            <div key={p.title} className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
              {p.featured && <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm mb-4 font-medium">Featured</span>}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => <span key={t} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{t}</span>)}
              </div>
              <div className="mb-6">
                <h4 className="text-cyan-700 font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2">{p.features.map((f, i) => <li key={i} className="text-gray-700 text-sm flex gap-2"><span className="text-cyan-600">•</span>{f}</li>)}</ul>
              </div>
              <div className="mb-6">
                <h4 className="text-purple-700 font-semibold mb-2">Impact:</h4>
                <ul className="space-y-2">{p.impact.map((im, i) => <li key={i} className="text-gray-700 text-sm flex gap-2"><span className="text-purple-600">✓</span>{im}</li>)}</ul>
              </div>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 rounded-lg font-medium">
                <FiGithub />View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Focus() {
  const areas = [
    { icon: FiCode, title: 'Strong DSA & Problem Solving', description: 'Efficient algorithms and optimized data structures' },
    { icon: FiCpu, title: 'Full-Stack + ML Integration', description: 'Seamlessly integrating AI/ML models into production' },
    { icon: FiLayers, title: 'Clean, Scalable Architecture', description: 'Building maintainable systems with best practices' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">What I Focus On</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((a, i) => (
            <div key={i} className="glass rounded-2xl p-8 text-center hover:-translate-y-2 transition-all">
              <div className="inline-block p-4 bg-cyan-100 rounded-full mb-6"><a.icon className="text-cyan-600" size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{a.title}</h3>
              <p className="text-gray-600">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    { icon: FiPhone, label: 'Phone', value: '7326074315', href: 'tel:7326074315' },
    { icon: FiMail, label: 'Email', value: 'hasanshresthabehera@gmail.com', href: 'mailto:hasanshresthabehera@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/hashanashrestha-behera-1988b3376' },
    { icon: FiGithub, label: 'GitHub', value: 'View my code', href: 'https://github.com/Hashan25-Dev' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center gradient-text">Let's Connect</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Let's build scalable and impactful systems together.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-cyan-50 hover:scale-105 transition-all">
              <div className="p-3 bg-cyan-100 rounded-lg"><c.icon className="text-cyan-600" size={24} /></div>
              <div>
                <p className="text-sm text-gray-600">{c.label}</p>
                <p className="text-lg font-semibold text-gray-900">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center text-gray-600"><p>© 2026 Hashanashrestha Behera. Built with React & Tailwind CSS.</p></div>
      </div>
    </section>
  );
}

export default App;
