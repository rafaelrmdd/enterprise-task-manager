import Content from "../../components/team/Content";
import Sidebar from "../../components/SideBar";

export default function Team() {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content />
        </div>
        
    )
}