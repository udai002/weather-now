const TodayForcast = ()=>{
    return <div className="bg-[#F0F0F0] p-4 mb-4">
    <p>Today's Forcast Times</p>
    <div className="flex flex-row flex-wrap ">
        <div className="flex flex-col justify-center mt-2 border-r-[1px] border-gray-400 w-fit mb-4 px-4">
            <p>6:00 AM</p>
            <img src="cloud.png" alt="cloudy" className="w-12 h-9 my-2" />
            <p>Morning</p>
        </div>
        <div className="flex flex-col justify-center mt-2 border-r-[1px] border-gray-400 w-fit mb-4 px-4">
            <p>9:00 AM</p>
            <img src="partialCloud.png" alt="cloudy" className="w-12 h-9 my-2" />
            <p>Afterno</p>
        </div>
        <div className="flex flex-col justify-center mt-2 border-r-[1px] border-gray-400 w-fit mb-4 px-4">
            <p>12:00 PM</p>
            <img src="cloud.png" alt="cloudy" className="w-12 h-9 my-2" />
            <p>Evening</p>
        </div>
        <div className="flex flex-col justify-center mt-2 border-r-[1px] border-gray-400 w-fit mb-4 px-4">
            <p>3:00 PM</p>
            <img src="cloud.png" alt="cloudy" className="w-12 h-9 my-2" />
            <p>Night</p>
        </div>
        <div className="flex flex-col justify-center mt-2 border-r-[1px] border-gray-400 w-fit mb-4 px-4">
            <p>6:00 PM</p>
            <img src="cloud.png" alt="cloudy" className="w-12 h-9 my-2" />
            <p>Tomorro</p>
        </div>
        <div className="flex flex-col justify-center mt-2 border-r-[1px] border-gray-400 w-fit mb-4 px-4">
            <p>9:00 PM</p>
            <img src="cloud.png" alt="cloudy" className="w-12 h-9 my-2" />
            <p>Weekly</p>
        </div>
    </div>
</div>
}

export default TodayForcast