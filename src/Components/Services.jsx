import { useContext } from "react";
import { SettingsContext } from '../App';


const Services = () => {
    const SettingCtx = useContext(SettingsContext);
    return (
        <div className="text-center">
            <h1>Services</h1>
            <p>These are our premium services from {SettingCtx.name} </p>
        </div>
    );
}
export default Services;