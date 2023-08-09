import logo from './assets/icons/Logo.png'
import { useState } from 'react';
import items from './content.json';
export default function Test (){

    // faire un map pour remplir la item list
    //stocker les styles dans des variables pour alléger le code

const [collapsed, setCollapsed] = useState(true);


    return(

<div class="min-h-screen bg-gray-100">
  {/*<div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white"> */}

  <div class={`sidebar min-h-screen overflow-hidden border-r object-contain ${collapsed ? "w-[3.35rem] ":"w-[fit-content]" }`} >  
  <div class="flex h-screen flex-col justify-between pt-2 pb-6">
      <div>
        <ul class="mt-6 space-y-2 tracking-wide">
          <li>
          <button  onClick={()=> setCollapsed(!collapsed)} class="font-medium fill-current  w-full text-gray-600 hover:bg-slate-200">
          <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
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


          {items.slice(1).map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="font-medium fill-current w-full text-gray-600 hover:bg-slate-200"
                  >
                    <span className="relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-slate-200 hover:border-s-4 border-slate-600">
                      <img src={item.icon} alt={item.name} />

                      <span
                        className={` ${
                          collapsed ? "hidden" : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};