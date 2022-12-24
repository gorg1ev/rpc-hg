import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './modal.module.scss';
import closeBtn from '../../assets/svg/icon-close.svg';
import imageRules from '../../assets/svg/image-rules.svg';
import { AppProvider } from '../../context/app-context';

function Backdrop(props) {
   const backdropClasses = `${classes.backdrop} ${props.backdropClasses}`;

   return <div className={backdropClasses} onClick={props.hide}></div>;
}

function ModalWindow(props) {
   const modalClasses = `${classes.modal} ${props.modalClasses}`;

   return (
      <div className={modalClasses}>
         <div>
            <h3 className={classes.h3}>Rules</h3>
            <img src={closeBtn} onClick={props.hide} alt="" />
         </div>
         <img src={imageRules} alt="" />
      </div>
   );
}

export default function Modal(props) {
   const { modal, onHideModal } = useContext(AppProvider);

   const modalEl = document.getElementById('modal');

   const modalAnimation = modal && classes[`${modal}-modal`];
   const backDropAnimation = modal && classes[`${modal}-backdrop`];

   return (
      <React.Fragment>
         {ReactDOM.createPortal(
            <Backdrop hide={onHideModal} backdropClasses={backDropAnimation} />,
            modalEl
         )}
         {ReactDOM.createPortal(
            <ModalWindow hide={onHideModal} modalClasses={modalAnimation} />,
            modalEl
         )}
      </React.Fragment>
   );
}
