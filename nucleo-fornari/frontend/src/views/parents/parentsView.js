import React from 'react';
import SideMenu from '../../components/SideMenu/sideMenuView';
import './parentsView.css';

function ParentsPage() {
  return (
    <div className="parents-page">
      <SideMenu />
      <div className="main-content">

        <div className="header">
          <h1>Núcleo Fornari</h1>
          <div className="notifications">
            <i className="bell-icon">🔔</i>
            <span className="notification-count">1</span>
          </div>
        </div>

        <div className="notice-board">
          <h2>Mural de Avisos</h2>
          <div className="notice">
            <p><strong>Por Viviane Pereira - Terça-Feira, 3 de Setembro</strong></p>
            <h3>Encontro de Pais - 20/09</h3>
            <p>Sala G1A às 16:00</p>
          </div>
          <div className="notice">
            <p><strong>Por Viviane Pereira - Terça-Feira, 1 de Setembro</strong></p>
            <h3>Feriado 7 Setembro - Atividades</h3>
            <p>Iremos realizar uma exposição de atividades dos alunos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentsPage;
