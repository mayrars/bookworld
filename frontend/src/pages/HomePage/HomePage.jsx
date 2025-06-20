import Slider from "react-slick";
import image1 from '../../assets/cuaderno-de-mano-de-alto-angulo.jpg';
import image2 from '../../assets/mujer-sonriente-de-vista-frontal-con-libro.jpg';
import image3 from '../../assets/personas-de-alto-angulo-leyendo-juntas.jpg';
function HomePage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <div>
            <section className="bg-white text-black">
                <div className="container py-0 px-0 mx-auto max-w-[1800px]">
                <Slider {...settings}>
                    <div>
                    <img src={image1} alt="Logo" />
                    </div>
                    <div>
                    <img src={image2} alt="Logo" />
                    </div>
                    <div>
                    <img src={image3} alt="Logo" />
                    </div>
                </Slider>
                <div className="max-w-screen-lg">
                </div>
                <h2 className="text-4xl font-bold mb-4 mt-16">Club de lectura</h2>
                <p className="mb-4">¡Un espacio donde las palabras nos unen!</p>
                <p className="mb-4">En Bookworld, amamos leer, compartir ideas y descubrir nuevas voces literarias. Ya seas un lector empedernido o estés retomando el hábito, este es tu lugar.</p>
                <h3 className="text-4xl font-bold mb-4 mt-16">✨ ¿Qué hacemos?</h3>
                <p className="mb-4">Lecturas mensuales: Cada mes elegimos un libro diferente — ficción, no ficción, clásicos, contemporáneos, ¡tú decides!</p>

                <p className="mb-4">Reuniones semanales o quincenales (virtuales o presenciales): Compartimos impresiones, debatimos temas clave y reflexionamos juntos.</p>

                <p className="mb-4">Invitados especiales: Autores, editores o lectores con experiencia que nos dan nuevas perspectivas.</p>

                <p className="mb-4">Mini-retos de lectura: Para que salgas de tu zona de confort literaria.</p>

                <p className="mb-4">Foro y grupo exclusivo: Participa en nuestro grupo de WhatsApp, Telegram o Facebook para mantener la conversación viva.</p>
                </div>
            </section>
        </div>
    )
}

export default HomePage