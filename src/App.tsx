import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  MessageCircle, 
  Zap, 
  CheckCircle2,
  Menu,
  X,
  Globe,
  Target,
  ExternalLink,
  Mail,
  Code2,
  Layout,
  Clock,
  ShieldCheck,
  TrendingUp,
  Search,
  Calendar,
  Rocket,
  Download,
  Loader2
} from 'lucide-react';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-green z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-brand-border shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold tracking-tighter flex items-center gap-2">
          LAUNCHLAB<span className="text-brand-green">HQ</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-semibold uppercase tracking-widest text-brand-dark/60 hover:text-brand-green transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <a 
              href="#final-cta" 
              className="px-5 py-2 bg-white text-brand-dark border border-brand-border rounded-lg font-semibold text-[12px] transition-all duration-300 hover:bg-brand-grey"
            >
              Contact
            </a>
            <a 
              href="https://wa.me/919136810212" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-brand-green text-white rounded-lg font-semibold text-[12px] transition-all duration-300 hover:bg-brand-green/90"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark/60 hover:text-brand-dark transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-brand-border md:hidden p-8 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-semibold text-brand-dark/60 hover:text-brand-green"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/919136810212" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-green text-white text-center font-semibold rounded-xl"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 bg-white overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-light border border-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Limited client slots available this month
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] text-brand-dark mb-8">
            We Build Digital Systems That <span className="text-brand-green">Drive Real Revenue.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-dark/60 mb-12 leading-relaxed max-w-3xl">
            LaunchLabHQ is a high-end digital studio that transforms ambitious ideas into scalable SaaS products, high-converting landing pages, and automated growth engines. We don't just build websites; we engineer business results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#pricing" className="btn-primary w-full sm:w-auto text-center">
              Get Free Demo
            </a>
            <a 
              href="https://wa.me/919136810212" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} className="text-brand-green" />
              WhatsApp
            </a>
            <a 
              href="mailto:launchlabhq33@gmail.com?subject=Inquiry%20from%20Website" 
              target="_blank"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Mail size={18} className="text-brand-green" />
              Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 blur-[120px] rounded-full -mr-48 pointer-events-none" />
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-24 bg-white border-b border-brand-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-6 block">Our Core Mission</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight mb-8">
              Bridging the gap between <span className="text-brand-green">visionary ideas</span> and market-leading products.
            </h2>
            <p className="text-lg text-subtle mb-6 leading-relaxed">
              LaunchLabHQ was founded on a simple principle: digital products should be assets, not expenses. We specialize in working with founders and businesses who are ready to move beyond generic solutions and build something truly exceptional.
            </p>
            <p className="text-lg text-subtle leading-relaxed">
              Our process is rooted in a deep understanding of user psychology, modern engineering, and business strategy. We take the technical complexity off your plate so you can focus on what you do best—scaling your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-brand-grey rounded-2xl border border-brand-border">
              <div className="text-brand-green mb-4"><Zap size={32} /></div>
              <h3 className="font-bold text-brand-dark mb-2">Rapid Deployment</h3>
              <p className="text-sm text-subtle">We optimize for speed without sacrificing quality, getting your product to market faster.</p>
            </div>
            <div className="p-8 bg-brand-grey rounded-2xl border border-brand-border sm:mt-8">
              <div className="text-brand-green mb-4"><TrendingUp size={32} /></div>
              <h3 className="font-bold text-brand-dark mb-2">Scalable Growth</h3>
              <p className="text-sm text-subtle">Every system we build is designed to scale seamlessly as your user base grows.</p>
            </div>
            <div className="p-8 bg-brand-grey rounded-2xl border border-brand-border">
              <div className="text-brand-green mb-4"><ShieldCheck size={32} /></div>
              <h3 className="font-bold text-brand-dark mb-2">Premium Quality</h3>
              <p className="text-sm text-subtle">We maintain the highest standards of code quality, security, and UI/UX design.</p>
            </div>
            <div className="p-8 bg-brand-grey rounded-2xl border border-brand-border sm:mt-8">
              <div className="text-brand-green mb-4"><Target size={32} /></div>
              <h3 className="font-bold text-brand-dark mb-2">ROI Focused</h3>
              <p className="text-sm text-subtle">Our primary metric for success is the tangible business value we create for you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const benefits = [
    { title: "Strategic Partnership", desc: "We don't just take orders; we provide strategic guidance to ensure your digital product succeeds in the real world." },
    { title: "Modern Tech Stack", desc: "We use the latest technologies like React, Tailwind, and AI-driven tools to build fast, secure, and future-proof systems." },
    { title: "User-Centric Design", desc: "Every pixel is placed with intent, ensuring your users have a seamless experience that leads to conversion." },
    { title: "Transparent Process", desc: "You'll always know exactly where your project stands with regular updates and direct access to the builders." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">The Difference</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight mb-6">Why ambitious founders choose LaunchLabHQ.</h2>
          <p className="text-lg text-subtle">We combine the agility of a startup with the precision of a high-end studio to deliver results that matter.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-brand-grey rounded-2xl border border-brand-border hover:border-brand-green/20 transition-all duration-300">
              <h3 className="text-lg font-bold mb-4 text-brand-dark">{b.title}</h3>
              <p className="text-sm text-subtle leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    { title: "Revenue Generation", desc: "We don't just drive traffic; we build systems that turn passive visitors into high-paying customers." },
    { title: "Brand Authority", desc: "Establish a premium digital presence that commands respect and positions you as a market leader." },
    { title: "Operational Efficiency", desc: "Automate your lead capture and customer onboarding with smart, integrated digital ecosystems." },
    { title: "Scalable Architecture", desc: "Our systems are built to grow with you, handling increased demand without breaking a sweat." },
  ];

  return (
    <section id="solutions" className="section-padding bg-brand-grey border-y border-brand-border">
      <div className="container-custom">
        <div className="max-w-2xl mb-20">
          <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">The LaunchLabHQ Advantage</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">Engineering results, not just websites.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium"
            >
              <div className="w-12 h-12 bg-brand-green-light rounded-xl flex items-center justify-center text-brand-green mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold mb-4 text-brand-dark">{s.title}</h3>
              <p className="text-sm text-subtle">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Builder = () => {
  const points = [
    { icon: <Zap size={24} />, title: "Fast Delivery", desc: "No unnecessary delays. I ship fast so you can grow fast." },
    { icon: <MessageCircle size={24} />, title: "Direct Communication", desc: "No middleman. You talk directly to the person building your system." },
    { icon: <Target size={24} />, title: "Focus on Results", desc: "I don't just build features; I build solutions that drive conversions." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight mb-8">
              Not an Agency. Not a Freelancer. <span className="text-brand-green">A Builder.</span>
            </h2>
            <p className="text-lg text-subtle mb-10">
              Agencies are slow and freelancers can be unreliable. I am a builder who focuses on one thing: delivering high-performance systems that solve real business problems.
            </p>
            <div className="space-y-8">
              {points.map((p, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-grey border border-brand-border rounded-xl flex items-center justify-center text-brand-green">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-brand-dark">{p.title}</h3>
                    <p className="text-sm text-subtle">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-brand-grey rounded-3xl border border-brand-border overflow-hidden p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-display font-bold text-brand-green mb-4">100%</div>
                <div className="text-xl font-bold text-brand-dark">Commitment to Growth</div>
              </div>
            </div>
            {/* Abstract decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green rounded-2xl -z-10 opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "ToolsFocus",
      desc: "A comprehensive utility ecosystem engineered for high-volume traffic and user utility. Built to demonstrate scalable architecture and intuitive UX that converts casual visitors into recurring users.",
      link: "https://toolsfocus.vercel.app/",
      tag: "SaaS Ecosystem"
    },
    {
      title: "Dino Games",
      desc: "An immersive interactive platform designed for maximum engagement and retention. Showcasing high-performance rendering and real-time user interaction patterns that drive digital growth.",
      link: "https://dinogames.vercel.app/",
      tag: "Interactive Platform"
    }
  ];

  return (
    <section id="work" className="section-padding bg-brand-grey border-y border-brand-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">Real Work. Real Users.</h2>
          </div>
          <p className="text-lg font-medium text-brand-green italic">
            "I don’t just build — I build things people use."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" }}
              viewport={{ once: true }}
              className="group p-12 bg-white border border-brand-border rounded-3xl hover:border-brand-green/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-4 block">{project.tag}</span>
                <h3 className="text-2xl font-bold mb-6 text-brand-dark">{project.title}</h3>
                <p className="text-subtle text-base mb-10">{project.desc}</p>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-green transition-colors"
              >
                Explore Project
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Globe size={24} />, title: "Website Creation", desc: "Complete business websites designed for modern performance." },
    { icon: <Layout size={24} />, title: "Business Landing Pages", desc: "High-converting pages focused on a single call to action." },
    { icon: <Code2 size={24} />, title: "Custom Web Tools", desc: "Unique tools and calculators to engage and retain your audience." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight mb-6">Expertise that delivers.</h2>
          <p className="text-brand-green font-medium">Built using modern tools and AI for faster delivery</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-10 bg-brand-grey border border-brand-border rounded-2xl text-center group hover:border-brand-green/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-brand-border rounded-2xl flex items-center justify-center text-brand-green mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-dark">{s.title}</h3>
              <p className="text-sm text-subtle">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { 
      name: "Starter", 
      price: "₹7,000 – ₹10,000", 
      desc: "For new businesses starting their journey.",
      features: ["3–5 page website", "WhatsApp integration", "Basic SEO", "Google Business setup"],
      popular: false
    },
    { 
      name: "Growth", 
      price: "₹30,000+", 
      desc: "For businesses that want more customers.",
      features: ["Everything in Starter", "Conversion-focused design", "Lead generation system", "Speed optimization", "Premium UI"],
      popular: true
    },
    { 
      name: "Pro / Scale", 
      price: "₹60,000+", 
      desc: "For businesses ready to scale aggressively.",
      features: ["Everything in Growth", "Custom features", "Automation & smart integrations", "Booking / payment systems"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-brand-grey border-y border-brand-border">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight mb-6">Simple, transparent pricing.</h2>
          <p className="text-brand-dark/40 font-medium mb-2">Agencies charge ₹80K–₹2L for similar solutions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-3xl border flex flex-col transition-all duration-300 ${plan.popular ? 'border-brand-green bg-white shadow-xl shadow-brand-green/5 scale-105 z-10' : 'border-brand-border bg-white'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-green text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-brand-dark/40">{plan.name}</h3>
              <div className="text-3xl font-display font-bold mb-4 text-brand-dark">{plan.price}</div>
              <p className="text-sm text-subtle mb-10">{plan.desc}</p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-brand-dark/70">
                    <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/919136810212"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center block transition-all duration-300 ${plan.popular ? 'bg-brand-green text-white hover:bg-brand-green/90' : 'bg-brand-grey text-brand-dark border border-brand-border hover:bg-brand-light'}`}
              >
                Start Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "You contact me", desc: "We discuss your business goals and needs." },
    { title: "I build a demo", desc: "I create a working prototype for you to see." },
    { title: "You approve", desc: "We refine the details until you're satisfied." },
    { title: "I deliver fast", desc: "Your system goes live and starts working for you." },
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-4 block">Process</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">How we work together.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-brand-border -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-white border-2 border-brand-green rounded-full flex items-center justify-center text-brand-green font-bold text-lg mx-auto mb-8">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-4 text-brand-dark">{step.title}</h3>
              <p className="text-sm text-subtle">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-grey border-y border-brand-border">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-green font-bold tracking-widest text-[11px] uppercase mb-6 block">The Founders</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-brand-dark tracking-tight">
            Vismit Patil & Meet Kadam.
          </h2>
          <p className="text-xl text-subtle mb-12 leading-relaxed">
            We are the architects behind LaunchLabHQ. We specialize in building high-performance digital systems for businesses that demand excellence. Our focus is on engineering solutions that don't just look good, but drive significant ROI and scale with your ambitions.
          </p>
          <div className="flex justify-center gap-16">
            <div>
              <div className="text-4xl font-display font-bold text-brand-dark mb-1">Premium</div>
              <div className="text-[11px] uppercase tracking-widest text-brand-dark/30 font-bold">SaaS Quality</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-brand-dark mb-1">100%</div>
              <div className="text-[11px] uppercase tracking-widest text-brand-dark/30 font-bold">Focus on ROI</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-brand-dark mb-1">Expert</div>
              <div className="text-[11px] uppercase tracking-widest text-brand-dark/30 font-bold">Execution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="final-cta" className="section-padding bg-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-brand-dark tracking-tight">
            Let’s Build Something That <span className="text-brand-green">Gets You Customers</span>
          </h2>
          <p className="text-lg text-subtle mb-12 leading-relaxed">
            Ready to scale your business with a high-performance digital system? Contact me today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:9136810212" 
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Call 9136810212
            </a>
            <a 
              href="https://wa.me/919136810212" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-brand-green" />
              WhatsApp Now
            </a>
            <a 
              href="mailto:launchlabhq33@gmail.com?subject=Inquiry%20from%20Website" 
              target="_blank"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Mail size={20} className="text-brand-green" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-brand-border bg-brand-grey">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-display font-bold tracking-tighter mb-2">
            LAUNCHLAB<span className="text-brand-green">HQ</span>
          </div>
          <p className="text-brand-dark/30 text-[11px] uppercase tracking-widest font-bold">© 2026 LaunchLabHQ. Built for Excellence.</p>
        </div>
        
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-brand-dark/40">
          <a href="#solutions" className="hover:text-brand-dark transition-colors">Solutions</a>
          <a href="#work" className="hover:text-brand-dark transition-colors">Work</a>
          <a href="#pricing" className="hover:text-brand-dark transition-colors">Pricing</a>
          <a href="#process" className="hover:text-brand-dark transition-colors">Process</a>
          <a href="mailto:launchlabhq33@gmail.com?subject=Inquiry%20from%20Website" target="_blank" className="hover:text-brand-dark transition-colors flex items-center gap-1">
            <Mail size={14} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-light overflow-x-hidden selection:bg-brand-green/10 selection:text-brand-green">
      <ScrollIndicator />
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Solutions />
        <WhyUs />
        <Builder />
        <Work />
        <Services />
        <Pricing />
        <Process />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
