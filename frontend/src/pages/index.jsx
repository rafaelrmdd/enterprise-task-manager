import Content from "../components/dashboard/Content"
import Sidebar from "../components/SideBar";

export default function Workspace() {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content />
        </div>
    )
}