import React from 'react';
import { useState, useEffect } from 'react';
function Client() {
  // get client
  const [client, setClient] = useState([]);
  const fetchClient = async () => {
    const res = await fetch('http://localhost:5000/api/client/getClients');
    const data = await res.json();
    setClient(data);
    console.log(data);
  };
  useEffect(() => {
    fetchClient();
  }, []);


  return (
    <div>
      <h1>Clients</h1>
     
      <div>
        <div className=" mt-20 ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

          <section class="bg-white p-20 lg:py-[120px] overflow-hidden relative z-10">
            <div class="container">
              <div class="flex flex-wrap lg:justify-between -mx-4">
                <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                  <div class="max-w-[570px] mb-12 lg:mb-0">
                    <span class="block mb-4 text-base text-primary font-semibold">
                      Client
                    </span>


                    {

                      client.map((cli) => (
                        <div>
                          <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                            <div class="inline-flex items-center space-x-2">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className='ml-3'>{
                                cli.nom
                              }</div>
                              <div>{
                                cli.telephone
                              }</div>
                              <div>{
                                cli.sousDomaine
                              }</div>
                              <div>{
                                cli.adresse

                              }</div>


                            </div>
                            <div>

                            </div>
                          </div>
                        </div>
                      ))
                    }



                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>




      </div>

      <p>This is the Clients page.</p>
    </div>
  );
}

export default Client;
