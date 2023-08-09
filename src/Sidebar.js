

import { useState } from 'react';
import items from './content.json';

import logo from './assets/icons/Logo.png';
import briefcase from "./assets/icons/briefcase.png";
import modelisation from "./assets/icons/cube-transparent.png";
import team from "./assets/icons/user-group.png";
import marketplace from "./assets/icons/globe.png";
import settings from "./assets/icons/adjustments.png";
import help from "./assets/icons/support.png";
import collapseleft from "./assets/icons/chevron-double-left.png";
import collapseright from "./assets/icons/chevron-double-right.png";
import avatar from "./assets/icons/Robert-Brown.png";

export default function Sidebar (){



    //stocker les styles dans des variables pour alléger le code

const [collapsed, setCollapsed] = useState(true);


    return(

<div class="min-h-screen bg-gray-100">
  <div class={`sidebar min-h-screen overflow-hidden border-r object-contain ${collapsed ? "w-[3.35rem] ":"w-[fit-content]" }`} >  
  <div class="flex h-screen flex-col justify-between pt-2 pb-6">

        <ul class="mt-6 space-y-2 tracking-wide">
          <li>
          <button  class="font-medium fill-current  w-full text-gray-600 ">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600">
                    <img src={logo} alt="Logo" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Sapiologie
                    </span>
                  </span>
            </button>
          </li>

          <li>
          <button class="font-medium fill-current  w-full text-gray-600 ">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                    <img src={briefcase} alt="briefcase" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Projects
                    </span>
                  </span>
            </button>
          </li>
          <li>
          <button class="font-medium fill-current  w-full text-gray-600 ">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                    <img src={modelisation} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Modelisations
                    </span>
                  </span>
            </button>
          </li>
          <li>
          <button class="font-medium fill-current  w-full text-gray-600 ">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                    <img src={team} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      My Team
                    </span>
                  </span>
            </button>
          </li>
          <li>
          <button class="font-medium fill-current  w-full text-gray-600">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                    <img src={marketplace} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Marketplace
                    </span>
                  </span>
            </button>
          </li>
          <hr className="border-slate-300 my-2" />
          <li>
          <button class="font-medium fill-current  w-full text-gray-600">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                    <img src={settings} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Settings
                    </span>
                  </span>
            </button>
          </li>
          <li>
          <button class="font-medium fill-current  w-full text-gray-600">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                    <img src={help} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Help
                    </span>
                  </span>
            </button>
          </li>
          </ul>
          <div class="mt-auto">
            <ul> 
          <li >
          <button onClick={()=> setCollapsed(!collapsed)} class="font-medium fill-current  w-full text-gray-600 ">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 ">
                    <img src={` ${
                        collapsed ? collapseright : collapseleft
                    }`} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Collapse
                    </span>
                  </span>
            </button>
          </li>
          <li class="items-center">
          <p class="font-medium fill-current  w-full text-gray-600 ">
          <span className=" flex items-center space-x-4 px-4 py-3 text-gray-600 ">
                    <img src={avatar} alt="modelisation" />

                    <span
                      className={` ${
                        collapsed ? 'hidden' : ''
                      }`}
                    >
                      Robert Brown
                    </span>
                  </span>
            </p>
          </li>
          </ul>
          </div>
   
       

          </div>
        </div>
      </div>

  );
};