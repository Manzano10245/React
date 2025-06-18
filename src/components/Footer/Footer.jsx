import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mi Aplicación.</p>
    </footer>
  );
};
