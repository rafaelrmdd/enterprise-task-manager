import { PieChart } from '@mui/x-charts/PieChart';

export default function PieGraph() {
    return (
        <>
            <div>
                <PieChart
                    className="mt-7 ml-[-85px]"
                    series={[
                        {
                            data: [
                                {id: 0, value: 5, color: 'orange'},
                                {id: 1, value: 10, color: 'green'},
                                {id: 2, value: 2, color: 'red'}
                            ]
                        }
                    ]}
                    width={505.5}
                    height={250}
                />
            </div>

            <div className="flex flex-col items-start ml-[-100px]">
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