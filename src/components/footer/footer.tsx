import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>

            <footer>
                <h4 className={styles.h}>Socials</h4>
                <div className={styles['soc-links']}>
                    <a href="#" className={styles['soc-link']}>
                        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" className={styles.socImg} />
                    </a>
                    <a href="#" className={styles['soc-link']}>
                        <img src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg" alt="Twitter" className={styles.socImg} />
                    </a>
                    <a href="#" className={styles['soc-link']}>
                        <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" className={styles.socImg} />
                    </a>
                    <a href="#" className={styles['soc-link']}>
                        <img src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" alt="Twitter" className={styles.socImg} />
                    </a>
                    {/* Add more social media links as needed */}
                </div>
                <p className={styles.p}>&copy; 2023 Your Company. All rights reserved.</p>

                <div className="copyright"></div></footer></div>

    );
};
