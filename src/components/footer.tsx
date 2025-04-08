import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <p>
            &copy; {new Date().getFullYear()} Kenzo Kerachi. All rights
            reserved.
          </p>
        </div>
        <ul className="footer-list">
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
