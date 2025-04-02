import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faEnvelope,
  faAngleDown,
  faAngleUp 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faBehance, 
  faLinkedin, 
  faFacebook, 
  faInstagram, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <footer className="bg-[#0F172B] text-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg text-white font-semibold">Synergy Kortex</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Empowering innovation with cutting-edge technology.
          </p>
          <div className="flex space-x-3 mt-3">
            {[faShoppingCart, faBehance, faLinkedin, faFacebook, faInstagram, faTwitter, faEnvelope].map((icon, index) => (
              <button key={index} className="text-gray-400 hover:text-white text-lg">
                <FontAwesomeIcon icon={icon} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="md:hidden">
            <button 
              className="text-lg font-semibold flex items-center w-full justify-between"
              onClick={() => setCompanyOpen(!companyOpen)}
            >
              Company
              <FontAwesomeIcon icon={companyOpen ? faAngleUp : faAngleDown} />
            </button>
            {companyOpen && (
              <ul className="text-gray-400 space-y-1 mt-2 text-sm">
                {['About us', 'Services', 'Team', 'Pricing', 'Project', 'Blog', 'Login'].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="text-gray-400 space-y-1 mt-2 text-sm">
              {['About us', 'Services', 'Team', 'Pricing', 'Project', 'Blog', 'Login'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="md:hidden">
            <button 
              className="text-lg font-semibold flex items-center w-full justify-between"
              onClick={() => setLinksOpen(!linksOpen)}
            >
              Useful Links
              <FontAwesomeIcon icon={linksOpen ? faAngleUp : faAngleDown} />
            </button>
            {linksOpen && (
              <ul className="text-gray-400 space-y-1 mt-2 text-sm">
                {['Dashboards', 'Customers', 'Services', 'Features'].map(link => (
                  <li key={link} className="hover:text-white cursor-pointer">{link}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="text-gray-400 space-y-1 mt-2 text-sm">
              {['Dashboards', 'Customers', 'Services', 'Features'].map(link => (
                <li key={link} className="hover:text-white cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md text-sm"
          />
          <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-1 rounded-md text-sm">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          © Synergy Kortex 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
}