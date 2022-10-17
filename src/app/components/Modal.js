import React, { useState } from 'react'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ModalContent from './ModalContent'

gsap.registerPlugin(ScrollTrigger)

export default function Modal() {

    const [closed, openModal] = useState(true);

    const onEnter = ({ currentTarget }) => {
        if(closed) {
            gsap.to(currentTarget, { 
                duration: 0.4, ease: Expo.easeOut, width: 50, height: 50, 
            });
        }
      };
      
    const onLeave = ({ currentTarget }) => {
        if(closed) {
            gsap.to(currentTarget, { 
                duration: 0.4, ease: Expo.easeOut, width: 40, height: 40
            });
        }
    };

    return (
        <div className={closed ? 'modal' : 'modal _open'}>
            <div className="modal-btn" 
                onClick={() => openModal(!closed)}
                onMouseEnter={(x) => onEnter(x)}
                onMouseLeave={(x) => onLeave(x)}
                >
                <span>+</span>
            </div>
            <ModalContent/>
            <div className="modal-bg"></div>
        </div>
    )
}