interface imagemProps{
    urlImagem: string
}

function Imagem(props: imagemProps){
    return(
        <>
            <div className="flex flex-col items-end break-inside-avoid">
                <img className="w-full object-cover rounded-2xl cursor-pointer" src={props.urlImagem} alt="" />

                <button className="font-medium text-xl px-2">...</button>
            </div>
        </>
    )
}

export default Imagem