import React from 'react';

import classes from './header.module.scss';
import Logo from './components/Logo/Logo';
import Score from './components/Score/Score';

export default function Header() {
   return (
      <header className={classes.header}>
         <Logo />
         <Score />
      </header>
   );
}
