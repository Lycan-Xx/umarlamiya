import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Brain, 
  Globe, 
  Cpu, 
  Sparkles,
  ChevronDown,
  Star,
  GitFork,
  Terminal,
  Database,
  Layers,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// GitHub Repositories Data
const githubRepos = [
  {
    name: "NSITF-RAG-AUTOMATION",
    description: "Lead Architect for document extraction and RAG pipelines - Intelligent document processing system",
    url: "https://github.com/umarlamiya/NSITF-RAG-AUTOMATION",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["RAG", "NLP", "Document AI", "LLM"],
    featured: true
  },
  {
    name: "medroute-core",
    description: "Medical AI routing system for healthcare applications",
    url: "https://github.com/umarlamiya/medroute-core",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["Medical AI", "Healthcare", "Routing"],
    featured: true
  },
  {
    name: "WiFi DensePose",
    description: "Signal processing and human pose estimation using WiFi signals",
    url: "https://github.com/umarlamiya/WiFi-DensePose",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["Signal Processing", "Computer Vision", "Deep Learning"],
    featured: true
  },
  {
    name: "AI-town-Lamiyas-wrld",
    description: "Virtual AI town where characters live, chat and socialize",
    url: "https://github.com/umarlamiya/AI-town-Lamiyas-wrld",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    tags: ["AI Agents", "Multi-agent", "Simulation"],
    featured: true
  },
  {
    name: "bolt.diy",
    description: "Full-stack web applications using any LLM - Prompt, run, edit, and deploy",
    url: "https://github.com/umarlamiya/bolt.diy",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    tags: ["LLM", "Full-stack", "Code Generation"]
  },
  {
    name: "Claude-Cowork",
    description: "Desktop AI assistant for programming and file management tasks",
    url: "https://github.com/umarlamiya/Claude-Cowork",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["AI Assistant", "Desktop App", "Automation"]
  },
  {
    name: "QR-Code Inventory",
    description: "Inventory management system with QR code integration",
    url: "https://github.com/umarlamiya/QR-Code-Inventory",
    stars: 0,
    forks: 0,
    language: "JavaScript",
    tags: ["QR Code", "Inventory", "Web App"]
  },
  {
    name: "Kimi",
    description: "AI-powered development and automation tools",
    url: "https://github.com/umarlamiya/Kimi",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    tags: ["AI Tools", "Automation", "Development"]
  },
  {
    name: "Learn Python",
    description: "Python learning resources and tutorials for beginners",
    url: "https://github.com/umarlamiya/Learn-Python-in-Less-than-10-Minutes",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["Education", "Python", "Tutorial"]
  },
  {
    name: "CSS",
    description: "CSS tutorials and styling resources",
    url: "https://github.com/umarlamiya/CSS",
    stars: 1,
    forks: 0,
    language: "HTML",
    tags: ["CSS", "Styling", "Web Design"]
  },
  {
    name: "ai-engineering-hub",
    description: "In-depth tutorials on LLMs, RAGs and real-world AI agent applications",
    url: "https://github.com/umarlamiya/ai-engineering-hub",
    stars: 0,
    forks: 0,
    language: null,
    tags: ["LLM", "RAG", "AI Agents", "Tutorials"]
  },
  {
    name: "awesome-llm-apps",
    description: "Collection of awesome LLM apps with AI Agents and RAG",
    url: "https://github.com/umarlamiya/awesome-llm-apps",
    stars: 0,
    forks: 0,
    language: null,
    tags: ["LLM", "AI Agents", "RAG", "Collection"]
  }
];

