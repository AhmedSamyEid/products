import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex-wrap">
      <div className="container m-10 text-white flex justify-between">
        <div className="logo">
          <h1 className="text-5xl">Products</h1>
          </div>
          <nav className="flex gap-10 list-none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ Download">Download App</Link>
          </li>
          <li>
            <Link to="/ Contact">Contact us</Link>
          </li>
        </nav>
        
      </div>
    </header>
  );
}
