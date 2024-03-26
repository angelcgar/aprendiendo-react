import { useCatImage } from '../hooks/useCatImage'

export function Otros() {
    const { imageUrl } = useCatImage({ fact: 'otra vez' })
    console.log('otra vez', imageUrl);

    return (
        <>
            {imageUrl && <img src={imageUrl} alt="otra vez" />}
        </>
    )
}