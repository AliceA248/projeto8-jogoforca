import forca0 from "../assets/forca0.png"


export default function Forca() {
    return (
        <div className="Jogo">
             <div className="ImagemForca">
            <img src={forca0}/>
                  <button className="btn">
                    Escolha a Palavra
                </button>
                </div>
        </div>
    )
}

