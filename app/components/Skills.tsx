import React from 'react';
import { FaCode, FaCamera, FaPen, FaPalette, FaComments } from 'react-icons/fa';

const skillsData = [
    { name: 'Communication', percentage: 90, icon: <FaComments /> },
    { name: 'Web Development', percentage: 70, icon: <FaCode /> },
    { name: 'Photography', percentage: 75, icon: <FaCamera /> },
    { name: 'Writing', percentage: 85, icon: <FaPen /> },
    { name: 'Design', percentage: 80, icon: <FaPalette /> },
];

const Skills = () => {
    return (
        <div className="container mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-700">Skills</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                {skillsData.map((skill, index) => (
                    <div key={index} className="mb-6">
                        <div className="flex items-center mb-1 text-gray-700 text-lg font-semibold">
                            {skill.icon}
                            <span className="ml-3">{skill.name}</span>
                        </div>
                        <div className="relative pt-1">
                            <div className="flex items-center justify-between">
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                                <span className="ml-3 text-gray-700 font-medium">{skill.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
