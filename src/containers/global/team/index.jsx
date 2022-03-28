import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Team from "../../../components/team";
import HomeData from "../../../data/home.json";

const TeamContainer = ({ classOption }) => {
    return (
        <div className={`team-section overflow-hidden ${classOption}`}>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="TEAM"
                                title="Persone, <span class='text-primary'>Dietro</span> lo schermo"
                                excerptClassOption="mb-5"
                                excerpt="Siamo lieti di presentare il nostro team di professionisti e innovatori del digitale"
                            />
                            <p className="high-light mb-8">
                                L&apos;innovazione parte dalle persone
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Scoprix"
                                path="/team"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="new-team-members">
                            {HomeData[5].team &&
                                HomeData[5].team.map((single, key) => {
                                    return <Team key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TeamContainer.propTypes = {
    classOption: PropTypes.string,
};

TeamContainer.defaultProps = {
    classOption: "section-pb",
};

export default TeamContainer;
