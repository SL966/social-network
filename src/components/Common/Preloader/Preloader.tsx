import React from 'react';
import s from "../../Users/Users.module.scss";
import preloader from "../../../images/Preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img className={s.imgPreloader} src={preloader}/>
        </div>
    );
};

export default Preloader;