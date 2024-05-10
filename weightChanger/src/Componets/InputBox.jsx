import React,{useId} from "react";

function InputBox({
    label,
    onPlanetChange,
    planetOptions = [Mercury,Venus,Earth,Mars,Jupiter,Saturn,Neptune,Uranus],
    selectPlanet = "Earth",
    planetDisable = false,
    className = "",

}){
    const planetInputId = useId()

    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={planetInputId}  className="text-black/40 mb-2 inline-block">
                {label}
            </label>
            
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectPlanet}
                onChange={(e) => onPlanetChange && onPlanetchange(e.target.value)}
                disabled={planetDisable}
            >
                
                    {planetOptions.map((planet) => (
                        <option key={planet} value={planet}>
                        {planet}
                        </option>
                    ))}
            
            </select>
        </div>
    </div>
    )

}
export default InputBox;