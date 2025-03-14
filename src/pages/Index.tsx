
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedCube from '@/components/AnimatedCube';
import AnimatedSphere from '@/components/AnimatedSphere';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Instagram, Mail, PhoneCall, Send, Code, Layers, PenTool, Database, Globe, ArrowRight, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const elements = parallaxRef.current.querySelectorAll('.parallax-item');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach(element => {
        const depth = parseFloat((element as HTMLElement).dataset.depth || "0.1");
        const moveX = (x * depth) * 100;
        const moveY = (y * depth) * 100;
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would handle the actual form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+919876543210?text=Hi%20Debarjun%2C%20I%27m%20interested%20in%20your%20services', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center" ref={parallaxRef}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-developer-purple/10 rounded-full filter blur-3xl parallax-item" data-depth="0.1"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-developer-blue/10 rounded-full filter blur-3xl parallax-item" data-depth="0.2"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-developer-teal/10 rounded-full filter blur-3xl parallax-item" data-depth="0.15"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-32 pb-16 z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
              Hi, I'm <span className="text-gradient">Debarjun Chakraborty</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I create stunning, responsive web applications with modern technologies,
              helping businesses achieve their digital goals with elegant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-developer-purple hover:bg-developer-purple/90 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-developer-purple text-developer-purple hover:bg-developer-purple/10"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-developer-purple transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-developer-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-developer-purple transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rotate-y perspective">
              {/* Profile image */}
              <img 
                src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Debarjun Chakraborty" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              {/* 3D elements */}
              <div className="absolute -top-16 -left-16 w-32 h-32 animate-float z-10">
                <AnimatedCube />
              </div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 animate-float animation-delay-1000 z-10">
                <AnimatedSphere />
              </div>
              
              {/* Tech stack badges */}
              <div className="absolute top-4 -right-8 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg font-medium text-sm animate-float">
                React
              </div>
              <div className="absolute bottom-12 -left-8 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg font-medium text-sm animate-float animation-delay-500">
                Node.js
              </div>
              <div className="absolute top-1/2 -right-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg font-medium text-sm animate-float animation-delay-1500">
                TypeScript
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-developer-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Services I Provide</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions to help your business grow online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="service-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="h-14 w-14 bg-developer-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-developer-purple" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating responsive, interactive user interfaces with React, Vue, and modern CSS frameworks.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-purple mr-2"></span>
                    React.js / Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-purple mr-2"></span>
                    Tailwind CSS / SASS
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-purple mr-2"></span>
                    Redux / Context API
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 2 */}
            <Card className="service-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="h-14 w-14 bg-developer-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-developer-blue" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building robust server-side applications and APIs to power your web applications.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-blue mr-2"></span>
                    Node.js / Express
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-blue mr-2"></span>
                    MongoDB / PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-blue mr-2"></span>
                    RESTful & GraphQL APIs
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 3 */}
            <Card className="service-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="h-14 w-14 bg-developer-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <PenTool className="h-8 w-8 text-developer-teal" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing intuitive, aesthetically pleasing interfaces that enhance user experience.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-teal mr-2"></span>
                    Figma / Adobe XD
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-teal mr-2"></span>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-teal mr-2"></span>
                    Interaction Design
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 4 */}
            <Card className="service-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="h-14 w-14 bg-developer-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-developer-purple" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">E-commerce Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building online stores with secure payment processing and inventory management.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-purple mr-2"></span>
                    Shopify / WooCommerce
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-purple mr-2"></span>
                    Payment Gateway Integration
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-purple mr-2"></span>
                    Custom E-commerce Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 5 */}
            <Card className="service-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="h-14 w-14 bg-developer-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="h-8 w-8 text-developer-blue" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Web App Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developing complex web applications with robust functionality and performance.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-blue mr-2"></span>
                    SaaS Applications
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-blue mr-2"></span>
                    Progressive Web Apps
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-blue mr-2"></span>
                    Real-time Applications
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 6 */}
            <Card className="service-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="h-14 w-14 bg-developer-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-developer-teal" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Website Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Improving website performance, SEO, and accessibility for better user experience.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-teal mr-2"></span>
                    Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-teal mr-2"></span>
                    SEO Enhancement
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-developer-teal mr-2"></span>
                    Accessibility Compliance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Portfolio</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Check out some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group perspective">
              <div className="rotate-y relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce Website" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">E-commerce Platform</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    A full-stack e-commerce solution with integrated payment processing.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">React</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Node.js</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group perspective">
              <div className="rotate-y relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="SaaS Dashboard" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">SaaS Dashboard</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    A comprehensive analytics dashboard for SaaS businesses.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Vue.js</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Express</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group perspective">
              <div className="rotate-y relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fitness App" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">Fitness Mobile App</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    A cross-platform fitness tracking application with social features.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">React Native</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Firebase</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">GraphQL</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="group perspective">
              <div className="rotate-y relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Tool" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">AI Content Generator</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    An AI-powered content generation tool for marketers and writers.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Next.js</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Python</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="group perspective">
              <div className="rotate-y relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Real Estate Platform" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">Real Estate Platform</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    A property listing and management platform with virtual tours.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Angular</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Django</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Three.js</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="group perspective">
              <div className="rotate-y relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Educational Platform" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">Educational Platform</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    An interactive learning platform with course management and video streaming.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">React</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">Node.js</span>
                    <span className="text-xs bg-developer-purple/20 text-white px-3 py-1 rounded-full">AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-developer-purple text-developer-purple hover:bg-developer-purple/10"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-developer-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 perspective">
              <div className="relative rotate-y">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Debarjun Coding" 
                  className="w-full rounded-2xl shadow-xl"
                />
                
                {/* Experience badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="h-10 w-10 bg-developer-purple/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-developer-purple" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Experience</span>
                    <span className="text-lg font-bold">5+ Years</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm Debarjun Chakraborty, a passionate Full Stack Web Developer with over 5 years of experience in creating modern web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in building responsive, user-friendly websites and applications using cutting-edge technologies. My goal is to deliver exceptional digital experiences that help businesses grow and succeed online.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-2">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Bachelor of Technology in Computer Science
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    University Name, 2018
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Based in Kolkata, India
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Available for remote work
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">React.js</span>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div className="h-full bg-developer-purple rounded" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Node.js</span>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div className="h-full bg-developer-purple rounded" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">TypeScript</span>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div className="h-full bg-developer-purple rounded" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">MongoDB</span>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div className="h-full bg-developer-purple rounded" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">UI/UX Design</span>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div className="h-full bg-developer-purple rounded" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium mb-1">DevOps</span>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div className="h-full bg-developer-purple rounded" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? Let's connect!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="app">Web Application</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range: <span className="font-bold">$500 - $5000</span>
                  </label>
                  <Slider defaultValue={[1000]} min={500} max={5000} step={100} />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={5} required />
                </div>
                
                <div className="flex space-x-4">
                  <Button type="submit" className="bg-developer-purple hover:bg-developer-purple/90 flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  
                  <Button type="button" onClick={openWhatsApp} variant="outline" className="border-developer-purple text-developer-purple hover:bg-developer-purple/10 flex-1">
                    Continue on WhatsApp
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="lg:pl-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-developer-purple/10 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-developer-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <a href="mailto:debarjun@example.com" className="text-gray-600 dark:text-gray-300 hover:text-developer-purple">
                        debarjun@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-developer-purple/10 rounded-xl flex items-center justify-center mr-4">
                      <PhoneCall className="h-6 w-6 text-developer-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <a href="tel:+919876543210" className="text-gray-600 dark:text-gray-300 hover:text-developer-purple">
                        +91 9876 543 210
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-developer-purple/10 rounded-xl flex items-center justify-center hover:bg-developer-purple hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-developer-purple/10 rounded-xl flex items-center justify-center hover:bg-developer-purple hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-developer-purple/10 rounded-xl flex items-center justify-center hover:bg-developer-purple hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              {!isMobile && (
                <div className="mt-12 relative perspective">
                  <div className="rotate-x bg-gradient-to-r from-developer-blue to-developer-purple rounded-2xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Let's Build Something Amazing Together</h3>
                    <p className="mb-4">Ready to start your project? I'm available for freelance work and collaborations.</p>
                    <Button 
                      className="bg-white text-developer-purple hover:bg-white/90"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start a Project
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="contact-shape w-64 h-64 top-20 -left-32"></div>
        <div className="contact-shape w-96 h-96 bottom-10 -right-48"></div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold font-heading text-developer-purple">DC</span>
                <span className="text-xl ml-1 font-heading">Dev</span>
              </div>
              <p className="mt-2 text-gray-400">
                Building the web, one project at a time.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white transition-colors">Portfolio</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><span className="text-gray-400">Web Development</span></li>
                  <li><span className="text-gray-400">UI/UX Design</span></li>
                  <li><span className="text-gray-400">E-commerce</span></li>
                  <li><span className="text-gray-400">Web Applications</span></li>
                  <li><span className="text-gray-400">Optimization</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Debarjun Chakraborty. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
