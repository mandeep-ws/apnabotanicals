import React, { useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

import {POWDER} from '../inventory/powder';

const items= POWDER;

function CompCar(){
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


  
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }

      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
          >
              <img src={item.image}  alt="" width="30%" height="30%" className= "mt-4 mb-4"></img>
            <CarouselCaption className="custom-caption" captionText={item.description} captionHeader={item.name} />
          </CarouselItem>
        );
      });


 
      return (
        <div className="mt-5 mb-5 text-center d-none d-md-block">
          <style>
            {
              `.custom-tag {
                max-width: 100%;
                 background: #e7f0c3;
                }`
            }
          </style>

          <style>
                {
                     `.custom-caption {

                        color: black;
                    }`
                }

          </style>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="custom-caption"
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
      );
    }

export default CompCar;



