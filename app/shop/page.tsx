import { ContentProducts } from "@/components/common/ContentProducts"
import { dataProducts } from "@/data"
import { Filter } from "@/components/common/Filter"

export default function Shop() {

   return (
      <main className="w-[90%] mx-auto flex flex-wrap gap-4 relative">
         <Filter />
         <ContentProducts dataProducts={dataProducts} />
      </main>
   )
}


