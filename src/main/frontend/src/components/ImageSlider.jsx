import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://images.squarespace-cdn.com/content/v1/55beb8aee4b09acbb071e897/1453097713309-6PFCNIR52ZJHBCR77AVZ/image-asset.png?format=1000w',
            title: 'madeInJj',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2016/01/17/23/31/rio-de-janeiro-1145746__480.jpg',
            title: 'brazil',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2022/02/03/12/03/river-6990295__480.jpg',
            title: 'russia',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2019/09/15/14/35/city-4478471__480.jpg',
            title: 'sweden',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__480.jpg',
            title: 'france',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2019/03/19/22/48/city-4067225__480.jpg',
            title: 'argentina',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFristSlide = currentIndex === 0
        const newIndex = isFristSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group'>
        <div 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
        ></div>

        {/** left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/** right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div 
                className='text-2xl cursor-pointer' 
                key={slideIndex} 
                onClick={() => goToSlide(slideIndex)}>

                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider