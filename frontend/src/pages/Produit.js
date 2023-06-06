import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Produit() {
    const [data, setData] = useState({
        nom: '',
        slug: '',
        stock: '',
        categorie: '',
    });

    const [categories, setCategories] = useState([]);
    const [produits, setProduits] = useState([]);
    const [currentId, setCurrentId] = useState(null);

    const getCategories = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/categorie/getCategories');
            setCategories(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createProduit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/produit/createProduit', data);
            toast.success('Produit created');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const getProduits = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/produit/getProduits');
            setProduits(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduit = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/produit/deleteProduit/${id}`);
            toast.success('Produit deleted');
            getProduits();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const updateProduit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/api/produit/updateProduit/${currentId}`, data);
            toast.success('Produit updated');
            getProduits();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        getProduits();
        getCategories();
    }, []);

    return (
        <div>
            {/* Afficher produit */}
            <div>
                <h1>Affichage produit</h1>
                <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
                    <div className="flex flex-col justify-center h-full">
                        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <header className="px-5 py-4 border-b border-gray-100">
                                <div className="font-semibold text-gray-800">Products</div>
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
                                                <div className="font-semibold text-left">Slug</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Stock</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Actions</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {produits.map((item) => (
                                            <tr key={item._id}>
                                                <td className="p-2">
                                                    <div className="font-medium divide-gray-100">{item._id}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="font-medium text-gray-800">{item.nom}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-left">{item.slug}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-left font-medium text-blue-800">{item.stock}</div>
                                                </td>

                                                <td className="p-2">
                                                    <div className="text-left font-medium text-blue-800">{item.categorie}</div>
                                                </td>

                                                <td className="p-2">
                                                    <div className="text-left font-medium text-blue-800">
                                                        <button onClick={() => deleteProduit(item._id)}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-5 w-5 text-red-500"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M15.293 4.293a1 1 0 010 1.414L6.414 15.293a1 1 0
                                        01-1.414-1.414L13.586 4.293a1 1 0 011.414
                                        0z"
                                                                    clipRule="evenodd"
                                                                />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M4.293 4.293a1 1 0 000 1.414L15.293
                                        15.293a1 1 0 001.414-1.414L5.707 4.293a1
                                        1 0 00-1.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>
                                                        {/* updat */}
                                                        <button onClick={() => setCurrentId(item._id)}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-5 w-5 text-green-500"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M2 5a1 1 0 011-1h14a1 1 0
                                        110 2H3a1 1 0 01-1-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                                <path

                                                                    fillRule="evenodd"
                                                                    d="M2 9a1 1 0 011-1h14a1 1 0
                                        110 2H3a1 1 0 01-1-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M6 13a1 1 0 011-1h8a1 1 0
                                        110 2H7a1 1 0 01-1-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>

                                                        
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-auto w-full max-w-[550px] pt-32">
                                <form onSubmit={createProduit}>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={data.nom}
                                            onChange={(e) => setData({ ...data, nom: e.target.value })}
                                            placeholder="Nom"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="slug"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Slug
                                        </label>
                                        <input
                                            type="text"
                                            name="slug"
                                            id="slug"
                                            value={data.slug}
                                            onChange={(e) => setData({ ...data, slug: e.target.value })}
                                            placeholder="Slug"
                                            className="w-full rounded-md border border-[# e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="stock"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Stock
                                        </label>
                                        <input
                                            type="text"
                                            name="stock"
                                            id="stock"
                                            value={data.stock}
                                            onChange={(e) => setData({ ...data, stock: e.target.value })}
                                            placeholder="Stock"
                                            className="w-full rounded-md border border-[# e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="category"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Catégorie
                                        </label>
                                        <input
                                            type="text"

                                            name="category"
                                            id="category"
                                            value={data.category}
                                            onChange={(e) => setData({ ...data, category: e.target.value })}
                                            placeholder="Catégorie"

                                            className="w-full rounded-md border border-[# e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />

                                    </ div>
                                </form>

                                <button
                                    type="submit"
                                    className="w-full py-3 mt-10 bg-[#6A64F1] rounded-md text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#6A64F1] focus:ring-opacity-50"
                                    onClick={createProduit}
                                >
                                    Ajouter
                                </button>

                            </div>



                        </div>
                    </div>
                    /</section>
            </div>
        </div>



)
}

export default Produit