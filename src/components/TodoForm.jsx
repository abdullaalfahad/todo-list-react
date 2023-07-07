import React from 'react'
import { useState } from 'react';

function TodoForm({ setItems }) {
    const [inputText, setInputText] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    function handleFormSubmit(e) {
        e.preventDefault();

        if (inputText === "") {
            setErrorMessage("Please add someting")
        } else {
            setItems((prev) => {
                return [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        title: inputText,
                        completed: false
                    }
                ]
            });

            setInputText("");
        }


    }

    return (
        <>
            <h2 style={{ marginBottom: "10px" }}>New Item</h2>

            <form onSubmit={handleFormSubmit}>
                <input type='text' value={inputText} onChange={(e) => {
                    setInputText(e.target.value);
                    setErrorMessage("");
                }} style={{ background: "black", color: "white", boxShadow: "0px 0px 30px blue", borderRadius: "5px", padding: "5px 10px" }} />
                <button style={{ cursor: "pointer", background: "black", color: "white", boxShadow: "0px 0px 30px blue", padding: "5px 10px", borderRadius: "5px", marginLeft: "3px" }}>Add Item</button>
                <p style={{ color: "red" }}>{errorMessage ? errorMessage : ""}</p>
            </form>
        </>
    )
}

export default TodoForm