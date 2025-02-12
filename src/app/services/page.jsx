import Link from 'next/link';
import React from 'react';

const Services = () => {
    const services = [
        {
            "_id": "65c6a7f8d5b3f1a9e8a3b123",
            "name": "Web Development",
            "description": "Modern and responsive web development services using the latest technologies.",
            "img": "https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg"
        },
        {
            "_id": "65c6a7f8d5b3f1a9e8a3b124",
            "name": "Mobile App Development",
            "description": "High-performance mobile applications for Android and iOS platforms.",
            "img": "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
        },
        {
            "_id": "65c6a7f8d5b3f1a9e8a3b125",
            "name": "UI/UX Design",
            "description": "Creative and user-friendly UI/UX designs to enhance user experience.",
            "img": "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
        },
        {
            "_id": "65c6a7f8d5b3f1a9e8a3b126",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing strategies to grow your business online.",
            "img": "https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg"
        }
    ];

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                services.map(service => (
                    <Link key={service._id} href={`/services/${service._id}`}>
                        <div className="border rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <img src={service.img} alt={service.name} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{service.name}</h2>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Services;