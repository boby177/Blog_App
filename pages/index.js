import Format from "../layouts/format";

// Components
import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import Section3 from "@/components/section-3";
import Section4 from "@/components/section-4";

export default function Home() {
  return (
    <Format>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Format>
  );
}
