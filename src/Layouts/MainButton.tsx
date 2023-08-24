import React from "react";
import { Button } from 'antd';
import stylesheet from '../Assets/Styles/MainButton.module.scss';

const MainButton: React.FC = () => {
    return (
        <div className={stylesheet.wrapper}>
            <Button href='/' className={stylesheet.button} type="primary">
                ВХОД
            </Button>
        </div>
    );
}

export default MainButton;