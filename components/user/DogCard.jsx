import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export const DogCard = ({dog}) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        if(dog.images) setLoading(false)
    },[dog])
    return (
        <Link href="/chat/[dogname]" as={`/chat/${dog.name.toLowerCase()}`} passHref={true}>
            <a className="dog-card-link">
                <div className="dog-card">
                    { loading ? 'Loading...' : <Image className="user-img" src={dog.images[1]} alt={dog.name} height="93px" width="93px" layout="intrinsic"/>}
                    <span className="dog-name">{dog.name}</span>
                </div>
            </a>
        </Link>
    )
}