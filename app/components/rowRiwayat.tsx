import { FaSchool, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

export default function RowRiwayat(props: any) {
    return (
        <div className="border-2 border-red-500/75 rounded-lg p-4 my-5 bg-gradient-to-r from-red-100 to-red-50 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-12 md:col-span-3 flex items-center text-gray-700">
                        <FaGraduationCap className="mr-2 text-red-600" />
                        <span className="font-semibold">{props.jenjang}</span>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex items-center text-gray-700">
                        <FaSchool className="mr-2 text-red-600" />
                        <span className="font-semibold">{props.sekolah}</span>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex items-center text-gray-700">
                        <FaCalendarAlt className="mr-2 text-red-600" />
                        <span className="font-semibold">{props.tahun}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
