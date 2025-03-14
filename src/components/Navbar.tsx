
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold font-heading text-developer-purple">DC</span>
          <span className="text-xl ml-1 font-heading">Dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-developer-purple transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-developer-purple transition-colors">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-developer-purple transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-developer-purple transition-colors">About</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-developer-purple hover:bg-developer-purple/90">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t absolute w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-foreground hover:text-developer-purple transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 text-foreground hover:text-developer-purple transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-foreground hover:text-developer-purple transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-developer-purple transition-colors">About</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-developer-purple hover:bg-developer-purple/90 w-full">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
