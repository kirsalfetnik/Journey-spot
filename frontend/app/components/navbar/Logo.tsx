'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()
    
    return (
        <Image
            onClick={() => router.push('/')}
            alt='Logo'
            className='hidden md:block cursor-pointer'
            height='170'
            width='170'
            priority // or priority={true}
            src='/images/logo.png'
        />
    )
}

export default Logo