
import { GrTechnology } from "react-icons/gr";
const Category = ({catagory}) => {
    console.log(catagory)
    const{img,category_name}=catagory
    return (
        <div className="border rounded-xl p-14 bg-indigo-100">
            <div>
                <img src={img} alt="" />
                <h3 className="font-bold text-xl flex items-center justify-center gap-1"><GrTechnology />{category_name}</h3>
                
            </div>
        </div>
    );
};

export default Category;