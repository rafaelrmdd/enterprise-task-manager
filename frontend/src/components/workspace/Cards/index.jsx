export function CardTaskStatus() {
    return (
        <div className="border rounded p-4">
            <h2>Task Status</h2>
            <div className="flex gap-2 mt-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl">12</span> <p className="text-gray-400">In Progress</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">8</span> <p className="text-gray-400">Upcoming</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">24</span> <p className="text-gray-400">Completed</p>
                </div>
            </div>
        </div>
    )
}

export function CardProductivity() {
    return (
        <div className="border rounded p-4">
            <h2>Productivity</h2>
            <div className="flex gap-2 mt-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl">12</span> <p className="text-gray-400">Tasks Completed</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">8</span> <p className="text-gray-400">Hours Worked</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">24</span> <p className="text-gray-400">Average Task Duration</p>
                </div>
            </div>
        </div>
    )
}