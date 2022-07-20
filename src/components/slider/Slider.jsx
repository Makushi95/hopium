import { useEffect, useState } from "react";
import "./slider.css";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const text = [
    "The whole Hopium Studio team are crypto enthusiasts withreal passion that perfectly understand the web3 industry and have broad experience of UI&UX from worldwide NFT & crypto projects. During the cooperation, we will create a design to help you stand out from the crowd.",
    "Hopium Studio is a crypto-native design house that aims to deliver top-quality visuals for global brands. We are aware of the ongoing web3 revolution. Hopium wants to participate in the broad new digital economy by contributing and building.",
    "Hopium Studio operates in the blockchain industry - the fastest developing sector in the 21st Century. We believe that mass adoption will happen in the coming next decades and aim to provide world-class visuals, making digital life easier and more intuitive.",
  ];

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setCurrentSlide((prevState) => {
        if (prevState === text.length - 1) {
          return 0;
        }

        return prevState + 1;
      });
    }, 5000);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, [currentSlide, text.length]);

  return (
    <div className="slider-container">
      <div className="slider-text">{text[currentSlide]}</div>
      <div className="slider-steps">
        {text.map((_, index) => (
          <div
            key={index}
            className="slider-steps-bar"
            onClick={() => setCurrentSlide(index)}>
            <div
              className="slider-steps-bar-progress"
              id={index === currentSlide ? "active" : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
