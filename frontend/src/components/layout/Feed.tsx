import Imagem from "./Imagem"

function Feed() {

    const images = [
        './src/assets/images/tatuagem1.jpg',
        './src/assets/images/tatuagem2.jpg',
        './src/assets/images/tatuagem3.jpg',        
        './src/assets/images/tatuagem4.jpg',
        './src/assets/images/tatuagem5.jpg',
        './src/assets/images/tatuagem6.jpg',
        './src/assets/images/tatuagem7.jpg',
        './src/assets/images/tatuagem8.jpg',
        './src/assets/images/tatuagem9.jpg',
        './src/assets/images/tatuagem10.jpg',
    ]

    const listImages = images.map(images => <Imagem urlImagem={images}></Imagem>)

    return (
        <>
            <div className="w-fit gap-6 columns-5 space-y-4 h-[100%]">
                {listImages}
            </div>
        </>
    )
}

export default Feed