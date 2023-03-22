import "./styles-contact.css";

export const ContactForm = () => {
  return (
    <div className="formContact" id="contact-sec">
      <h2>Contacto:</h2>

      <form action="https://formsubmit.co/0f8eee85935d5726273a9d1113f2abe2" method="POST">
        <div className="div-form-contact">
          <label htmlFor="name">¿Cómo te llamas?</label>
          <input type="text" name="name" id="name"></input>

          <label htmlFor="email">¿A que email puedo contactarte?</label>
          <input type="email" name="email" id="email"></input>

          <label htmlFor="affair">¿Sobre que quieres hablar?</label>
          <textarea name="affair" id="affair" cols="20" rows="6"></textarea>

          <button type="submit" className="contact-button">
            Contactar
          </button>
        </div>
        <p>Contestaré lo antes posible, Gracias!</p>
      </form>
    </div>
  );
};
