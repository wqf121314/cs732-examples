import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function dNavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/articles" className={({ isActive }) => isActive && styles.activeLink}>Articles</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive && styles.activeLink}>Gallery</NavLink>
        </div>
    );
}