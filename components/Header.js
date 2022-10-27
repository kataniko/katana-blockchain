import React from 'react'
import Image from 'next/image'

const styles = {

    header: 'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]'

}


const Header = () => {
    return (
        <div className={styles.header}>
            <Image
<<<<<<< HEAD
                src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
=======
                src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white1_svg'
>>>>>>> 4fea467c16b4388c597c8084c8dd589680671a6c
                alt='logo'
                width={220}
                height={220}
            />

            <div className={styles.headerWrapper}>
                <div className={styles.nav}>
                   
                    <div className={StyleSheet.navItem}>
                        <div className={styles.navLink}>
                        </div>

                    </div>

                    <div className={StyleSheet.navItem}>
                        <div className={styles.navLink}>
                        </div>

                    </div>


                    <div className={StyleSheet.navItem}>
                        <div className={styles.navLink}>
                        </div>

                    </div>

                
                
                
                
                </div>

            </div>

        </div>

    )
}

export default Header