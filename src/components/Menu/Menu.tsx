import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menu__list}>
                    <li className={styles.menu__item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Menu;