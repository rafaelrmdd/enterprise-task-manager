import Sidebar from "../../components/SideBar"
import Content from "../../components/reports/Content"

export default function Reports() {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content />
        </div>
    )
}