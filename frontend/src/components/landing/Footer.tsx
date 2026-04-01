import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  Product: ["Features", "Pricing", "FAQ"],
  Company: ["About", "Privacy", "Contact"],
  Connect: ["GitHub", "Twitter", "LinkedIn"],
};

const Footer = () => (
  <footer className="border-t border-border bg-secondary/30 py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <a href="#" className="flex items-center">
            <Logo iconClassName="gradient-cta" size="sm" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Track subscriptions, save money, stay in control.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-foreground text-sm">{title}</h4>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 SubTracker. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
