import { Youtube, Music, Gamepad2 } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="JustSquid" className="w-12 h-12" />
            <div>
              <h3 className="font-heading font-bold text-lg">
                JUST<span className="text-primary">SQUID</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Music • Gaming • Creativity
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Music size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Gamepad2 size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 JustSquid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
