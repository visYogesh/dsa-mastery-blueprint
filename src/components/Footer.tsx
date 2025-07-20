import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "Problems", href: "#problems" },
      { name: "Learn", href: "#learn" },
      { name: "Compete", href: "#compete" },
      { name: "Community", href: "#community" }
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Blog", href: "#blog" },
      { name: "API", href: "#api" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy", href: "#privacy" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Mail, href: "#email", label: "Email" }
  ];

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">DSAlgo</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Master data structures and algorithms through interactive learning and hands-on practice.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-foreground font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 DSAlgo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;