import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-screen h-32 p-0 mt-12 text-white bg-gray-800">
            <p className='text-sm font-thin'>© 2024 LC Monedas. Todos los derechos reservados.</p>
            <a 
                href="#" 
                className='text-sm font-thin text-blue-400 hover:text-blue-600'
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver webmaster
            </a>
        </footer>
    );
}

export default Footer;
