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

function ParentsPageReuniao() {
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

        <div className="reuniao">
          <h1>Solicitar Reunião</h1>
          <div className="form">
            <label>Motivo da Solicitação</label>
            <select id="motivo" required>
            <option value="" disabled selected>Selecione um motivo</option>
              <option value="administrativo">Administrativo</option>
              <option value="documentacao">Documentação</option>
              <option value="denuncia">Denúncia</option>
            </select>
            
            <label>Turno</label>
            <div className="turno">
              <input name="turno-radio" type="radio" value="manha" />
              <span>Manhã</span>
              <input name="turno-radio" type="radio" value="tarde" />
              <span>Tarde</span>
            </div>

            <label>Descrição</label>
            <textarea id="descricao" name="descricao" rows="5" placeholder="Descreva o motivo da sua solicitação" required></textarea>
            
            <div className='botao'>
            <button>Solicitar</button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default ParentsPageReuniao;