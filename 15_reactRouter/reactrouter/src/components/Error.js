import React from 'react'

function ErrorPage() {
  return (
    <div>
        <h1>ERROR 404 NOT FOUND</h1>
        <button style={{backgroundColor: "steelblue", padding: 10, border: "none", borderRadius: 5}}>
            <a href='/' style={{color: "white", textDecoration: "none"}}>RETURN TO HOME</a>
        </button>
    </div>
  )
}

export default ErrorPage