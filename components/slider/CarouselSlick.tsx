
'use client'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
   children: React.ReactNode,
   className?: string,
   speed: number,
}

export const CarouselSlick = ({ children, className, speed }: Props) => {

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed,
   };

   return (
      <div className='rounded-xl overflow-hidden'>
         <Slider {...settings} className={className}>
            {children}
         </Slider>
      </div>
   );
};

