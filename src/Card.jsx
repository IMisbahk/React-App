function Card(){
    const card = {
        border: "1px solid grey",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px hsla(0, 0%, 0%, .1)",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        maxWidth: "250px",
        display: "inline-block",
    }
    return( 
        <div style={card}>
            <img src="https://via.placeholder.com/150"></img>
            <h2>Misbah Khursheed</h2>
            <p>Im misbah khursheed and i am a cse student hopefully at Stanford in 2026 fall</p>
        </div>
    );
}

export default Card
