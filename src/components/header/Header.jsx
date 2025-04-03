import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [selectedDashboardOption, setSelectedDashboardOption] = useState('Dashboard');
  const [selectedContactOption, setSelectedContactOption] = useState('Contact');

  const handleDashboardOptionClick = (option) => {
    setSelectedDashboardOption(option);
    setIsDropdown1Open(false);
    setIsMobileMenuOpen(false);

    if (option === 'Retail Industry') navigate('/retail');
    if (option === 'Dashboard') navigate('/dashboard');
    if (option === 'Life science') navigate('/lifescience');
    if (option === 'Education') navigate('/education');
    if (option === 'Public Sector') navigate('/publicSector');
    if (option === 'HealthCare') navigate('/healthcare');
  };

  const handleContactOptionClick = (option) => {
    setSelectedContactOption(option);
    setIsDropdown2Open(false);
    setIsMobileMenuOpen(false);

    if (option === 'Contact Us') navigate('/ContactPage');
    if (option === 'About Us') navigate('/aboutUs');
    if (option === 'Professional Services') navigate('/professional');
  };

  // Handler for static links (Services and Features)
  const handleStaticLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Handler for Sign In button
  const handleSignInClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/auth');
  };

  return (
    <nav className='bg-[#EEEDF2] h-20 px-4 sm:px-10 py-5 max-w-screen-2xl flex justify-between items-center'>
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/"><img src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/logo.png?raw=true" alt="Logo" className="h-12" /> </a> 
       <a href="/"><h2 className="font-bold text-[#223d57] px-4 sm:px-8 text-lg">Synergy Kortex</h2></a> 
      </div>

      {/* Hamburger Menu for Mobile */}
      <button 
        className="md:hidden text-[#223d57] text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center space-x-4'>
        {/* Search Bar */}
        <div className="flex items-center space-x-2 border-2 rounded-lg bg-white px-3 py-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            className="focus:outline-none w-32 lg:w-48"
            placeholder="Search..."
          />
        </div>

        {/* Dashboard Dropdown */}
        <div className="relative">
          <button
            className="text-[#000000] flex p-2 bg-white rounded-lg items-center"
            onClick={() => setIsDropdown1Open(!isDropdown1Open)}
          >
            <h1 className='px-2'>{selectedDashboardOption}</h1>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {isDropdown1Open && (
            <div className="absolute bg-white text-black shadow-md rounded-md mt-2 w-40 z-10">
              <ul>
                {['Dashboard', 'Retail Industry', 'Public Sector', 'Life science', 'Education', 'HealthCare'].map(option => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleDashboardOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Static Links */}
        <div 
          className='px-3 hover:text-[#0D6EFD] cursor-pointer' 
          onClick={() => handleStaticLinkClick('/customer')} // Changed from '/customers' to '/customer'
        >
          Customers
        </div>
        <div 
          className='px-3 hover:text-[#0D6EFD] cursor-pointer' 
          onClick={() => handleStaticLinkClick('/services')}
        >
          Services
        </div>
        <div 
          className='px-3 hover:text-[#0D6EFD] cursor-pointer' 
          onClick={() => handleStaticLinkClick('/features')}
        >
          Features
        </div>

        {/* Contact Dropdown */}
        <div className="relative">
          <button
            className="text-[#000000] flex p-2 items-center"
            onClick={() => setIsDropdown2Open(!isDropdown2Open)}
          >
            <h1 className='px-2'>{selectedContactOption}</h1>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {isDropdown2Open && (
            <div className="absolute bg-white text-black shadow-md rounded-md mt-2 w-40 z-10">
              <ul>
                {['Contact Us', 'About Us', 'Professional Services'].map(option => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleContactOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button 
          className='p-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-[#0d5ddd]'
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#EEEDF2] md:hidden shadow-lg z-20">
          <div className="flex flex-col p-4 space-y-4">
            {/* Search Bar */}
            <div className="flex items-center space-x-2 border-2 rounded-lg bg-white px-3 py-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                type="text"
                className="focus:outline-none w-full"
                placeholder="Search..."
              />
            </div>

            {/* Dashboard Dropdown */}
            <div className="relative">
              <button
                className="text-[#000000] flex p-2 bg-white rounded-lg w-full justify-between"
                onClick={() => setIsDropdown1Open(!isDropdown1Open)}
              >
                <h1>{selectedDashboardOption}</h1>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              {isDropdown1Open && (
                <div className="bg-white text-black shadow-md rounded-md mt-2 w-full">
                  <ul>
                    {['Dashboard', 'Retail Industry', 'Public Sector', 'Life science', 'Education', 'HealthCare'].map(option => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleDashboardOptionClick(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Static Links */}
            <div 
              className='py-2 hover:text-[#0D6EFD] cursor-pointer' 
              onClick={() => handleStaticLinkClick('/customer')} // Changed from '/customers' to '/customer'
            >
              Customers
            </div>
            <div 
              className='py-2 hover:text-[#0D6EFD] cursor-pointer' 
              onClick={() => handleStaticLinkClick('/services')}
            >
              Services
            </div>
            <div 
              className='py-2 hover:text-[#0D6EFD] cursor-pointer' 
              onClick={() => handleStaticLinkClick('/features')}
            >
              Features
            </div>

            {/* Contact Dropdown */}
            <div className="relative">
              <button
                className="text-[#000000] flex p-2 w-full justify-between"
                onClick={() => setIsDropdown2Open(!isDropdown2Open)}
              >
                <h1>{selectedContactOption}</h1>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              {isDropdown2Open && (
                <div className="bg-white text-black shadow-md rounded-md mt-2 w-full">
                  <ul>
                    {['Contact Us', 'About Us', 'Professional Services'].map(option => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleContactOptionClick(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button 
              className='p-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-[#0d5ddd]'
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
