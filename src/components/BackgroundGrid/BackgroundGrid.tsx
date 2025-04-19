import React from 'react';
import './BackgroundGrid.css';

const BackgroundGrid: React.FC = () => {
    return (
        <div className="gridContainer">
            {Array.from({ length: 144 }).map((_, index) => (
                <div
                    key={index}
                    className="gridCell"
                    style={{
                        animation: `pulse ${3 + Math.random() * 5}s infinite alternate`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                >
                    {Math.random() > 0.85 && (
                        <div className={"flash"}></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BackgroundGrid;