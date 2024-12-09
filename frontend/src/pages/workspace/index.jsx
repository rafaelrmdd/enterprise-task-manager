import Content from "../../components/Content"

export default function Workspace() {
    return (
        <div className="flex flex-row h-screen">
            <aside className="p-4 w-64 border-r bg-white">
                <h1 className="text-blue-700 font-bold text-2xl">TaskMaster</h1>

                <nav className="mt-8">
                    <p className="">Dashboard</p>
                    <p>Tasks</p>
                    <p>Team</p>
                    <p>Reports</p>
                </nav>
            </aside>
            <Content/>
        </div>
    )
}