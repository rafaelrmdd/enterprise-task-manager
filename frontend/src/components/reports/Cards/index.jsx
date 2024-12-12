import { TbFileExport } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { AiOutlineProject } from "react-icons/ai";

export function CardProductivity() {
    return (
        <div className="w-[31%] border rounded p-4">
            <div className="flex justify-between mb-4">
                <p className="font-semibold text-blue-600">Team Productivity</p> 
                <TbFileExport className="size-6"/>
            </div>
            <div className="flex justify-between mb-2">
                <p>Total de Tarefas Concluídas</p> 
                <span className="font-semibold">128</span>  
            </div>
            <div className="flex justify-between mb-2">
                <p>Média de Conclusão</p> 
                <span className="font-semibold">85%</span>  
            </div>
            <div className="flex justify-between">
                <p>Taréfas em Atraso</p>
                {/* Green if its positive, Red if its negative */}
                <span className="font-semibold">15</span>
            </div>
        </div>
    )
}

export function CardProjectTime() {
    return (
        <div className="w-[31%] border rounded p-4">
            <div className="flex justify-between mb-4">
                <p className="font-semibold text-green-600">Project Time</p> 
                <GoClock className="size-6"/>
            </div>
            <div className="flex justify-between mb-2">
                <p>Total de Tarefas Concluídas</p> 
                <span className="font-semibold">128</span>  
            </div>
            <div className="flex justify-between mb-2">
                <p>Média de Conclusão</p> 
                <span className="font-semibold">85%</span>  
            </div>
            <div className="flex justify-between">
                <p>Taréfas em Atraso</p>
                {/* Green if its positive, Red if its negative */}
                <span className="font-semibold">15</span>
            </div>
        </div>
    )
}

export function CardProjectStatus() {
    return (
        <div className="w-[33.3%] border rounded p-4">
            <div className="flex justify-between mb-4">
                <p className="font-semibold text-purple-600">Project Status</p> 
                <AiOutlineProject className="size-6"/>
            </div>
            <div className="flex justify-between mb-2">
                <p>Total de Tarefas Concluídas</p> 
                <span className="font-semibold">128</span>  
            </div>
            <div className="flex justify-between mb-2">
                <p>Média de Conclusão</p> 
                <span className="font-semibold">85%</span>  
            </div>
            <div className="flex justify-between">
                <p>Taréfas em Atraso</p>
                {/* Green if its positive, Red if its negative */}
                <span className="font-semibold">15</span>
            </div>
        </div>
    )
}