// Expertise Data
const expertise = [
  {
    icon: Brain,
    title: "Agentic Frameworks",
    description: "Designing and implementing autonomous AI agent systems with multi-agent orchestration, tool use, and reasoning capabilities.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "Multilingual NLP",
    description: "Building NLP solutions for African tech, supporting low-resource languages and cross-lingual understanding.",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Cpu,
    title: "LLM Orchestration",
    description: "Architecting complex LLM pipelines with RAG, fine-tuning, prompt engineering, and model evaluation.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Layers,
    title: "Autonomous Systems",
    description: "Creating self-evolving AI systems that learn, adapt, and improve through continuous interaction.",
    color: "from-emerald-500 to-teal-600"
  }
];

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass py-3' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Umar Lamiya
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Expertise', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-300 hover:text-white link-underline transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10"
          onClick={() => window.open('https://github.com/umarlamiya', '_blank')}
        >
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 px-4 py-2 bg-violet-500/10 border-violet-500/30 text-violet-300">
            <Sparkles className="w-3 h-3 mr-2" />
            AI Systems Architect
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Architecting</span>
          <br />
          <span className="text-white">Agentic Systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Expert at turning <span className="text-violet-400 font-semibold">unstructured chaos</span> into{' '}
          <span className="text-pink-400 font-semibold">structured intelligence</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="btn-glow bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white px-8"
            onClick={scrollToProjects}
          >
            <Code2 className="w-5 h-5 mr-2" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 hover:border-violet-500 hover:bg-violet-500/10"
            onClick={() => window.open('https://github.com/umarlamiya', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub Profile
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Badge className="mb-4 px-3 py-1 bg-pink-500/10 border-pink-500/30 text-pink-300">
              <Terminal className="w-3 h-3 mr-2" />
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of
              <span className="block gradient-text mt-2">AI Systems</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                I'm <span className="text-white font-semibold">Umar Lamiya</span>, a Lead Architect 
                specializing in document extraction and RAG pipelines. Currently leading the development 
                of <span className="text-violet-400">NSITF-RAG-AUTOMATION</span>, where we're building 
                intelligent systems that transform how organizations process and understand their documents.
              </p>
              <p>
                My passion lies at the intersection of <span className="text-pink-400">autonomous AI agents</span>, 
                <span className="text-blue-400"> multilingual NLP</span>, and{' '}
                <span className="text-emerald-400">intelligent orchestration</span>. I believe in creating 
                AI systems that don't just process data—they understand, reason, and evolve.
              </p>
              <p>
                With expertise spanning from low-level signal processing to high-level agent architectures, 
                I bring a holistic approach to solving complex AI challenges.
              </p>
            </div>
          </div>

          <motion.div 
            style={{ y }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 glow-purple">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                  <Database className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Repositories</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20">
                  <Code2 className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-400">Languages</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-gray-400">AI Projects</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">3+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Expertise Section
function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-3 py-1 bg-blue-500/10 border-blue-500/30 text-blue-300">
            <Cpu className="w-3 h-3 mr-2" />
            Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized skills in AI architecture, from autonomous agents to multilingual NLP systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/5 transition-all duration-500 group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  
  const filteredRepos = filter === 'featured' 
    ? githubRepos.filter(r => r.featured)
    : githubRepos;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-3 py-1 bg-emerald-500/10 border-emerald-500/30 text-emerald-300">
            <GitFork className="w-3 h-3 mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work in AI, machine learning, and autonomous systems
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-violet-600' : 'border-gray-600'}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'featured' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('featured')}
            className={filter === 'featured' ? 'bg-violet-600' : 'border-gray-600'}
          >
            <Star className="w-4 h-4 mr-2" />
            Featured
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="project-card glass rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm truncate max-w-[150px]">
                          {repo.name}
                        </h3>
                        {repo.language && (
                          <span className="text-xs text-gray-500">{repo.language}</span>
                        )}
                      </div>
                    </div>
                    {repo.featured && (
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.tags.map(tag => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {repo.forks}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10"
                      onClick={() => window.open(repo.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10"
            onClick={() => window.open('https://github.com/umarlamiya?tab=repositories', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Repositories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 text-center glow-purple"
        >
          <Badge className="mb-6 px-4 py-2 bg-violet-500/10 border-violet-500/30 text-violet-300">
            <MessageSquare className="w-3 h-3 mr-2" />
            Get In Touch
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something
            <span className="block gradient-text mt-2">Amazing Together</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Whether you're interested in collaborating on AI projects, discussing agentic systems, 
            or just want to connect—I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-glow bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white px-8"
              onClick={() => window.location.href = 'mailto:umaryusuf9191@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              umaryusuf9191@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 hover:border-violet-500 hover:bg-violet-500/10"
              onClick={() => window.open('https://github.com/umarlamiya', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Follow on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span className="text-gray-400">Umar Lamiya</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>© 2026 All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Built with React & Tailwind</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/umarlamiya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:umaryusuf9191@gmail.com"
              className="text-gray-500 hover:text-pink-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#0d111c] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
