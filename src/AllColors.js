import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Colors.css"
import NewColor from "./NewColor";

function AllColors({ colorList, setColorList }) {
    const [showAddForm, setShowAddForm] = useState(false);
    const addColor = (newColor) => {
        setColorList(colorList => [{ ...newColor }, ...colorList])
        setShowAddForm(false)

    }
    const showForm = () => {
        setShowAddForm(true)
    }
    return (
        <div>
            {(showAddForm ? <NewColor addColor={addColor} />
                :
                <div>
                    <div className="topDiv">
                        <h1>Welcome to our Color Factory!</h1>
                        <button onClick={showForm}><h2 >Add a color</h2></button>
                    </div>
                    <h5>Please select a color</h5>
                    <ul>
                        {colorList.map(color => (
                            <li key={color.val}>
                                <Link to={`/colors/${color.name}`}>{color.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AllColors