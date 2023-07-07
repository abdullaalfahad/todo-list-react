import React from 'react'
import { useState } from 'react';

function TodoForm({ setItems }) {
    const [inputText, setInputText] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        setItems((prev) => {
            return [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    title: inputText,
                    complete: false
                }
            ]
        });

        setInputText("");
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "10px" }}>New Item</h2>

            <form onSubmit={handleFormSubmit}>
                <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ background: "black", color: "white", boxShadow: "0px 0px 30px blue", borderRadius: "5px", padding: "5px 10px" }} />
                <button style={{ cursor: "pointer", background: "black", color: "white", boxShadow: "0px 0px 30px blue", padding: "5px 10px", borderRadius: "5px", marginLeft: "3px" }}>Add Item</button>
            </form>
        </div>
    )
}

export default TodoForm