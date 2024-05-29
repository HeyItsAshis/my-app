// import { useRef, useState, useEffect } from "react";
import About from "./About";
import Blogs from "./Blogs";
import Services from "./Services";

const Home = () => {
    // const counterVal = useRef(0);
    // const [stateVal, setStateVal] = useState(0);

    // useEffect(() => {
    //     console.log("State Value is set to: ", stateVal);
    // }, [stateVal]);

    return (
        <>
        <About/>
        <Blogs/>
        <Services/>
        {/* <h1 className="text-center">{stateVal}</h1>
        <button onClick={()=>{
            counterVal.current++;
            setStateVal(stateVal+1);
            console.log("Counter is set to: ", counterVal.current);
        }}>Increase Value</button> */}
        </>
    )
}

export default Home;