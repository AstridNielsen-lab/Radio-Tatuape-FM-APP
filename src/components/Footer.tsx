import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Like Look Solutions</h3>
            <p className="text-gray-400">Created by Julio Campos Machado</p>
            <div className="mt-4">
              <a href="http://likelook.wixsite.com/solutions" className="text-blue-400 hover:text-blue-300">
                Visit our website
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: juliocamposmachado@gmail.com</li>
              <li>WhatsApp: +55 11 97060-3441</li>
              <li>WhatsApp: +55 11 99294-6628</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://gemini.google.com/app" className="text-gray-400 hover:text-white">
                  Try Gemini
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a href="https://github.com/AstridNielsen-lab" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
