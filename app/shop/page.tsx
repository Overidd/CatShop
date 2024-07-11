import { ContentProducts } from "@/components/common/ContentProducts"
import { Filter } from "@/components/common/Filter"
import { ProductProps } from "@/lib/types"
import { dataProducts } from "./data/dataProducts"


export default function Shop() {

   return (
      <main className="w-[90%] mx-auto flex flex-wrap gap-4 relative">
         <Filter />
         <ContentProducts dataProducts={dataProducts} />
      </main>
   )
}


