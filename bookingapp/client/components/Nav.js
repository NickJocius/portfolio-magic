import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="nav bg-light d-flex justify-content-between">
            {/* with nextjs need anchor tag in link, and href */}
            <Link href="/">
                <a className="nav-link">Home</a>
            </Link>
            <Link href="/login">
                <a className="nav-link">Login</a>
            </Link>
        </nav>
    );
};

export default Nav;
