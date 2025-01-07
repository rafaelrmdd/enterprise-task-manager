import { PieChart } from '@mui/x-charts/PieChart';
import { useContext } from 'react';
import { ProjectsContext, TasksContext } from '../../../pages/_app';

export function PieGraphTasks() {

    const tasksItems = useContext(TasksContext);
    const taskItemsInProgress = tasksItems.filter(task => task.status === 0).length;
    const taskItemsFinished = tasksItems.filter(task => task.status === 1).length;
    const taskItemsInOverdue = tasksItems.filter(task => task.status === 2).length;
    console.log('taskitems: ', tasksItems);

    return (
        <>
            <div className='mt-7'>
                <div className='flex justify-center w-[240px]'>
                    <h2 className='text-blue-600'>Tasks</h2>
                </div>
                
                <PieChart
                    className="mt-2 ml-[-85px]"
                    series={[
                        {
                            data: [
                                {id: 0, value: taskItemsInProgress, color: 'orange'},
                                {id: 1, value: taskItemsFinished, color: 'green'},
                                {id: 2, value: taskItemsInOverdue, color: 'red'}
                            ]
                        }
                    ]}
                    width={505.5}
                    height={250}
                />
            </div>

            <div className="flex flex-col items-start ml-[-140px]">
                <div className="flex justify-center items-center gap-1">
                    <div className="size-4 bg-red-500"></div> <span>Overdue</span>
                </div>
                
                <div className="flex justify-center items-center gap-1">
                    <div className="size-4 bg-green-500"></div> <span>Finished</span>
                </div>

                <div className="flex justify-center items-center gap-1">
                    <div className="size-4 bg-orange-500"></div> <span>In Progress</span>
                </div>
            </div>
        </>
    )
}

export function PieGraphProjects() {

    const projectItems = useContext(ProjectsContext);
    const projectItemsInProgress = projectItems.filter(project => project.status === 0).length;
    const projectItemsFinished = projectItems.filter(project => project.status === 1).length;
    const projectItemsInOverdue = projectItems.filter(project => project.status === 2).length

    return (
        <>
            <div className='mt-7'>
                <div className='flex justify-center w-[240px]'>
                    <h2 className='mr-[-170px] text-green-600'>Projects</h2>
                </div>

                <PieChart
                    className="mt-2"
                    series={[
                        {
                            data: [
                                {id: 0, value: projectItemsInProgress, color: 'orange'},
                                {id: 1, value: projectItemsFinished, color: 'green'},
                                {id: 2, value: projectItemsInOverdue, color: 'red'}
                            ]
                        }
                    ]}
                    width={505.5}
                    height={250}
                />
            </div>

            <div className="flex flex-col items-start ml-[-140px]">
                <div className="flex justify-center items-center gap-1">
                    <div className="size-4 bg-red-500"></div> <span>Overdue</span>
                </div>
                
                <div className="flex justify-center items-center gap-1">
                    <div className="size-4 bg-green-500"></div> <span>Finished</span>
                </div>

                <div className="flex justify-center items-center gap-1">
                    <div className="size-4 bg-orange-500"></div> <span>In Progress</span>
                </div>
            </div>
        </>
    )
}