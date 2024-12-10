import { 
    LayoutDashboard, 
    CheckSquare, 
    Users, 
    BarChart2, 
    Calendar, 
    Bell, 
    Search, 
    PlusCircle,
    Filter,
    MoreVertical
  } from 'lucide-react';
  
  export default function Tasks() {
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
            <div className="flex items-center p-2 bg-blue-50 rounded cursor-pointer text-blue-600">
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
                placeholder="Pesquisar tarefas..." 
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
  
          {/* Main Tarefas Content */}
          <main className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Minhas Tarefas</h1>
              <div className="flex space-x-2">
                <button className="flex items-center bg-gray-200 p-2 rounded hover:bg-gray-300">
                  <Filter className="mr-2 text-gray-600"/>
                  Filtros
                </button>
                <button className="flex items-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                  <PlusCircle className="mr-2"/>
                  Nova Tarefa
                </button>
              </div>
            </div>
  
            {/* Tasks List */}
            <div className="bg-white border rounded">
              <div className="grid grid-cols-6 p-3 bg-gray-100 font-semibold border-b">
                <div className="col-span-2">Título da Tarefa</div>
                <div>Projeto</div>
                <div>Responsável</div>
                <div>Prazo</div>
                <div>Status</div>
              </div>
              
              {/* Task Rows */}
              <div className="divide-y">
                {[1,2,3,4].map((task) => (
                  <div key={task} className="grid grid-cols-6 p-3 items-center hover:bg-gray-50">
                    <div className="col-span-2 flex items-center">
                      <CheckSquare className="mr-3 text-green-600"/>
                      <span>Implementar novo módulo de relatórios</span>
                    </div>
                    <div>Sistema de Gestão</div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-200 rounded-full mr-2 flex items-center justify-center">JD</div>
                      João Silva
                    </div>
                    <div>15 Dez 2024</div>
                    <div className="flex items-center justify-between">
                      <span className="bg-green-100 text-green-600 px-2 rounded-full">Em Progresso</span>
                      <MoreVertical className="text-gray-500 cursor-pointer"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }