import Sidebar from "../../components/SideBar";
import Content from "../../components/tasks/Content";

export default function Tasks() {

    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content />
        </div>
    )
}