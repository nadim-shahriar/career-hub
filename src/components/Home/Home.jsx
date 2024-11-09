import Banner from "../Banner/Banner";
import CategoryList from "../CatogoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        
        </div>
    );
};

export default Home;