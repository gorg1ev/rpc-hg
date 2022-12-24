import React, { useContext } from 'react';

import Header from './components/Header/Header';
import Hands from './components/Hands/Hands';
import Battle from './components/Battel/Battle';
import RulesBtn from './components/RulesBtn/RulesBtn';
import Modal from './components/Modal/Modal';
import { AppProvider } from './context/app-context';

export default function App() {
   const { removeFromDOM } = useContext(AppProvider);

   return (
      <>
         <Modal />
         <Header />
         {!removeFromDOM && <Hands />}
         {removeFromDOM && <Battle />}

         <RulesBtn />
      </>
   );
}
