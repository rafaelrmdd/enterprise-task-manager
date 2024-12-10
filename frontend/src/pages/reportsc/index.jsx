import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  BarChart2, 
  Bell, 
  Search, 
  Download,
  Calendar,
  Clock,
  Briefcase,
  TrendingUp
} from 'lucide-react';

export default function Relatorios() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8 text-blue-600">TaskMaster</div>
        
        <nav className="space-y-2">
          <div className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
            <LayoutDashboard className="mr-3 text-blue-600"/>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
            <CheckSquare className="mr-3 text-green-600"/>
            <span>Tarefas</span>
          </div>
          <div className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
            <Users className="mr-3 text-purple-600"/>
            <span>Equipe</span>
          </div>
          <div className="flex items-center p-2 bg-blue-50 rounded cursor-pointer text-blue-600">
            <BarChart2 className="mr-3 text-orange-600"/>
            <span>Relatórios</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center bg-gray-100 p-2 rounded-full w-1/2">
            <Search className="text-gray-500 mr-2"/>
            <input 
              type="text" 
              placeholder="Pesquisar relatórios..." 
              className="bg-transparent w-full outline-none"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="text-gray-600"/>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              JD
            </div>
          </div>
        </header>

        {/* Main Relatórios Content */}
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Relatórios</h1>
            <div className="flex space-x-2">
              <button className="flex items-center bg-gray-200 p-2 rounded hover:bg-gray-300">
                <Calendar className="mr-2 text-gray-600"/>
                Período
              </button>
              <button className="flex items-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                <Download className="mr-2"/>
                Exportar
              </button>
            </div>
          </div>

          {/* Relatórios Section */}
          <div className="grid grid-cols-3 gap-4">
            {/* Produtividade da Equipe */}
            <div className="bg-white border rounded p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-blue-600">Produtividade da Equipe</h2>
                <Download className="text-gray-500 cursor-pointer"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total de Tarefas Concluídas</span>
                  <span className="font-semibold">128</span>
                </div>
                <div className="flex justify-between">
                  <span>Média de Conclusão</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tarefas em Atraso</span>
                  <span className="font-semibold text-red-600">12</span>
                </div>
              </div>
            </div>

            {/* Tempo de Projeto */}
            <div className="bg-white border rounded p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-green-600">Tempo de Projeto</h2>
                <Clock className="text-gray-500"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Projetos Ativos</span>
                  <span className="font-semibold">7</span>
                </div>
                <div className="flex justify-between">
                  <span>Tempo Médio de Projeto</span>
                  <span className="font-semibold">45 dias</span>
                </div>
                <div className="flex justify-between">
                  <span>Projetos Concluídos</span>
                  <span className="font-semibold text-green-600">3</span>
                </div>
              </div>
            </div>

            {/* Status de Projetos */}
            <div className="bg-white border rounded p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-purple-600">Status de Projetos</h2>
                <Briefcase className="text-gray-500"/>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Em Progresso</span>
                  </div>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Concluídos</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Pendentes</span>
                  </div>
                  <span className="font-semibold">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Gráfica */}
          <div className="bg-white border rounded p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-orange-600">Desempenho por Mês</h2>
              <TrendingUp className="text-gray-500"/>
            </div>
            <div className="h-64 flex items-end justify-between">
              {[
                { month: 'Jan', performance: 70 },
                { month: 'Fev', performance: 85 },
                { month: 'Mar', performance: 65 },
                { month: 'Abr', performance: 90 },
                { month: 'Mai', performance: 75 },
                { month: 'Jun', performance: 95 }
              ].map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-10 bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
                    style={{ height: `${data.performance}px` }}
                  ></div>
                  <span className="text-xs mt-1 text-gray-500">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}