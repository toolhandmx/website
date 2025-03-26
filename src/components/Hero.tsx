import heroImage from "../assets/hero-image.webp";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <img src={heroImage} />
      <h1>Tecnología y creatividad al servicio de tu día a día</h1>
      <p>
        Nos especializamos en soluciones integrales para la reparación de
        celulares y creación de páginas web.
      </p>
      <a href="https://wa.me/+525586029325" target="_blank">
        Contactar ahora
      </a>
    </section>
  );
}

export default Hero;
