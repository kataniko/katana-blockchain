import React from 'react'
import Image from 'next/image'


const styles = {
    
    header: 'shadow-2xl  shadow-red-600/50 bg-[#17171A] text-white h-20 flex gap-[45%] p-[15]',

    headerWrapper : 'flex justify-center h-full max-w-screen-xl mx-auto px-4',

    nav : 'flex justify-center items-center gap-[20px]',

    navItem : 'relative mr-1 cursor-pointer hover:opacity-60',

    badge : 'animate-ping rounded-full bg-red-700 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4 ring-red-900 ',

    inputContainer: 'flex items-center justify-center p-2 rounded-full bg-gray-300',

    input : 'bg-transparent outline-none text-red-800 w-70 ml-3',
}

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
               src='https://staticdelivery.nexusmods.com/mods/3333/images/249/249-1608122648-221002912.png'
               alt='logo'
               width={100}
               height={100} 
            />

            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            <div className='antialiased hover:subpixel-antialiased font-serif  '>
                             Assets
                            </div>
                            </div>    
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            NFT </div>
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Exchanges</div>
                        <div className={styles.badge} />
                    </div>
                    
                    <div className="flex items-center">
                        {/* Connect button */}
                        <div className={styles.inputContainer}>
                            {/* Search */}
                            <input className={styles.input} placeholder = 'Search...'/>
                        </div> 
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Header