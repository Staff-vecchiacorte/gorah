import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const allergensData = [
  'Cereali contenti glutine e prodotti derivati (grano, segale, orzo, avena, farro, kamut)',
  'Latte e prodotti a base di latte',
  'Crostacei e prodotti a base di crostacei',
  'Uova e prodotti a base di uova',
  'Pesce e prodotti a base di pesce',
  'Arachidi e prodotti a base di arachidi',
  'Soia e prodotti a base di soia',
  'Frutta a guscio e loro prodotti (mandorle, nocciole, noci, noci di acagiù, di pecan, del Brasile, pistacchi, noci macadamia)',
  'Sedano e prodotti a base di sedano',
  'Senape e prodotti a base di senape',
  'Semi di sesamo e prodotti a base di sesamo',
  'Solfiti in concentrazioni superiori a 10 mg/kg',
  'Lupini e prodotti a base di lupini',
  'Molluschi e prodotti a base di molluschi',
];

function Allergeni() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a4c4c] text-white p-4 pb-20"
    >
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-6"
      >
        <ChevronLeft size={24} />
        Indietro
      </button>

      <h1 className="text-2xl font-semibold mb-4">Allergeni</h1>
      <p className="mb-4">
        Allergie o Intolleranze alimentari? Chiedici informazioni.
      </p>
      <p className="mb-4">
        Si avvisano i gentili clienti che nei prodotti venduti in questo locale, possono essere contenuti ingredienti o coadiuvanti considerati allergeni.
      </p>
      <p className="mb-4">
        Elenco degli ingredienti allergenici utilizzati in questo esercizio e presenti nell'allegato II del Reg. UE n. 1169/2011 - "Sostanze o prodotti che provocano allergie o intolleranze":
      </p>
      <ol className="list-decimal pl-6 mb-4">
        {allergensData.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ol>
      <p className="mt-4">
        Ulteriori informazioni sono disponibili rivolgendosi al personale di servizio.
      </p>
      <p className="mt-4 font-bold">MANGIA SICURO</p>
      <p className="mt-4 font-bold">MANGIA CONSAPEVOLE</p>
      <p className="mt-4">FORMAZIONE QUALITA' E SICUREZZA</p>
      <p className="mt-4">E-mail: lormazionequalitasicurezza@gmail.com - Tel: 335/7909325</p>
    </motion.div>
  );
}

export default Allergeni; 