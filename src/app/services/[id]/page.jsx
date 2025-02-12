import Link from "next/link";

const ServiceDetails = ({ params }) => {
    const { id } = params;

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

    const singleData = services.find(service => service._id === id);

    if (!singleData) {
        return (
            <div className='text-center mt-10'>
                <h2 className="text-red-500 text-2xl font-bold">Not Found</h2>
                <p className="text-gray-600">The service you are looking for does not exist.</p>
                <Link className="underline" href='/services'>Services</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <img src={singleData.img} alt={singleData.name} className="w-1/2 rounded-lg shadow-md" />
            <h2 className="text-xl font-bold mt-4">{singleData.name}</h2>
            <p className="text-gray-600">{singleData.description}</p>
            <p className="text-gray-500">ID: {id}</p>
        </div>
    );
};

export default ServiceDetails;
