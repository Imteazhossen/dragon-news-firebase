import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [category,setCategory] = useState([]);
    // console.log(data);
    useEffect(()=>{
       
        if (id  == '0'){
            setCategory(data);
            return;
        }
        else if ( id == '1'){
            const filteredNews = data.filter(
                (news) => news.others.is_today_pick == true
            );
            setCategory(filteredNews);
        }
        else {
            const filteredNews = data.filter((news)=> news.category_id == id);
            setCategory(filteredNews);
        }

        
      
    },[id,data])
    return (
        <div>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary"> {category.length} </span> news found 
            </h2>
            <div className="grid grid-cols-1 gap-5">
                {
                    category.map((news)=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;