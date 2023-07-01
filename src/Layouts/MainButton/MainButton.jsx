import React from "react";
import { Button } from 'antd';
import stylesheet from '../../Assets/Styles/MainButton.module.scss';


const MainButton = () => {
    return (
        <div className={stylesheet.wrapper}>
            <Button href="/main" className={stylesheet.button} type="primary">
                ВХОД
            </Button>
        </div>
    );
}

export default MainButton;