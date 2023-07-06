import { RiDoubleQuotesL } from 'react-icons/ri';
import ZoomIn from './Motions/ZoomIn';

const Slogan = ({ slogan }) => {
  return (
    <ZoomIn>
      <div className="mx-auto w-[359px] sm:w-[445px] lg:w-[580px] flex flex-col items-center gap-4">
        <RiDoubleQuotesL className="lg:text-[65px] sm:text-[50px] text-[40px] text-gray-400" />
        <h1 className="bg-gradient-to-r from-blue-700 via-amber-200 to-yellow-500 bg-clip-text text-transparent font-black lg:text-[50px] sm:text-[40px] text-[30px] text-center">
          {slogan.title}
        </h1>
        <div className="w-[40%] bg-gray-400 h-2 rounded-2xl" />
      </div>
    </ZoomIn>
  );
};

export default Slogan;
