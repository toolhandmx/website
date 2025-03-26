import cellPhoneRepair from "../assets/cell-phone-repair.webp";
import webDevelopment from "../assets/web-development.webp";

function Services() {
  return (
    <section className="services" id="servicios">
      <h3>Nuestros servicios:</h3>
      <div className="wrapper">
        <div className="service">
          <img src={cellPhoneRepair} />
          <div className="details">
            <h2>Reparación de celulares</h2>
            <h3>Vuelve a confiar en tu dispositivo</h3>
            <p>
              Sabemos lo importante que es tu celular. Ofrecemos diagnósticos
              gratuitos, reparaciones rápidas y repuestos de alta calidad para
              que tu dispositivo funcione como nuevo.
            </p>
            <ul>
              <li>
                <i className="ri-tools-fill" />
                <div>
                  Reparación de pantallas, baterías, y componentes internos
                </div>
              </li>
              <li>
                <i className="ri-user-2-fill" />
                <div>Técnicos certificados y experiencia comprobada</div>
              </li>
              <li>
                <i className="ri-award-fill" />
                <div>Garantía en todas nuestras reparaciones</div>
              </li>
              <li>
                <i className="ri-customer-service-fill" />
                <div>Atención personalizada y servicio a domicilio</div>
              </li>
            </ul>
            <span>
              ¿Problemas con tu celular?{" "}
              <strong>
                ¡
                <a href="https://wa.me/+525586029325" target="_blank">
                  Contáctenos ahora
                </a>{" "}
                y recupéralo!
              </strong>
            </span>
          </div>
        </div>
        <div className="service">
          <img src={webDevelopment} />
          <div className="details">
            <h2>Creación de páginas web</h2>
            <h3>Impulsa tu presencia en línea</h3>
            <p>
              Transforma tu idea en un sitio web moderno, responsivo y
              optimizado. Nuestro equipo de expertos crea páginas personalizadas
              que reflejan la identidad de tu negocio y te conectan con tus
              clientes.
            </p>
            <ul>
              <li>
                <i className="ri-layout-fill" />
                <div>Diseño atractivo y adaptativo</div>
              </li>
              <li>
                <i className="ri-focus-fill" />
                <div>Optimización para mejorar tu visibilidad</div>
              </li>
              <li>
                <i className="ri-shopping-cart-2-fill" />
                <div>
                  Integración con redes sociales y soluciones e-commerce
                </div>
              </li>
              <li>
                <i className="ri-customer-service-fill" />
                <div>Soporte y mantenimiento continuo</div>
              </li>
            </ul>
            <span>
              ¿Listo para dar el salto al mundo digital?{" "}
              <strong>
                ¡
                <a href="https://wa.me/+525586029325" target="_blank">
                  Contáctenos ahora
                </a>{" "}
                y reciba una asesoría gratuita hoy mismo!
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
