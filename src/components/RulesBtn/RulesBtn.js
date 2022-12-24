import React, { useContext } from 'react';

import classes from './rules-btn.module.scss';
import { AppProvider } from '../../context/app-context';

export default function RulesBtn(props) {
   const { onShowModal } = useContext(AppProvider);

   return (
      <div>
         <button className={classes['rules-btn']} onClick={onShowModal}>
            Rules
         </button>
      </div>
   );
}
