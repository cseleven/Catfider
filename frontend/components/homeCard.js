import Image from 'next/image'

export default function Homecard({img,topic,detail}) {
    return (
        <div class="rounded-lg border-2 box-border border-white-salmon shadow-md shadow-gray-300 w-[237px] h-[330px] bg-white px-12">
            <Image class="mx-auto mt-10 " src={img} placeholder="blur" />
            <p class="text-center text-[30px] text-gray-600 pt-auto">{topic}</p>
            <p class="text-center text-[16px] text-gray-500 pt-auto">{detail}</p>
        </div>

    
    );
}