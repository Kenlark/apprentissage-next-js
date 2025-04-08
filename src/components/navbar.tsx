import "@/styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-test">
        <h1>Portofolio</h1>
        <ul className="navbar-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
