import React, { useContext } from 'react';

import classes from './score.module.scss';
import { AppProvider } from '../../../../context/app-context';

export default function Score() {
   const { score } = useContext(AppProvider);

   return (
      <div className={classes.board}>
         <h4>Score</h4>
         <h3>{score}</h3>
      </div>
   );
}
