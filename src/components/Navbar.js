import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../img/Logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Nosotros', href: '/about-us' },
  { name: 'Vende tus Monedas', href: '/sell-coins' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-cardGreen bg-opacity-60">
      <nav className="items-center justify-between hidden p-2 mx-auto lg:flex max-w-7xl lg:px-8" aria-label="Global">
        <Link to="/">
          <span className="sr-only">LC</span>
          <img className="w-auto h-8 m-3 transition duration-75 hover:scale-110" src={Logo} alt="Logo" />
        </Link>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-all duration-75 hover:text-cardGreen px-3 py-2 ${
                location.pathname === item.href ? 'bg-cardGreen text-black rounded-md' : 'text-gray-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Barra de navegación para dispositivos móviles */}
      <nav className="flex items-center justify-between p-2 mx-auto max-w-7xl lg:px-8 lg:hidden">
        <Link to="/">
          <span className="sr-only">LC</span>
          <img className="w-auto h-8 m-3 transition duration-75 hover:scale-110" src={Logo} alt="Logo" />
        </Link>
        <div className="flex p-5">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú desplegable para dispositivos móviles */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-cardGreen sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={handleLinkClick}>
              <span className="sr-only">LC</span>
              <img className="w-auto h-6" src={Logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-800 rounded-lg hover:text-white hover:bg-gray-800/10"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
