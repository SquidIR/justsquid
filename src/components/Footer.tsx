import { Youtube, Music, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="JustSquid" className="w-12 h-12 rounded-md" />
            <div>
              <h3 className="font-heading font-bold text-lg">
                JUST<span className="text-primary">SQUID</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Music • Gaming • Creativity
              </p>
            </div>
          </div>

          {/* Social Icons forever */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@ItsSquid534"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Youtube size={20} />
            </a>
            <Link
              to="/music"
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Music size={20} />
            </Link>
            <Link
              to="/about"
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <HelpCircle size={20} />
            </Link>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">Contact me:</p>
            <a 
              href="mailto:justsquid534@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              justsquid534@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
