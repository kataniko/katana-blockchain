import React from 'react'
import Image from 'next/image'

const styles = {

    header: 'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]'

}


const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                src='https://images-platform.99static.com/P-fChD2QG59Etx7UQrtlcmlp1rg=/89x63:1678x1652/500x500/top/smart/99designs-contests-attachments/89/89728/attachment_89728569'
                alt='logo'
                width={220}
                height={220}
            />
        </div>

    )
}

export default Header