import React, { useState, useEffect } from "react";
import style from "./Loading.module.scss";
import facts from "../../data/facts.js";

const Loading = () => {
    
    const [randomFact, setRandomFact] = useState("");

    useEffect(() => {
        setRandomFact(facts[Math.floor(Math.random() * facts.length)]);
    }, []);

    // Make sure the fact is different each time
    const newFact = () => {
        let newRandomFact = facts[Math.floor(Math.random() * facts.length)];
        while (newRandomFact === randomFact) {
            newRandomFact = facts[Math.floor(Math.random() * facts.length)];
        }
        setRandomFact(newRandomFact);
    };

    return (
        <div className={style.background}>
            <div className={style.loadingContainer}>
                <p className={style.loading}>While you wait... </p>
                <p className={style.fact}>{randomFact}</p>
                <button className={style.button} onClick={() => newFact()}>
                    Next Fact
                </button>
            </div>
        </div>
    );
};

export default Loading;
