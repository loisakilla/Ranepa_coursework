import React from 'react';
import { Button, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { TeamMember } from '../../types';

const { Title, Paragraph } = Typography;

interface HomePageProps {
    teamMembers: TeamMember[];
    showMemberPage: (memberId: string) => void;
    darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ teamMembers, showMemberPage, darkMode }) => {
    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-content">
                    <div className="glitch-text">
                        <div className="text-purple">КОМАНДА</div>
                        <div className="text-green">РАЗРАБОТЧИКОВ</div>
                    </div>
                    <Paragraph className="hero-description">
                        Мы создаем инновационные цифровые решения для ваших целей.
                    </Paragraph>
                    <Button className="cta-button" onClick={() => showMemberPage(teamMembers[0].id)}>
                        Познакомиться
                        <ArrowRightOutlined />
                    </Button>
                </div>
            </div>
            <div className={`team-section ${darkMode ? 'dark' : 'light'}`}>
                <div className="section-title">
                    <Title level={2}>
                        <span className="text-purple">НАША</span> <span className="text-green">КОМАНДА</span>
                    </Title>
                </div>
                <div className="team-members">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-member">
                            <div className="member-image" onClick={() => showMemberPage(member.id)}>
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="member-info">
                                <Title level={3}>{member.name}</Title>
                                <Paragraph>{member.role}</Paragraph>
                                <Button onClick={() => showMemberPage(member.id)}>
                                    Подробнее
                                    <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;