import React, { useContext } from 'react';

import classes from './battle.module.scss';
import '../../assets/scss/_typography.scss';
import Hand from '../Hand/Hand';
import { AppProvider } from '../../context/app-context';

export default function Battle() {
   const {
      playerHand,
      compHand,
      winner,
      showHands,
      handsPickedVisible,
      animation,
      winnerAnimation,
   } = useContext(AppProvider);

   const handsPickedStypes = `${classes['hand-picked']} ${classes[handsPickedVisible]}`;

   let playerWin;
   let compWin;
   if (winnerAnimation === 'win' && animation) {
      playerWin = 'winnerIn';
   }

   if (winnerAnimation === 'win' && !animation) {
      playerWin = 'winnerOut';
   }

   if (winnerAnimation === 'lose' && animation) {
      compWin = 'winnerIn';
   }

   if (winnerAnimation === 'lose' && !animation) {
      compWin = 'winnerOut';
   }

   return (
      <div className={classes.battle}>
         <div
            className={`${handsPickedStypes} ${
               winnerAnimation !== 'win' && classes.zIndex
            }`}
         >
            <h2 className="picked-header">You picked</h2>
            <Hand hand={playerHand} hide={false} winner={playerWin} />
         </div>
         {winner && (
            <div
               className={`${classes['play-again']} ${
                  animation ? classes.slideUp : classes.slideDown
               } `}
            >
               <h1 className="play-again-header">You {winner}</h1>
               <button onClick={showHands}>Play again</button>
            </div>
         )}
         <div
            className={`${handsPickedStypes} 
              ${winnerAnimation !== 'lose' && classes.zIndex}
         `}
         >
            <h2 className="picked-header">The house picked</h2>
            <Hand hand={compHand} hide={false} winner={compWin} />
         </div>
      </div>
   );
}
