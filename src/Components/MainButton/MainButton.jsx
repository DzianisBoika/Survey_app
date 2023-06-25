import React from "react";
import { Button, Space } from 'antd';
import stylesheet from './MainButton.module.css';


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