import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Parallax from "parallax-js";

const Intro = ({ data }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="hero-slider">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-slide-content">
                            <h1
                                className="title animated"
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            ></h1>
                            {/* <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScVdUNDhQf6KcSMb8sI6ZZWN_vAxzgPd1aENlX7Im8rA1Ozbg/viewform?usp=sf_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-lg animated delay1 btn-primary btn-hover-primary me-4 mb-3 mb-sm-0"
                            >
                                Richiedi il tuo Checkup
                            </a> */}
                            <Button
                                classOption="btn btn-lg animated delay1 btn-primary btn-hover-primary me-4 mb-3 mb-sm-0"
                                text="Richiedi il tuo Checkup"
                                path="/checkup"
                            />
                            <Button
                                classOption="btn btn-lg animated delay2 btn-secondary btn-hover-secondary mb-3 mb-sm-0"
                                text="Chi siamo"
                                path="/about"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="hero-img scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    className="animated"
                                    src={`${process.env.PUBLIC_URL}/${data.image}`}
                                    alt=""
                                    width={"auto"}
                                    height={"auto"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
