import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import featuredImg from '../../../assets/home/featured.jpg'
import  './Featured.css'

const Featured = () => {
    return (
        <div className="featered-item  bg-fixed">
            <SectionTittle subHeading="check it out" heaDing="Featured Item"></SectionTittle>
            <div className="md:flex justify-center items-center pb-20 pt-10 px-36 bg-slate-500 bg-opacity-50">
                <div className="md:mr-40">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-5 text-white">
                    <p>Aug 20, 2029</p>
                    <p>Where  can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nesciunt doloribus similique corrupti beatae illum voluptatem possimus aut eligendi inventore.

                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Click Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;