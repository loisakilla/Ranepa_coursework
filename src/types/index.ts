export interface TeamMember {
    id: string;
    name: string;
    role: string;
    description: string;
    skills: string[];
    image: string;
    skillsChart: {
        name: string;
        value: number;
    }[];
    projects: {
        title: string;
        description: string;
        image: string;
    }[];
}

export interface ModalContent {
    title: string;
    image: string;
    description: string;
}