import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Produit() {
    const [data, setData] = useState({
        nom: "",
        slug: "",
        stock: "",
        categorie: "",
    });
    // get categorie
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/categorie/getCategories");
            setCategories(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // creat produit 
    const createProduit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/produit/createProduit", data);
            toast.success("produit created");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    // get all produits
    const [produits, setProduits] = useState([]);
    const getProduits = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/produit/getProduits");
            setProduits(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    // delete produit
    const deleteProduit = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/produit/${id}`);
            toast.success("produit deleted");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    // update produit
    const [currentId, setCurrentId] = useState(null);
    const updateProduit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/produit/${currentId}`, data);
            toast.success("produit updated");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        getProduits();
        getCategories();
    }, []);


    return (<div>

{/* Aficher produit  */}
<div>
      <h1>affichage produit </h1>
      <section className="antialiased  bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
    <div className="flex flex-col justify-center h-full">
    
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-gray-800">Prodects</div>
            </header>

            <div className="overflow-x-auto p-3">
                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                        <th className="p-2">
                                <div className="font-semibold text-left">Id</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Nom</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">slug</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">stock</div>
                          </th>
                          <th className="p-2">
                                <div className="font-semibold text-left">Supprimer</div>
                          </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                    {produits.map((item) => (

                        <tr>
                             <td className="p-2">
                                <div className="font-medium divide-gray-100">
                                  {item._id}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="font-medium text-gray-800">
                                   {item.nom}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left">
                                  {item.slug}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-blue-800">
                                {item.stock}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-blue-800">
                                <button onClick={() => deleteProduit(item._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M15.293 4.293a1 1 0 010 1.414L6.414 15.293a1 1 0
                                            01-1.414-1.414L13.586 4.293a1 1 0 011.414
                                            0z"
                                            clip-rule="evenodd" />
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 000 1.414L15.293
                                            15.293a1 1 0 001.414-1.414L5.707 4.293a1
                                            1 0 00-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                </div>
                            </td>

                        
                          
                        </tr>
))}
                       
                    </tbody>
                </table>
            </div>

           

            <div className="flex justify-end">
                <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
            </div>
        </div>
    </div>
</section>
    </div>
        <div className="mx-auto w-full max-w-[550px] pt-32">
            <form
            >
                <div className="mb-5">
                    <label
                        for="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >

                        Nom
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // onChange={(e)=>hendleChange(e)}
                        value={data.name}
                        placeholder="  Nom"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"


                    />
                </div>
                <div className="mb-5">
                    <label
                        for="slug"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        slug

                    </label>
                    <input
                        type="numbre"
                        name="slug"
                        id="slug"
                        //   onChange={hendleChange((e) => setData({ ...data, [e.target.name]: e.target.value }))}
                        // onChange={(e)=>hendleChange(e)}
                        value={data.price}
                        placeholder="Enter your slug"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        for="stock"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        stock
                    </label>
                    <input
                        type="text"
                        name="stock"
                        id="stock"
                        //   onChange={(e)=>hendleChange(e)}
                        value={data.description}
                        placeholder="Enter your  stock"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div>
                    <label
                        for="categorie"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        categorie
                    </label>
                    <input
                        type="text"
                        name="categorie"
                        id="categorie"

                        placeholder="Enter your categorie"

                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />


                    <button
                        className=" mt-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    </div>
    )
}

export default Produit