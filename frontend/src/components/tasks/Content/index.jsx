import SearchBar from "../../SearchBar"
import { CiFilter } from "react-icons/ci";
import { SlPlus } from "react-icons/sl";

export default function Content() {
    return (
        <div className="flex-1">
            <SearchBar />
            <main className="px-6 py-6">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl">My Workspace</h1>    

                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-gray-300 p-2 rounded-md text-black">
                            <CiFilter />
                            Filtros
                        </button>
                        <button className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white">
                            <SlPlus size={24} />
                            New Project
                        </button>
                    </div>
                </div>
                
                <table className="w-full text-left mt-6">
                    <tr className="border-y">
                        {/* Head */}
                        <th className="font-semibold p-4 ">Task Title</th>
                        <th className="font-semibold p-4">Project</th>
                        <th className="font-semibold p-4">Responsible</th>
                        {/* Prazo */}
                        <th className="font-semibold p-4">Deadline</th>
                        <th className="font-semibold p-4">Status</th>
                    </tr>
                    <tr className="border-y">
                        {/* Content */}
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                    </tr>
                    <tr className="border-y">
                        {/* Content */}
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                    </tr>
                    <tr className="border-y">
                        {/* Content */}
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                        <td className="p-4">Teste</td>
                    </tr>
                </table>
            </main>
        </div>
        
    )
}