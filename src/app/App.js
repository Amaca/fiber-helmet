
import React from 'react'
import Scene from './scene/Scene';
import { Leva } from 'leva'

import Modal from './components/Modal.js';
import '../scss/main.scss';

export default function App() {
    return (
        <main>
            <div className="logo">KRMC</div>
            <div className="scene">
                <Scene />
            </div>
            <Modal />
            {/* <Social /> */}
            <Leva collapsed={true} hidden />
        </main>
    )
}