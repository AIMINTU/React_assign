import { useEffect, useState } from "react";
import Category from "./Category";


const Catagories = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/category')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto mt-14">
            <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow text-blue-400 py-3 rounded-xl">Catagory</h2>
            <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias quam quibusdam recusandae,
                nesciunt ab debitis. Fugiat enim impedit <br />eos nobis incidunt eligendi hic cupiditate deserunt
                repudiandae reprehenderit? Doloremque, minima.</p>
            <div className="mt-10 grid grid-cols-3 gap-20">
                {
                    // catagories.map(catagory1=><Category key={catagory1.id} catagory={catagory1}></Category>)
                    catagories.length ? catagories.map(catagory1 => <Category key={catagory1.id} catagory={catagory1}></Category>) : <div className="grid grid-cols-3 gap-96">
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Catagories;