import { FaBuilding, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

export default function RowRiwayatPekerjaan(props: any) {
    return (
        <div className="border-2 border-red-500/75 rounded-lg p-4 my-5 bg-gradient-to-r from-red-100 to-red-50 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 items-center text-gray-800">
                    <div className="col-span-12 md:col-span-3 flex items-center">
                        <FaCalendarAlt className="mr-2 text-red-600" />
                        <span className="font-semibold">{props.tahun}</span>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex items-center">
                        <FaBuilding className="mr-2 text-red-600" />
                        <span className="font-semibold">{props.instansi}</span>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex items-center">
                        <FaUserTie className="mr-2 text-red-600" />
                        <span className="font-semibold">{props.sebagai}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
