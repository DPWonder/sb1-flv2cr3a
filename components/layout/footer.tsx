import { Bot, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-bold text-xl">
              AgentSummit<span className="text-blue-500">.io</span>
            </Link>
            <p className="mt-4 text-gray-400">
              The premier conference for AI agents, bringing together innovators, developers, and investors.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link href="/speakers" className="hover:text-blue-500">Speakers</Link></li>
              <li><Link href="/agenda" className="hover:text-blue-500">Agenda</Link></li>
              <li><Link href="/sponsors" className="hover:text-blue-500">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@agentsummit.io</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Bot className="w-6 h-6" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgentSummit.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}