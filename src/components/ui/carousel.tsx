import { images } from "@/assets/carousel/images";
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { PropsWithChildren, useCallback, useEffect, useState } from "react";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: 'center', containScroll: false})
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image) => (
              <div className="embla__slide" key={image.name}>
                <img className="embla__slide__img" src={image.src}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {selectedIndex+1}/{images.length}
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