import React, { useState } from 'react';
//import aos
import AOS from 'aos';
import 'aos/dist/aos.css';
//init aos
AOS.init({
    duration: 500,
    once: true,
});
const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "¿Cómo funciona la entrega de Monedas FIFA 24?",
      answer: "La entrega de monedas FC 24 UT se procesará mediante Compra ya, que es un método cómodo y rápido. Las monedas te llegarán al instante y ya podrás gastarlas para armar tu equipo.",
      isOpen: false,
    },
    {
      question: "¿Cuántas monedas debo tener a la hora de comprar?",
      answer: "La cantidad de monedas debe ser mínima, ya que disponemos de una lista de jugadores baratos con alto rango de precios para pasarte tus monedas.",
      isOpen: false,
    },
    {
      question: "¿Es seguro comprar FIFA Coins de FC 24?",
      answer: "Como probablemente sepas, los desarrolladores de juegos desaconsejan este comportamiento de comprar monedas. Con nuestros años en el rubro, hemos comprobado que nuestro método es confiable y seguro para nuestros clientes.",
      isOpen: false,
    },
    {
        question: "¿Cuentan con asesoría para armar equipos?",
        answer: "Para nuestros clientes que no sepan donde gastar sus monedas, contamos con asesoría gratuita las 24 horas para armarles equipos con sus preferencias.",
        isOpen: false,
    },
    {
        question: "¿Debo esperar horas para comprar nuevamente?",
        answer: "Siempre recomendamos esperar entre 4 y 6 horas para volver a comprar, y asi, garantizar mayor seguridad de tu cuenta.",
        isOpen: false,
    },
  ]);

  const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
      return faq;
    }));
  };

  let currentDelay = 100;

  return (
    <div className="max-w-[70vw] sm:max-w-[30vw] mx-auto my-8">
      <h1 className='mb-10 text-4xl font-bold text-center text-black'>Preguntas Frecuentes</h1>
      {faqs.map((faq, index) => {
        const delay = currentDelay;
        currentDelay += 100;
        return (
          <div
            key={index}
            className='p-4 my-2 border rounded-lg cursor-pointer bg-cardGreen'
            onClick={() => toggleFaq(index)}
            data-aos="fade-up" data-aos-delay={delay} 
          >
            <div className="font-bold text-center text-black bg-cardGreen">
              {faq.question}
            </div>
            {faq.isOpen && <div className="mt-2 text-gray-700">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
};
  
export default Faq;
