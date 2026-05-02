function HobbyCard({name, infor, word }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px', 
            padding: '20px',
            margin: '10px',
            width: '250px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
           
            <h2>{name}</h2>
            <h4 style={{color: '#555', margin: '5px 0' }}>정보- {infor}</h4>
            <h3 style={{color: '#000000', margin: '5px 0' }}>{word}</h3>

        </div>
    );
}

export default HobbyCard;