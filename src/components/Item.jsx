import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function Item({ id, title, completed, toggleCompleted, deleteItems }) {

    return (
        <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <label>
                <input type='checkbox' value={completed} onChange={(e) => toggleCompleted(id, e.target.checked)} />
                {title}
            </label>

            <AiOutlineDelete onClick={() => deleteItems(id)} size={18} style={{ cursor: "pointer", marginLeft: "10px", color: "red", backgroundColor: "transparent", borderColor: "red" }} />
        </li>
    )
}

export default Item