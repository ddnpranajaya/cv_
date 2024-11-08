"use client";

import { useState } from "react";

export default function FavColor(){

    const[warna, setWarna] = useState("Hitam");

    return(
        <div className="container mx-auto p-4 text-center">
            <h1>Warna Favorit saya adalah {warna}</h1>
            <hr className="m-10"/>
            <p>Ubah state warna ke warna</p>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Merah")} 
            >
                Merah
            </button>
            <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Abu")} 
            >
                Abu
            </button>
            <button
            className="bg-blue-500 hover:bg-blue700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Biru")} 
            >
                Biru
            </button>
            <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Ungu")} 
            >
                Ungu
            </button>
            <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Hijau")} 
            >
                Hijau
            </button>
        </div>
    );
}