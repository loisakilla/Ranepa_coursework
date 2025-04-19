import React, { useState } from 'react';
import { Layout, Modal } from 'antd';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { teamMembers } from './data/teamMembers';
import { TeamMember, ModalContent } from './types';
import './styles/styles.css';
import HomePage from "./pages/HomePage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import MemberPage from "./pages/MemeberPage/MemberPage";

const { Content } = Layout;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: '',
    image: '',
    description: '',
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const completeLoading = () => setLoading(false);
  const showMemberPage = (memberId: string) => {
    setSelectedMember(memberId);
    setCurrentPage('member');
  };
  const showProjectModal = (title: string, image: string, description: string) => {
    setModalContent({ title, image, description });
    setModalVisible(true);
  };

  if (loading) {
    return <Preloader onComplete={completeLoading} />;
  }

  const member = selectedMember ? teamMembers.find(m => m.id === selectedMember) : null;

  return (
      <Layout className={`app-layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
        />
        <Content className="content">
          {currentPage === 'home' && (
              <HomePage
                  teamMembers={teamMembers}
                  showMemberPage={showMemberPage}
                  darkMode={darkMode}
              />
          )}
          {currentPage === 'team' && (
              <TeamPage
                  teamMembers={teamMembers}
                  showMemberPage={showMemberPage}
                  darkMode={darkMode}
              />
          )}
          {currentPage === 'member' && member && (
              <MemberPage
                  member={member}
                  darkMode={darkMode}
                  showProjectModal={showProjectModal}
              />
          )}
          <Modal
              visible={modalVisible}
              onCancel={() => setModalVisible(false)}
              footer={null}
              width={800}
              className={darkMode ? 'dark-modal' : ''}
              bodyStyle={{ padding: 0 }}
          >
            <div className={`modal-content ${darkMode ? 'dark' : 'light'}`}>
              <div className="modal-image-container">
                <img src={modalContent.image} alt={modalContent.title} className="modal-image" />
              </div>
              <div className="modal-body">
                <h3 className="modal-title">{modalContent.title}</h3>
                <p className="modal-description">{modalContent.description}</p>
              </div>
            </div>
          </Modal>
        </Content>
        <Footer darkMode={darkMode} />
      </Layout>
  );
};

export default App;