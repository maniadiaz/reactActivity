function Contact() {
  return (
    <div className="contact">
      <h2>Contactanos</h2>
      <p>Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
      <form>
        <label htmlFor="name">Nombre:</label><br />
        <input type="text" id="name" name="name" required disabled/><br />

        <label htmlFor="email">Correo electronico:</label><br />
        <input type="email" id="email" name="email" required disabled/><br />

        <label htmlFor="message">Mensaje:</label><br />
        <textarea id="message" name="message" required disabled></textarea><br />

        <button type="submit" disabled>Enviar</button><br />
      </form>
    </div>
  );
}

export default Contact;