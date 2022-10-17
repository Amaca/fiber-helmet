
import React from 'react'
import Scene from './scene/Scene';
import { Leva } from 'leva'
import { Loader } from '@react-three/drei'
import Social from './components/Social.js';
import Modal from './components/Modal.js';
import '../scss/main.scss';

export default function App() {
    return (
        <main>
            <div className="logo"><span>KRMC</span></div>
            <div className="scene">
                <Scene />
            </div>
            <Modal />
            <div className="scrolldown"><span>SCROLL</span></div>
            <Social />
            <Loader />
            <Leva collapsed={true} hidden />
        </main>
    )
}