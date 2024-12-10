import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  BarChart2, 
  Bell, 
  Search, 
  PlusCircle,
  Mail,
  Phone,
  MoreVertical
} from 'lucide-react';

export default function Team() {
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
          <div className="flex items-center p-2 bg-blue-50 rounded cursor-pointer text-blue-600">
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
              placeholder="Pesquisar membros da equipe..." 
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

        {/* Main Equipe Content */}
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Membros da Equipe</h1>
            <button className="flex items-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              <PlusCircle className="mr-2"/>
              Adicionar Membro
            </button>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((member) => (
              <div key={member} className="bg-white border rounded p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl">
                    JS
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">João Silva</h3>
                    <p className="text-gray-500">Desenvolvedor Sênior</p>
                    <div className="flex space-x-2 mt-2">
                      <Mail className="text-gray-500 w-5 h-5"/>
                      <Phone className="text-gray-500 w-5 h-5"/>
                    </div>
                  </div>
                </div>
                <MoreVertical className="text-gray-500 cursor-pointer"/>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}