import { Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:space-x-16 space-y-6 md:space-y-0">
          {/* About */}
          <Link
            href="#about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>

          {/* Privacy */}
          <Link
            href="#privacy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>

          {/* Follow Us + Icon */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Follow us</span>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 w-full max-w-xl mx-auto text-center text-xs text-muted-foreground opacity-70">
          &copy; {new Date().getFullYear()} LoopDesk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
