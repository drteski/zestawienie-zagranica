import { SvgSpinners180RingWithBg } from "@/components/layout/Icons";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SvgSpinners180RingWithBg className="w-[100px] h-[100px]" />
    </div>
  );
};

export default Loading;
