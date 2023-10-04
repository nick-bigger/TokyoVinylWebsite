import useEmblaCarousel, {EmblaCarouselType} from 'embla-carousel-react'
import Carousel1 from "@/assets/carousel1.jpg";
import Carousel2 from "@/assets/carousel2.jpg";
import {PropsWithChildren, useCallback, useEffect, useState} from "react";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: 'center', containScroll: false})
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect, onInit])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide__number">
                <span>1</span>
              </div>
              <img className="embla__slide__img" src={Carousel1}/>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <span>2</span>
              </div>
              <img className="embla__slide__img" src={Carousel2}/>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <span>3</span>
              </div>
              <img className="embla__slide__img" src={Carousel1}/>
            </div>
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              scrollTo(index)
            }}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </>
  )
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const DotButton: React.FC<PropType> = (props) => {
  const {children, ...restProps} = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}