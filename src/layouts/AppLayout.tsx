import { Outlet, Link } from 'react-router-dom';

export const AppLayout = () => {
  const style: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
  };

  return (
    <>
      <header>
        <nav>
          <ul style={style}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/context">React Context</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
