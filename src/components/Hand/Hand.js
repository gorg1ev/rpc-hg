import React, { useContext } from 'react';

import classes from './hand.module.scss';
import rock from '../../assets/svg/icon-rock.svg';
import paper from '../../assets/svg/icon-paper.svg';
import scissors from '../../assets/svg/icon-scissors.svg';
import { AppProvider } from '../../context/app-context';

export default function Hand(props) {
   const { updateHands, hideHands } = useContext(AppProvider);

   // if some of the props.hand is equal to the value then return the imported svg
   const hand =
      (props.hand === 'rock' && rock) ||
      (props.hand === 'paper' && paper) ||
      (props.hand === 'scissors' && scissors);

   const handButtonStyle = !props.hide ? '-choosen' : '';
   const handStyle =
      props.hand === 'blank'
         ? classes.blank
         : `${classes.hand} ${classes[props.hand + handButtonStyle]} `;

   return (
      <div
         className={handStyle}
         onClick={() => {
            props.hide && updateHands(props.hand);
            props.hide && hideHands();
         }}
      >
         {props.hand !== 'blank' && (
            <img src={hand.toString()} alt={props.hand} />
         )}
         <span className={`${classes.span} ${classes[props.winner]}`}></span>
      </div>
   );
}
