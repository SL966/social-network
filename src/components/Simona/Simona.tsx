import React from 'react';
import './Simona.scss'


export function Simona () {
    return (
        <div>
            <div className="wrapper">
                <video autoPlay playsInline muted loop  poster="http://i.imgur.com/xHO6DbC.png">
                    <source
                        src="https://storage.coverr.co/videos/7RzPQrmB00s01rknm8VJnXahEyCy4024IMG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI5MTg2NjA0fQ.M8oElp5VNO8bWEWmdF2nGiu3qDOOYRFfP8wkKvl8I20"/>
                </video>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="400px"/>
                            <text x="72" y="50">WORLD</text>
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%"/>
                </svg>
            </div>
        </div>
    );
}


