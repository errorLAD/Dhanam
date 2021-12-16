import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Data from './data.json'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");

  return (
<>
   {/*<input type="text" placeholder="serch" onChange={(event) => {
    setSearchTerm(event.target.value)}}/>
   
    {Data.filter((val) => {
      if(searchTerm == ""){
        return val
      }else if(val.date.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((val,key) => {
      return (
*/}'

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="min-h-full">
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-40 w-50" src="https://imgur.com/BuDnbHJ.png" alt="Workflow"/>
            <span></span>
          </div>
   
        </div>
               <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4  justify-center">

              <a href="#" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Date</a>

              <a href="#" class="text-gray-800 font-serif  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Title</a>

              <a href="#" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">NOtes</a>

              <a href="#" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Care</a>

        
            </div>
          </div>



        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
                    <button type="button" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                   
            </button>           
      <dd class="text-indigo-600 flex items-center">
       <button type="button" class="p-1 rounded-full text-gray-900 hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex">
        <svg width="20" height="20" fill="none" aria-hidden="true" class="mr-1">
       
        </svg>
        <span class="font-serif "> Login</span>
   
        </button>
      </dd>

            <div class="ml-3 relative">
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                         <img class="h-8 w-8 rounded-full" src="https://imgur.com/UpmXiBh.png" alt=""></img>
                </button>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>


    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
     <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboabbbbbbrd</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>

    </div>
  </nav>
</div>
<section>
  <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
    <div class="flex items-center justify-between">
      <h2 class="font-semibold text-gray-900">Projects</h2>
      <a href="/new" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
        <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New
      </a>
    </div>
    <form class="group relative">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
    
  <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..." type="text" placeholder="Search Date.." onChange={(event) => {
    setSearchTerm(event.target.value)}}/>
   </form>
  </header>
  
</section>
    {Data.filter((val) => {
      if(searchTerm == ""){
        return val
      }else if(val.date.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((val,key) => {
      return (
        <div>
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
      
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://imgur.com/H4p9Vi3.png" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                        {val.date}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{val.title}</div>
               
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {val.notes}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {val.bunting}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
 );
})}



</div>





</>
  );
}

export default App;
