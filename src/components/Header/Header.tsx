import React from 'react';
import { Layout, Switch } from 'antd';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';
import './Header.css'

const { Header: AntHeader } = Layout;

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) => {
    return (
        <AntHeader className="header">
            <div className="header-content">
                <div className="logo" onClick={() => setCurrentPage('home')}>
                    <span className="text-purple">EVA </span>
                    <span className="text-green">01</span>
                </div>
                <div className="nav-links">
                    <div
                        className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
                        onClick={() => setCurrentPage('home')}
                    >
                        <HomeOutlined />
                        <span style={{marginLeft: 10}}>Главная</span>
                    </div>
                    <div
                        className={`nav-item ${currentPage === 'team' ? 'active' : ''}`}
                        onClick={() => setCurrentPage('team')}
                    >
                        <TeamOutlined />
                        <span style={{marginLeft: 10}}>Команда</span>
                    </div>
                </div>
                <div className="theme-switch">
                    <span className="sun-icon">☀️</span>
                    <Switch checked={darkMode} onChange={toggleDarkMode} />
                    <span className="moon-icon">🌙</span>
                </div>
            </div>
        </AntHeader>
    );
};

export default Header;