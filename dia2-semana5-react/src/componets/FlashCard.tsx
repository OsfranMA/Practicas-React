interface FlashCardProp {
    palabra: string;
    onAprender: () => void; 
}

function FlashCard({palabra, onAprender}: FlashCardProp) {
    return (
        <>
        <div style={{backgroundColor: '#dbe9196b', padding: '1rem', margin: '1rem', borderRadius: '1rem'}}>
            <h1 style={{textAlign: 'center'}}>Ejemplo</h1>
                <h2>{palabra}</h2>
                <button onClick={onAprender}>
                    Ya me la aprendi!!
                </button>
        </div>
        </>
    )
}

export default FlashCard