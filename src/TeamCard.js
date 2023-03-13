import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import CardsT from './CardsT'

let CarduserData = [
  {
    image:
      'https://codehunktech.com/wp-content/uploads/2022/11/aUntitledgl-500x500-1.jpg',
    name: 'Sheema Sharma',
    description:
      'HUMAN RESOURCE',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/07/SquareLite_202112010539539.jpg',
    name: 'Neetu Sharma',
    description:
      'Co-FOUDER & CTO',
  },
  {
    image:
      'https://codehunktech.com/wp-content/uploads/2022/11/man-avatar-profile-picture-vector-illustration_268834-541.webp',
    name: 'Md Imran',
    description:
      'BUSSINESS EXECUTIVE',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/07/IMG_2664.jpg',
    name: 'Md Shahzad Ali',
    description:
      'FOUNDER & CEO',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/11/man-avatar-profile-picture-vector-illustration_268834-541.webp',
    name: 'Murliraj Iyer',
    description:
      'GRAPHIC DESIGNER',
  },
  
];
 function TeamCard() {
  const [width, widthState] = useState(0);
  window.onresize = function () {
    widthState(window.innerWidth);
  };
  return (
    <div className='team-card'>
      <Swiper
        className='SwiperCard'
        spaceBetween={35}
        slidesPerView={
          width < 810 && width > 600 ? 2 : width < 600 && width > 0 ? 1 : 3
        }
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {CarduserData.map((element) => {
          return (
            <SwiperSlide className='team-card'>
              {' '}
              <CardsT
                image={element.image}
                name={element.name}
                description={element.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default TeamCard;
