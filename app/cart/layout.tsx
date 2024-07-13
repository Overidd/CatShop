import 'animate.css';
import { ReturnBack } from "@/components/button/ReturnBack";
import { HeaderNotMenu } from "@/components/common";

export const metadata = {
   title: "ShopCat",
   description: "Generated by create next app",
};

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <div className="min-h-dvh w-[90%] m-auto space-y-10" >
         <HeaderNotMenu/>
         <ReturnBack/>
         <main className="overflow-hidden w-full">
            {children}
         </main>
      </div>
   );
}