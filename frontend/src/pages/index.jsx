import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  BarChart2, 
  Calendar, 
  Bell, 
  Search, 
  PlusCircle 
} from 'lucide-react';

export default function Home() {
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
          <div className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
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
              placeholder="Pesquisar projetos, tarefas..." 
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

        {/* Main Dashboard */}
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Meu Workspace</h1>
            <button className="flex items-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              <PlusCircle className="mr-2"/>
              Novo Projeto
            </button>
          </div>

          {/* Kanban Board Preview */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border rounded p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-blue-600">Em Progresso</h2>
                <span className="bg-blue-100 text-blue-600 px-2 rounded-full">4</span>
              </div>
              {/* Task Card Placeholders */}
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded">
                  <h3 className="font-medium">Redesign do Sistema</h3>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Prazo: 15 dias</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
  

