import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
    {
        id: "alena",
        name: "Алена",
        role: "Designer / Frontend Developer",
        description:
            "Креативный дизайнер и фронтенд-разработчик с опытом создания красивых и функциональных пользовательских интерфейсов.",
        skills: [
            "UI/UX Design",
            "React",
            "CSS/SCSS",
            "Figma",
            "Adobe Creative Suite",
            "TypeScript",
        ],
        image:
            "https://readdy.ai/api/search-image?query=professional%20female%20UI%20designer%20with%20purple%20hair%20in%20a%20futuristic%20cyberpunk%20setting&width=600&height=800&seq=1",
        skillsChart: [
            { name: "UI/UX", value: 95 },
            { name: "React", value: 85 },
            { name: "CSS/SCSS", value: 90 },
            { name: "TypeScript", value: 75 },
            { name: "Figma", value: 95 },
        ],
        projects: [
            {
                title: "Редизайн E-Commerce",
                description:
                    "Полный редизайн интернет-магазина с улучшением UX и увеличением конверсии на 35%.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20e-commerce%20website%20interface%20design%20with%20purple%20and%20green%20neon%20accents&width=800&height=500&seq=2",
            },
            {
                title: "Мобильное приложение",
                description:
                    "Дизайн и разработка интерфейса мобильного приложения для фитнес-трекинга.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20fitness%20mobile%20app%20interface%20with%20purple%20and%20green%20color%20scheme&width=800&height=500&seq=3",
            },
        ],
    },
    {
        id: "gleb",
        name: "Глеб",
        role: "Fullstack Developer",
        description:
            "Опытный fullstack-разработчик с глубокими знаниями фронтенд и бэкенд технологий.",
        skills: [
            "JavaScript/TypeScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "AWS",
        ],
        image:
            "https://readdy.ai/api/search-image?query=professional%20male%20fullstack%20developer%20in%20cyberpunk%20setting&width=600&height=800&seq=5",
        skillsChart: [
            { name: "JavaScript", value: 95 },
            { name: "React", value: 90 },
            { name: "Node.js", value: 85 },
            { name: "Databases", value: 80 },
            { name: "DevOps", value: 75 },
        ],
        projects: [
            {
                title: "CRM-система",
                description:
                    "Разработка полнофункциональной CRM-системы для управления клиентами и продажами.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20CRM%20dashboard%20interface%20with%20cyberpunk%20aesthetics&width=800&height=500&seq=6",
            },
            {
                title: "API Платформа",
                description:
                    "Создание масштабируемой API-платформы для интеграции различных сервисов.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20API%20platform%20interface%20with%20code%20visualization&width=800&height=500&seq=7",
            },
        ],
    },
    {
        id: "gosha",
        name: "Гоша",
        role: "Team Lead / Frontend Developer",
        description:
            "Опытный руководитель команды и фронтенд-разработчик с сильными лидерскими качествами. Специализируется на управлении проектами, архитектуре фронтенда и оптимизации рабочих процессов.",
        skills: [
            "Project Management",
            "React",
            "TypeScript",
            "Team Leadership",
            "Frontend Architecture",
            "CI/CD",
        ],
        image:
            "https://readdy.ai/api/search-image?query=professional%20male%20team%20lead%20in%20cyberpunk%20setting%2C%20confident%20pose%2C%20leading%20a%20tech%20team%2C%20futuristic%20office%20environment%20with%20purple%20and%20green%20neon%20lighting%2C%20serious%20expression%2C%20dark%20atmosphere%20with%20holographic%20displays&width=600&height=800&seq=9&orientation=portrait",
        skillsChart: [
            { name: "Leadership", value: 95 },
            { name: "React", value: 90 },
            { name: "Architecture", value: 85 },
            { name: "TypeScript", value: 90 },
            { name: "Management", value: 95 },
        ],
        projects: [
            {
                title: "Система управления проектами",
                description:
                    "Разработка и внедрение системы управления проектами для оптимизации рабочих процессов команды.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20project%20management%20dashboard%20with%20cyberpunk%20aesthetics%2C%20team%20workflow%20visualization%20with%20purple%20and%20green%20neon%20elements%2C%20task%20tracking%20interface%2C%20dark%20mode%20UI%20with%20glowing%20elements%2C%20high%20tech%20management%20system&width=800&height=500&seq=10&orientation=landscape",
            },
            {
                title: "Образовательная платформа",
                description:
                    "Руководство разработкой интерактивной образовательной платформы с системой отслеживания прогресса.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20educational%20platform%20interface%20with%20cyberpunk%20style%2C%20learning%20dashboard%20with%20purple%20and%20green%20neon%20elements%2C%20progress%20tracking%20visualization%2C%20dark%20mode%20UI%20with%20glowing%20interactive%20elements%2C%20high%20tech%20e-learning%20environment&width=800&height=500&seq=11&orientation=landscape",
            },
            {
                title: "Корпоративный портал",
                description:
                    "Создание внутреннего корпоративного портала для улучшения коммуникации и совместной работы команды.",
                image:
                    "https://readdy.ai/api/search-image?query=futuristic%20corporate%20intranet%20portal%20with%20cyberpunk%20aesthetics%2C%20team%20collaboration%20interface%20with%20purple%20and%20green%20neon%20elements%2C%20communication%20dashboard%2C%20dark%20mode%20UI%20with%20glowing%20interactive%20elements%2C%20high%20tech%20workplace%20environment&width=800&height=500&seq=12&orientation=landscape",
            },
        ],
    },
];