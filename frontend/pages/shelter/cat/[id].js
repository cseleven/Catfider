import { useRouter } from "next/router";
import Image from 'next/image'
import profilePic from '../../../public/index/cat.png'
const urlpic = "https://images.unsplash.com/photo-1615789591457-74a63395c990"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CatProfile() {
  const router = useRouter();
  return (
    <div class="container h-[87vh] mx-auto">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              หน้าแรก
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">ค้นหาแมว</span>
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex h-[390px]">
        <div class="w-1/3 h-full bg-cover rounded-md" style={{"background-image": "url(https://images.unsplash.com/photo-1615789591457-74a63395c990)"}}>
        </div>
        <div class="w-2/3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.810927024412!2d100.77565737605752!3d13.729894097798276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2sKing%20Mongkut&#39;s%20Institute%20of%20Technology%20Ladkrabang!5e0!3m2!1sen!2sth!4v1671191115547!5m2!1sen!2sth" class="w-full h-3/5 px-2 pb-1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="flex pt-1 px-2 h-2/5">
            <div class="w-1/4 border-2 border-gray-300 rounded-md "></div>
            <div class="w-1/4 border-2 border-gray-300 rounded-md "></div>
            <div class="w-1/4 border-2 border-gray-300 rounded-md "></div>
            <div class="w-1/4 border-2 border-gray-300 rounded-md "></div>
          </div>
        </div>
      </div>
    </div>
  );
}