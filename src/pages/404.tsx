import FuzzyText from "../components/elements/Fuzzy";
import Image from "next/image";
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 gap-6">
      <Image
  src="/lost.svg"
  alt="404 Error"
  width={400}
  height={400}
  className="error max-w-xs"
  priority
/>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        Feel Lost ?
      </FuzzyText>
      
      {/* <h1 className="text-2xl">Feel lost ?</h1> */}
    </div>
  );
}
