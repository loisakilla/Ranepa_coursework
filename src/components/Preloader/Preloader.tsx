import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Preloader.css';
import BackgroundGrid from "../BackgroundGrid/BackgroundGrid";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setShowButton(true), 500);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 30);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={"preloader"}>
            <div className={"preloaderBg"}></div>
            <div className={"preloaderGrid"}>
                <BackgroundGrid />
            </div>
            <div className="preloader-content">
                <div className="glitch-text">
                    <span className="text-purple">EVA </span>
                    <span className="text-green">01</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-text">{progress}% Загрузка...</div>
                {showButton && (
                    <Button
                        onClick={onComplete}
                        className="enter-button"
                        icon={<ArrowRightOutlined />}
                    >
                        Войти на сайт
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Preloader;