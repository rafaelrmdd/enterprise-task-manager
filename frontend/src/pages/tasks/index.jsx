import { tasksApi } from "@/api/tasks";

import Sidebar from "../../components/SideBar";
import Content from "../../components/tasks/Content";

export const getStaticProps = async () => {
    const response = await tasksApi.get('/tasks')

    return {
        props: {
            tasks: response.data
        }
    }
}

export default function Tasks({tasks}) {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content />
            {/* returning data only for tests */}
            {console.log(tasks)}
        </div>
    )
}