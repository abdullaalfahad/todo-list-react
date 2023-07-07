import React from 'react'
import Item from './Item'

function TodoLists({ items, setItems }) {

    function toggleCompleted(id, completed) {
        setItems(prev => {
            return prev?.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed
                    }
                }

                return item;
            })
        })
    }

    function deleteItems(id) {
        setItems(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    return (
        <>
            <h1 style={{ marginTop: "40px" }}>Todo Lists</h1>

            {items?.length ? <ul> {
                items?.map(item => {
                    return <Item {...item} key={item.id} toggleCompleted={toggleCompleted} deleteItems={deleteItems} />
                })
            } </ul> : "No Items."}
        </>
    )
}

export default TodoLists