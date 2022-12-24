import React, { useState, useEffect, createContext } from 'react';

export const AppProvider = createContext();
const MAX = 10;
const MIN = 6;

export default function AppContext(props) {
   const [modal, setModal] = useState(null);
   const [playerHand, setPlayerHand] = useState();
   const [compHand, setCompHand] = useState();
   const [isHandsVisible, setIsHandsVisible] = useState(null);
   const [handsPickedVisible, setHandsPickedVisible] = useState(null);
   const [removeFromDOM, setRemoveFromDOM] = useState(false);
   const [winner, setWinner] = useState(null);
   const [winnerAnimation, setWinnerAnimation] = useState(null);
   const [animation, setAnimation] = useState();
   const [score, setScorer] = useState(12);

   function onShowModal() {
      setModal('show');
   }

   function onHideModal() {
      setModal('hide');
   }

   // hands for pc to choose
   const hands = ['rock', 'paper', 'scissors'];

   const timeout = Math.floor(Math.random() * (MAX - MIN) + MIN);

   useEffect(() => {
      const rules = new Map([
         ['rock', 'scissors'],
         ['paper', 'rock'],
         ['scissors', 'paper'],
      ]);

      const timeoutWinner = setTimeout(() => {
         if (rules.get(playerHand) === compHand) {
            setWinner('win');
            setWinnerAnimation('win');
            setScorer((prevState) => prevState + 1);
         }
         if (rules.get(compHand) === playerHand) {
            setWinner('lose');
            setWinnerAnimation('lose');
            setScorer((prevState) => prevState - 1);
         }
         if (playerHand === compHand) setWinner('draw');

         setAnimation(true);
      }, 2000);

      return () => {
         clearTimeout(timeoutWinner);
      };
   }, [playerHand, compHand]);

   function updateHands(hand) {
      setPlayerHand(hand);
      setCompHand('blank');

      setTimeout(() => {
         const randomHand = Math.floor(Math.random() * hands.length);
         setCompHand(hands[randomHand]);
      }, timeout * 1000);
   }

   function showHands() {
      setIsHandsVisible('show');

      setAnimation(false);

      setTimeout(() => {
         setHandsPickedVisible('hide');
         setWinner(null);
         setWinnerAnimation(null);
      }, 1300);

      setTimeout(() => {
         setRemoveFromDOM(false);
      }, 1600);
   }

   function hideHands() {
      setIsHandsVisible('hide');
      setHandsPickedVisible('show');

      setTimeout(() => {
         setRemoveFromDOM(true);
      }, 300);
   }

   const values = {
      modal,
      onShowModal,
      onHideModal,
      playerHand,
      compHand,
      updateHands,
      isHandsVisible,
      handsPickedVisible,
      showHands,
      hideHands,
      removeFromDOM,
      winner,
      animation,
      winnerAnimation,
      score,
   };

   return (
      <AppProvider.Provider value={values}>
         {props.children}
      </AppProvider.Provider>
   );
}
