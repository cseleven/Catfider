import Image from 'next/image';
import Vaccine from "/public/cat/vaccine.png";
import Scissors from "/public/cat/scissors.png";
import Loading from './loading';

export default function Catprofile({pic, map, vaccine, sterile, bank}) {
    return (   
        <div class="flex justify-start min-h-min my-10 md:space-x-4 lg:space-x-9 flex-col md:flex-row">
            <div class="md:basis-1/3 w-48 h-48 md:h-[390px] md:w-full bg-cover rounded-full m-auto md:m-0 md:rounded-lg" style={{"background-image": "url("+pic+")"}}/>
            <div class="md:basis-2/3 max-w-md flex flex-col w-full md:max-w-[635px]  min-h-[390px] h-full mt-10 m-auto md:m-0 space-y-4">
                {!map? (
                    <Loading/>
                ):(
                    <iframe src={map} class="basis-2/3 flex-1 min-h-[260px] border-0 rounded-lg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                )
                }
                <div class="basis-1/3 flex-1 flex space-x-2 justify-between text-gray-600">
                    <div class="basis-1/4 grid place-content-center border-2 border-gray-200 rounded-md ">
                        <Image class="w-4 m-auto pb-3" src={Vaccine}/>
                        <h6>{vaccine ? "ฉีดวัคซีนแล้ว":"ยังไม่ฉีดวัคซีน"}</h6>
                    </div>
                    <div class="basis-1/4 grid place-content-center border-2 border-gray-200 rounded-md ">
                        <Image class="w-4 m-auto pb-3" src={Scissors}/>
                        <h6>{sterile ? "ทำหมันแล้ว":"ยังไม่ทำหมัน"}</h6>
                    </div>
                    <div class="basis-2/4 grid place-content-center lg:place-content-start lg:min-w-[341px] border-2 border-gray-200 rounded-md ">
                        <h5 class="mx-auto lg:mx-10 lg:mt-6">ช่องทางบริจาคแก่มูลนิธิ</h5>
                        {bank.map((item)=>(
                            <h6 class="mx-auto">{item}</h6>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}