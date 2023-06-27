import Reveal from '../Motions/Reveal';
import ZoomIn from '../Motions/ZoomIn';
import { style } from '@/app/styles/styles';

const IntroItem = ({ title, descriptions }) => {
  return (
    <>
      <Reveal width="w-fit">
        <h1 className={style.mainText}>{title}</h1>
      </Reveal>
      <ZoomIn>
        <p className={`${style.subText} text-center px-8`}>{descriptions}</p>
      </ZoomIn>
    </>
  );
};

export default IntroItem;
