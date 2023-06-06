import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'




function Categories() {
    const [category, setCategory] = useState([])
    const [nom, setNom] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')




    const fetchCategory = async () => {
        const res = await fetch('http://localhost:5000/api/categorie/getCategories')
        const data = await res.json()
        setCategory(data)
    }

    const handleInputChange = (event) => {
        const { nom, value } = event.target;
        if (nom === 'nom') {
            setNom(value)
        }


    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/categorie/createcategorie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                } else {
                    setNom('')
                    setError('')
                    setSuccess(data.message)
                    fetchCategory()
                    if (data) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Ajouter avec succès',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // vider les champ
                        const form = document.querySelector('form'); // ou utiliser votre propre sélecteur pour obtenir l'élément de formulaire
                        form.reset();
                    }

                }
            })
    }


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/categorie/deletecategorie/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                } else {
                    setError('')
                    setSuccess(data.message)
                    fetchCategory()
                    if (data) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Supprimer avec succès',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
            })
    }

    useEffect(() => {
        fetchCategory()
    }, [])


    return (
        <div>
            <div className=" mt-20 ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <section class="bg-white p-20 lg:py-[120px] overflow-hidden relative z-10">
                    <div class="container">
                        <div class="flex flex-wrap lg:justify-between -mx-4">
                            <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                                <div class="max-w-[570px] mb-12 lg:mb-0">
                                    <span class="block mb-4 text-base text-primary font-semibold">
                                        Catégorie
                                    </span>
                                    <h2
                                        class=" text-dark mb-6 uppercase font-bold  text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px] ">
                                        ENTRER EN CATÉGORIE
                                    </h2>
                                    {/* list Category */}
                                    {
                                        category.map((cat) => (
                                            <div>
                                                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                                                    <div class="inline-flex items-center space-x-2">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div>{
                                                            cat.nom
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




    )
}

export default Categories