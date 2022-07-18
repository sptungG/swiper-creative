import React, { useEffect, useRef } from 'react';
import createStoriesSlider from '../stories-slider.esm.js';

export default function StoriesSlider(props) {
  const {
    Swiper,
    EffectCube,
    enabled = true,
    autoplayDuration = 5000,
    onStoriesSlider,
    onSlidesIndexesChange,
    children,
    ...rest
  } = props;

  const elRef = useRef(null);
  const storiesSlider = useRef(null);
  useEffect(() => {
    storiesSlider.current = createStoriesSlider(elRef.current, {
      Swiper,
      EffectCube,
      enabled,
      autoplayDuration,
      onSlidesIndexesChange,
    });
    if (onStoriesSlider) onStoriesSlider(storiesSlider.current);
    return () => {
      if (storiesSlider.current && storiesSlider.current.destroy) {
        storiesSlider.current.destroy();
      }
    };
  }, []);

  return (
    <div className="stories-slider" ref={elRef} {...rest}>
      <div className="swiper">
        <div className="swiper-wrapper">{children}</div>
      </div>
    </div>
  );
}
