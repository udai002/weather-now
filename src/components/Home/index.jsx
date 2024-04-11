import TodayForcast from "../TodaysForcast"
import Wind from "../Wind"

const weatherStatus = [{
    status: "Sunny",

}]


const Home = () => {
    return <div>
        <div className="p-4">
            <input type="text" placeholder="Enter city name" className="p-1 px-2 font-serif w-[70%]  border-2 outline-none rounded" />
        </div>
        <div className="flex flex-row flex-wrap ">
            <div className="p-2 px-5 md:w-[70%]">
                <div className="flex flex-row flex-wrap items-center">
                    <div className="mr-5">
                        <h1 className="font-bold text-4xl ">Search Results</h1>
                        <p>chance of Rain: <span>0%</span></p>
                        <h1 className="font-bold text-5xl mt-6 mb-4">Today's High:</h1>
                    </div>
                    <img src="fullsun.png" alt="sun" className="h-44" />
                </div>

                <TodayForcast />

                <Wind />
            </div>
            <div className="md:w-[30%] bg-[#F0F0F0]">

            </div>
        </div>
    </div>
}

export default Home 