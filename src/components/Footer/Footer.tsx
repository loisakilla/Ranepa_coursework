import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph } = Typography;

interface FooterProps {
    darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
    return (
        <AntFooter className={`footer ${darkMode ? 'dark' : 'light'}`}>
            <div className="footer-content">
                <div className="footer-section">
                    <div className="logo">
                        <span className="text-purple">TEAM</span>
                        <span className="text-green">DEV</span>
                    </div>
                    <Paragraph className="footer-description">
                        Создаем инновационные цифровые решения для современного бизнеса
                    </Paragraph>
                    <div className="social-links">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <Title level={4} className="footer-title">Навигация</Title>
                    <ul className="footer-links">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Команда</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Портфолио</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <Title level={4} className="footer-title">Контакты</Title>
                    <ul className="contact-info">
                        <li><i className="fas fa-map-marker-alt"></i> г. Москва, ул. Цифровая, 42</li>
                        <li><i className="fas fa-phone"></i> +7 (999) 123-45-67</li>
                        <li><i className="fas fa-envelope"></i> contact@teamdev.ru</li>
                        <li><i className="fas fa-clock"></i> Пн-Пт: 10:00 - 19:00</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 TeamDev. Все права защищены.</p>
            </div>
        </AntFooter>
    );
};

export default Footer;