"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchQuery = () => {
    const [search, setSearch] = useState('')
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search])

    return (
        <div className="text-center">
            <input type="text" className="text-black bg-white" onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default SearchQuery;