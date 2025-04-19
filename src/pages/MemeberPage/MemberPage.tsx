import React, { useEffect } from 'react';
import { Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';
import { TeamMember } from '../../types';

const { Title, Paragraph } = Typography;

interface MemberPageProps {
    member: TeamMember;
    darkMode: boolean;
    showProjectModal: (title: string, image: string, description: string) => void;
}

const MemberPage: React.FC<MemberPageProps> = ({ member, darkMode, showProjectModal }) => {
    useEffect(() => {
        const chartDom = document.getElementById('skills-chart');
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option = {
                radar: {
                    indicator: member.skillsChart.map(skill => ({ name: skill.name, max: 100 })),
                },
                series: [
                    {
                        type: 'radar',
                        data: [
                            {
                                value: member.skillsChart.map(skill => skill.value),
                                name: 'Навыки',
                            },
                        ],
                    },
                ],
            };
            myChart.setOption(option);
            return () => myChart.dispose();
        }
    }, [member, darkMode]);

    return (
        <div className={`member-page ${darkMode ? 'dark' : 'light'}`}>
            <div className="hero-section">
                <div className="hero-content">
                    <div className="member-info">
                        <div className="glitch-text">
                            <div className="text-purple">{member.name}</div>
                            <div className="text-green">{member.role}</div>
                        </div>
                        <Paragraph>{member.description}</Paragraph>
                    </div>
                    <div className="member-image">
                        <img src={member.image} alt={member.name} />
                    </div>
                </div>
            </div>
            <div className="skills-section">
                <Title level={2}>
                    <span className="text-purple">НАВЫКИ</span>
                </Title>
                <div id="skills-chart" className="skills-chart"></div>
            </div>
            <div className="projects-section">
                <Title level={2}>
                    <span className="text-purple">ПРОЕКТЫ</span>
                </Title>
                <div className="projects-list">
                    {member.projects.map((project, index) => (
                        <div key={index} className="project-item" onClick={() => showProjectModal(project.title, project.image, project.description)}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <Title level={4}>{project.title}</Title>
                                <Paragraph>{project.description}</Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberPage;