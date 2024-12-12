export default function Card() {
    return (
        <div className="border p-4 w-[32.3%] mt-6">
            <div className="flex justify-between">
                <h2 className="inline text-blue-600 font-semibold">In Progress</h2>
                <span className="border rounded-full px-2">4</span>
            </div>   
            
            <div className="bg-gray-100 p-3 rounded mt-4">
                <p className="text-base font-semibold">System design</p>
                <div className="flex justify-between">
                    <p className="inline text-sm">Prazo: 15 dias</p>
                    <span className="ml-">50%</span>
                </div>
            </div>
        </div>
    )
}