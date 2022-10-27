import React from 'react'
import Image from 'next/image'

const styles = {

    header: 'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]'

}


const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white1_svg'
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