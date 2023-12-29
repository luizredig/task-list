import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="title-row">
          <h1>
            Task list with <span className="title-highlight">React</span>
          </h1>
          <img className="react-logo" src="/react-logo.png" alt="React Logo" />
        </div>
        <h2>by redig</h2>
      </header>
    </>
  );
};

export default Header;
