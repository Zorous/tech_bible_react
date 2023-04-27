
import React, { useState } from 'react';
import "../assets/styles/community/community.css";
import "../assets/styles/home/global.css";
import NewsHomePage from "../components/News Scraper/NewsHomePage";
import Comment from '../components/Community/Comment';
import Toolitem from "../components/Tools/Toolitem";

import YouMustLikeApp from "../components/Filtering-container/YouMightLikeApp";
import YouMightLikeApp from "../components/Filtering-container/YouMightLikeApp";
import AppOfTheDay from "../components/Filtering-container/AppOfTheDay";
import { FilteringContext } from "../context/FilteringContext";
import Topic from '../components/Community/Topic';
import Discussion from '../components/Community/Discussion';



function Community() {
    
  
    return (
        <div className="mt-desktop-20 mt-mobile-8 mt-tablet-8 mt-widescreen-10 layoutContainer ">
       
        <main className="layoutMain">
        <div class="flex flex-col mb-12 p-5 text-white">
  <p class="text-lg font-bold mb-2">Discussions</p>
  <p class="text-base">Ask questions, find support, and connect with the community</p> 
  <button class="bg-white text-black py-2  rounded w-25 mt-2 transition delay-150 hover:font-bold hover:delay-200">New Discussion</button>

</div>
          <div className="flex direction-column">
            

            <div className="flex direction-row">
                 <p className='mr-3 hover:cursor-pointer'>New </p>
                 <p className='mr-3 hover:cursor-pointer'>Popular </p>


                 <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Filter Date<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                         <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                              <li>
                             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                             </li>
                             <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                           <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                           </li>
                           <li>
                           <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                           </li>
                        </ul>
                      </div>

                
                 <form className='ml-20'>   
                      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                     <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                       </div>
                       <input type="search" id="default-search" class="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search discussions" required/>
                        
                       
                     </div>
                </form>

                
                    

                
                 


            </div>
              
              <div data-test="homepage-section-0">
                
                  <div>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    
                  </div>
                
              </div>
            
          </div>
        </main>
        <aside className="sidebarWithSeparator right">
                <p>TOPICS </p>
                <Topic/>
                <Topic/>
                <Topic/>
                
                <aside className="sidebarWithSeparator bottom">
                <p>NEW DISCUSSIONS</p>
                <Discussion/>
                <Discussion/>
                <Discussion/>

                
               
        </aside>
        </aside>
        
      </div>

    );
}

export default Community