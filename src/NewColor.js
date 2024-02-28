import React, { useState } from "react";
import "./Colors.css"

function NewColor({ addColor }) {
    const INITIAL_STATE = {
        name: '',
        val: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="grad1">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color name: </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="val">Color value: </label>
                <input
                    id="val"
                    type="color"
                    name="val"
                    value={formData.val}
                    onChange={handleChange}
                />
                <button>Add this color</button>
            </form>
        </div>
    )
}

export default NewColor