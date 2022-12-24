import React from 'react';

import classes from './logo.module.scss';
import logo from '../../../../assets/svg/logo.svg';

export default function Logo() {
   return (
      <div>
         <img src={logo} className={classes.img} alt="" />
      </div>
   );
}
