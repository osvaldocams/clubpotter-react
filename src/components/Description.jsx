import Check from '../assets/cheque.png'
import Book from '../assets/libro-abierto.png'
import Pencil from '../assets/pencil.png'

const Description = () => {
    return (
        <section className='description'>
            <div className="description_container">
                <div className="description_container-sub">
                    <div className="des-img" ><img src={Check} alt=""/></div>
                    <h2>100% Potterheads</h2>
                    <p>Somos la mayor comunidad de Harry Potter en español ¡Únete YA!</p>
                </div>
            </div>
            <div className="description_container">
                <div className="description_container-sub">
                    <div className="des-img" ><img src={Book} alt=""/></div>
                    <h2>Amamos los Libros</h2>
                    <p>Las películas de Harry Pooter son GENIALES, pero también nos basamos en los libros.</p>
                </div>
            </div>
            <div className="description_container">
                <div className="description_container-sub">
                    <div className="des-img" ><img src={Pencil} alt=""/></div>
                    <h2>Escribe con Nosotros</h2>
                    <p>Si tienes una historia o teoría de Harry Potter que contar ¡Hazlo AQUÍ en ClubPotter!</p>
                </div>
            </div>
        </section>
    )
}

export default Description
