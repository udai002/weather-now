const Wind = () => {
    return <div className="bg-[#F0F0F0] p-6">
        <p>Air Quality Index</p>
        <div className="flex flex-row p-4 ">
            <div className="mt-2 mr-10">
                <p>Feels Like Temperature</p>
                <h1 className="font-bold text-3xl mb-3">Wi</h1>
                <p>Rain Probability</p>
                <h1 className="font-bold text-3xl">0%</h1>
            </div>
            <div className="mt-2">
                <p>Wind Speed </p>
                <h1 className="font-bold text-3xl mb-3">Rainfull:0.2 mm/h</h1>
                <p>UV index</p>
                <h1 className="font-bold text-3xl">3</h1>
            </div>
        </div>
    </div>
}

export default Wind