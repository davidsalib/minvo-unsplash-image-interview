import { useState } from 'react'
import { UnsplashImage } from '../models/unsplashImage'

const ImageCard = ({ image }: { image: UnsplashImage }) => {
    const { urls, alt_description, slug } = image
    const [isOpen, setISOpen] = useState<boolean>(false)

    const onClick = () => {
        setISOpen(true)
    }

    const onClose = () => {
        setISOpen(false)
    }
    return (
        <>
            <div className='cursor-pointer' onClick={onClick}>
                <img src={urls.regular} alt={alt_description}
                    className="aspect-square bg-gray-800 rounded-lg "
                />
            </div>
            {
                isOpen && (
                    <div onClick={onClose}
                        className='bg-black/50 fixed top-0 left-0 w-full h-full flex justify-center items-center'>
                        <img src={urls.regular} alt={alt_description}
                            className="aspect-square bg-gray-800 rounded-lg z-10"
                        />
                    </div>
                )
            }

        </>
    )
}

export default ImageCard