import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const specializations = [
    "Test Automation",
    "CI/CD Pipeline",
    "API Testing",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/vaibhav-bhatt-b361001a5/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com",
      label: "Twitter"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vaibhav Bhatt</h3>
            <p className="text-gray-300 mb-4">
              An SDET passionate about building quality software through innovative testing strategies and frameworks.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-gray-300">
              {specializations.map((specialization, index) => (
                <li key={index} className="text-sm">
                  {specialization}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Vaibhav Bhatt | SDET
          </p>
        </div>
      </div>
    </footer>
  );
}
