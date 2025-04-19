import React from 'react';
import { Typography } from 'antd';
import { TeamMember } from '../../types';

const { Title, Paragraph } = Typography;

interface TeamPageProps {
    teamMembers: TeamMember[];
    showMemberPage: (memberId: string) => void;
    darkMode: boolean;
}

const TeamPage: React.FC<TeamPageProps> = ({ teamMembers, showMemberPage, darkMode }) => {
    return (
        <div className={`team-page ${darkMode ? 'dark' : 'light'}`}>
            <div className="section-title">
                <Title level={2}>
                    <span className="text-purple">НАША</span> <span className="text-green">КОМАНДА</span>
                </Title>
                <Paragraph>Познакомьтесь с нашими профессионалами</Paragraph>
            </div>
            <div className="team-members">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-member" onClick={() => showMemberPage(member.id)}>
                        <div className="member-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="member-info">
                            <Title level={3}>{member.name}</Title>
                            <Paragraph>{member.role}</Paragraph>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;