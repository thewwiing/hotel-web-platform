import React from 'react'
import {Parallax} from 'react-parallax';
import mainBg from "../../../assets/images/backgrounds/main-bg.jpg";

export let withParallax = (Component) => {

    const ParallaxContainer = (props) => {
        return (
            <section className={`parallax-wrapper`}>
                <Parallax
                    bgImage={mainBg}
                    strength={600}
                >
                    <Component {...props} />
                </Parallax>
            </section>
        )
    };

    return ParallaxContainer
};
