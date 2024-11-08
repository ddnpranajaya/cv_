import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUser, FaMapMarkerAlt, FaMale, FaRulerVertical, FaWeight, FaHeart } from 'react-icons/fa';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Personal Info</h2>
            <div className="bg-gradient-to-r from-red-50 to-red-100 border border-gray-300 rounded-lg shadow-lg p-8 space-y-4">
                <div className="flex items-center text-lg text-gray-700">
                    <FaUser className="mr-3 text-red-600" />
                    <p><strong>Name:</strong> Deden Yudha Pranajaya</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaMapMarkerAlt className="mr-3 text-red-600" />
                    <p><strong>TTL:</strong> Sumedang, 06 September 2002</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaMale className="mr-3 text-red-600" />
                    <p><strong>Gender:</strong> Laki-laki</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaRulerVertical className="mr-3 text-red-600" />
                    <p><strong>Tinggi Badan:</strong> 169 cm</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaWeight className="mr-3 text-red-600" />
                    <p><strong>Berat Badan:</strong> 69 kg</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaHeart className="mr-3 text-red-600" />
                    <p><strong>Status Pernikahan:</strong> Lajang</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaPhoneAlt className="mr-3 text-red-600" />
                    <p><strong>Whatsapp:</strong> 0896-4123-7425</p>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <FaEnvelope className="mr-3 text-red-600" />
                    <p><strong>Email:</strong> denpranajaya69@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
