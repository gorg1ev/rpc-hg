import React, { useContext } from 'react';

import classes from './hands.module.scss';
import Hand from '../Hand/Hand';
import { AppProvider } from '../../context/app-context';

export default function Hands() {
   const { isHandsVisible } = useContext(AppProvider);

   const handsStyles = `${classes.hands} ${
      (isHandsVisible === 'show' && classes['show-hands']) ||
      (isHandsVisible === 'hide' && classes['hide-hands']) ||
      ''
   }`;

   return (
      <div className={handsStyles}>
         <Hand hand="paper" hide={true} />
         <Hand hand="scissors" hide={true} />
         <Hand hand="rock" hide={true} />
      </div>
   );
}
