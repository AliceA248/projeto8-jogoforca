const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras() {
    return (
        <div className="ConjuntoLetras">
            {alfabeto.map((letra) => <button className="letra">{letra}</button> )}
        </div>
    )
}