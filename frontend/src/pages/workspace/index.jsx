import Content from "../../components/workspace/Content"
import Sidebar from "../../components/SideBar";
import { tasksApi } from "@/api/tasks";

export const getStaticProps = async () => {
    const response = await tasksApi.get('/tasks')
    console.log(response.data)

    return {
        props: {
            tasks: response.data
        }
    }
}

export default function Workspace() {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content />
        </div>
    )
}