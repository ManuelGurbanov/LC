import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../img/logo.png';
import { auth } from '../firebase';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'EAFC25', href: '/eafc25' },
  { name: 'Métodos de Pago', href: '/payment' },
  { name: 'Nosotros', href: '/about-us' },
  { name: 'Vende tus Monedas', href: '/sell-coins' },
  { name: 'Equipos de Clientes', href: '/clients' }
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };


  return (
    <header className="fixed z-50 w-full bg-opacity-95 bg-cardGreen2">
      <nav className="items-center justify-between hidden p-2 mx-auto lg:flex max-w-7xl lg:px-5" aria-label="Global">
        <Link to="/">
          <span className="sr-only">LC</span>
          <img className="w-auto h-8 m-3 transition duration-75 hover:scale-110" src={Logo} alt="Logo" />
        </Link>
        <div className="flex gap-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-xs font-semibold leading-6 transition-all duration-75 px-3 py-2 rounded-xl ${
                location.pathname === item.href ? 'bg-cardGreen text-white' : 'text-white hover:text-zinc-400 scale-110 transition ease-in-out'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-x-12">
              {/* <div className="px-3 py-2 text-sm font-black leading-6 text-white">
                {user.displayName}
              </div> */}
              <Link
                    to="/acount"
                    className={`px-2 py-1 -mx-3 text-sm font-semibold leading-7 text-white rounded-lg hover:text-zinc-600 `}
                    onClick={handleLinkClick}
                  >
                    Mi Cuenta
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className={`text-sm font-semibold leading-6 transition-all duration-75 px-3 py-2 text-white rounded-md hover:text-white hover:bg-cardGreen2`}
            >
              Iniciar Sesión
            </Link>
          )}
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
                stroke="white"
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
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:text-white hover:bg-gray-800/10"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
                {user ? (
                  <div className="block px-3 py-2 -mx-3 text-base font-black leading-7 text-white rounded-lg">
                    {user.displayName}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className={`block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:text-white hover:bg-gray-800/10`}
                    onClick={handleLinkClick}
                  >
                    Iniciar Sesión
                  </Link>
                )}
                {user && (
                  
                  <Link
                    to="/acount"
                    className={`block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:text-white hover:bg-gray-800/10`}
                    onClick={handleLinkClick}
                  >
                    Mi Cuenta
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
