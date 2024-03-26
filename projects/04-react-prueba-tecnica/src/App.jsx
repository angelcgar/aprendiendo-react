import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => refreshFact()

    return (
        <main>
            <h1>App de Gatos</h1>

            <button onClick={handleClick}>Recargar</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Una imagen de un gato que dice ${fact}`} />}
        </main>
    )
}