import React from "react";
import style from "./AuthorTab.module.scss";

const AuthorTab = ({ authorBio }) => (
    <div className={style.authorContainer}>
        {authorBio && authorBio.length > 0 ? (
            authorBio.map((author) => (
                <div key={author.name}>
                    <h3 className={style.bioName}>{author.name}</h3>
                    <p className={style.bio}>{author.bio}</p>
                </div>
            ))
        ) : (
            <p className={style.bio}>Unknown Author</p>
        )}
    </div>
);

export default AuthorTab;
