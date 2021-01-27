import {
  Title,
  Score,
  Base,
  Image,
  Circle,
  Row,
  Block,
  FinalScore,
} from "./styles";
import { useState, useEffect } from "react";
import Timer from "./components/Timer";
import { ZoomIn } from "animate-css-styled-components";
function App() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const images = {
    avocado:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y5ldoyUATsKrNdnI_OCezQHaGY%26pid%3DApi",
    guac:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.I_Y0G8YaSy1NqQF63W6oWAHaGg%26pid%3DApi",
    hole:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.hdwallsource.com%2Fwp-content%2Fuploads%2F2014%2F11%2Fblack-wallpaper-27635-28354-hd-wallpapers.jpg&f=1&nofb=1",
  };
  const [score, setScore] = useState(0);
  const [image1, setImage1] = useState(images.hole);
  const [image2, setImage2] = useState(images.hole);
  const [image3, setImage3] = useState(images.hole);
  const [image4, setImage4] = useState(images.hole);
  const [image5, setImage5] = useState(images.hole);

  const setImage = (id, image) => {
    switch (id) {
      case "1":
        setImage1(image);
        break;
      case "2":
        setImage2(image);
        break;
      case "3":
        setImage3(image);
        break;
      case "4":
        setImage4(image);
        break;
      case "5":
        setImage5(image);
        break;
      default:
        break;
    }
    if ((minutes === 0) & (seconds === 0)) {
      setImage1(images.hole);
      setImage2(images.hole);
      setImage3(images.hole);
      setImage4(images.hole);
      setImage5(images.hole);
    }
  };
  const randTime = (x) => {
    return 1000 * Math.floor(x * Math.random() + 1);
  };
  const delayFunction = (id, image) => {
    setTimeout(() => setImage(id, image), randTime(10));
    setImage(id, images.hole);
  };
  const click = (event) => {
    if (minutes !== 0 || seconds !== 0) {
      if (event.target.src === images.avocado) {
        setScore(score + 5);
        setImage(event.target.id, images.guac);
        setTimeout(delayFunction, 700, event.target.id, images.avocado);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => setImage1(images.avocado), randTime(10));
    setTimeout(() => setImage2(images.avocado), randTime(10));
    setTimeout(() => setImage3(images.avocado), randTime(10));
    setTimeout(() => setImage4(images.avocado), randTime(10));
    setTimeout(() => setImage5(images.avocado), randTime(10));
  }, [images.avocado]);

  const click2 = () => {
    setMinutes(2);
    setScore(0);
  };
  return (
    <>
      <Base>
        <Title> Guac-A-Mole </Title>
        <Score>
          Time Left:
          <Timer
            minutes={minutes}
            seconds={seconds}
            setSeconds={setSeconds}
            setMinutes={setMinutes}
          />
        </Score>
        {minutes === 0 && seconds === 0 ? (
          <ZoomIn duration="10s" delay="0.2s">
            <FinalScore> Score : {score} points </FinalScore>
          </ZoomIn>
        ) : (
          <Score> Score: {score} points </Score>
        )}
      </Base>
      {minutes !== 0 || seconds !== 0 ? (
        <Block className="container">
          <Row className="row justify-content-center">
            <Circle className="col">
              <Image src={image1} alt="avocado" id={1} onClick={click} />
            </Circle>
            <Circle className="col">
              <Image src={image2} alt="avocado" id={2} onClick={click} />
            </Circle>
            <Circle className="col">
              <Image src={image3} alt="avocado" id={3} onClick={click} />
            </Circle>
          </Row>
          <Row className="row justify-content-center">
            <Circle className="col">
              <Image src={image4} alt="avocado" id={4} onClick={click} />
            </Circle>
            <Circle className="col">
              <Image src={image5} alt="avocado" id={5} onClick={click} />
            </Circle>
          </Row>
        </Block>
      ) : (
        <Block>
          <Title>Game Over!</Title>
          <button type="button" class="btn btn-primary" onClick={click2}>
            Restart
          </button>
        </Block>
      )}
    </>
  );
}

export default App;
