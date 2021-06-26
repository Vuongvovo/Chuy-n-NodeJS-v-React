import React from 'react'
import renderHtml from "react-render-html"
export default function CV({ data }) {
    return (
        <div className='container' style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            {data ? renderHtml(data.content) : ""}
        </div>
    )
}
