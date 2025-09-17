import React from 'react';

const FAQ = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">¿Cuál es el tiempo de entrega?</h3>
          <p className="text-muted-foreground">Entregamos en 2-4 horas dependiendo de la zona.</p>
        </div>
        <div>
          <h3 className="font-semibold">¿Cuál es el monto mínimo para delivery?</h3>
          <p className="text-muted-foreground">El monto mínimo es de $15.00</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;