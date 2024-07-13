import 'animate.css';
import { ReturnBack } from "@/components/button/ReturnBack";
import { HeaderNotMenu } from "@/components/common";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <div className=" w-[90%] m-auto space-y-5" >
         <HeaderNotMenu/>
         <ReturnBack/>
         <main className="overflow-hidden max-w-7xl m-auto">
            {children}
         </main>
      </div>
   );
}