import Image from "next/image";
import SearchQuery from "./components/searchQuery";
import style from './meals.module.css';
const MealsPage = async ({ searchParams }) => {
    const query = await searchParams;
    const getMeals = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
        const data = await res.json()
        return data.meals;
    };

    const meals = await getMeals();
    return (
        <div>
            <div>
                <SearchQuery></SearchQuery>
                <div className="grid grid-cols-4 gap-5 m-5">
                    {
                        meals?.map(meal => <div key={meal.idMeal}>
                            <Image src={meal?.strMealThumb} width={421} height={421} alt={meal?.strMeal} />
                            <h2 className={`text-xl font-bold ${style['meals-title']}`}>{meal?.strMeal}</h2>
                            <p>{meal?.strInstructions}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MealsPage;