
'use client'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
   children: React.ReactNode,
   className?: string,
}


export const CarouselSlick = ({ children, className }: Props) => {

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
   };

   return (
      <div className='rounded-xl overflow-hidden'>
         <Slider  {...settings} className='' >
            {children}
         </Slider>
      </div>
   );
};

