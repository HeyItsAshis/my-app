import { useContext } from "react";
import { WebContext, SettingsContext } from "../App";
const Services = () => {
    const WebCtx = useContext(WebContext);
    const SettingsCtx = useContext(SettingsContext);
    return (
        <div className="text-center">
            <h1>Services</h1>
            <p>These are our premium services from {WebCtx} using font {SettingsCtx.font}</p>
        </div>
    );
}
export default Services;