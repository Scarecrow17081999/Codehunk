import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import BasicExample from './Card';

let userData = [
  {
    image:
      'https://codehunktech.com/wp-content/uploads/2022/07/c1l1lYyd8TqlAQS4spe1jRmH4XbfccCp4s1yyYXK2vT70C9ju3xHCFfOtLskkSnx2K.jpeg',
    name: 'Didar Kamelivon',
    description:
      '"I enjoyed working with CodeHunk Technology, they were polite, and showed professional skills during project implementation contract time. I will continue work with them in future through upwork and recommend them as qualified developer with proven experience. The work has been done successfully."',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/11/Client1.webp',
    name: 'Martin Alaskar',
    description:
      'CodeHunk Technology’s Dev was quick to identify flaws in the existing implementation and suggested ways to improve the architecture of the application in addition to completing the tasks assigned to them. I would highly recommend them for any React Native project',
  },
  {
    image:
      'https://codehunktech.com/wp-content/uploads/2022/07/team-member-6.jpg',
    name: 'Anton Donodov',
    description:
      'One of the best contractors I have ever worked with. Highly recommend them, worked on a project deliver and communicated in great fashion I enjoyed .”working with CodeHunk Technology and will likely have additional jobs for them in the future',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/11/client2.webp',
    name: 'David Gaylor',
    description:
      'Thanks to Shahzad for work completion successfully. During work process freelancer was polite and demonstrated high level of proficiency in mobile app dev React Native. we was working long time by which I got project done successfully. English is fluent and i plan to work with Ali in future. Thanks!',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/11/client3.webp',
    name: 'Anastasia Naval',
    description:
      '"Excellent Developer. He provide the high quality code and had excellent communication with us. Would like to work with him again. Thanks"',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/11/client5.webp',
    name: 'Bryan Hackett',
    description:
      'They were great mobile developers! Good knowledge of React Native and mobile development in general. Listens and understands the problem very well, good communication skills! Highly recommend for a new mobile project.',
  },
  {
    image: 'https://codehunktech.com/wp-content/uploads/2022/11/client4.webp',
    name: 'Stefan Creadore',
    description:
      'Helpful and knowledgeable. Working with a tight schedule is a challenge. they have also shown initiative, suggested improvements and guided me through various technologies and tools, to be involved with the project.',
  },
];
 function TestimonialCarousel() {
  const [width, widthState] = useState(0);
  window.onresize = function () {
    widthState(window.innerWidth);
  };
  return (
    <div className='team-card'>
      <Swiper
        className='SwiperSel'
        spaceBetween={35}
        slidesPerView={
          width < 810 && width > 600 ? 2 : width < 600 && width > 0 ? 1 : 3
        }
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {userData.map((element) => {
          return (
            <SwiperSlide className='team-card'>
              {' '}
              <BasicExample
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
export default TestimonialCarousel;
