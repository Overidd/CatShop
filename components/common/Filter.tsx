'use client';
import { ListFilter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useFilter } from '@/hooks/useFilter';
import RangeSlider from '../slider/SliderRange';
import { useState } from 'react';
import { Search } from 'lucide-react'

type FilterType = {
   id: string;
   value: string;
   label: string;
}
const priceMin = 1;
const priceMax = 200;

const rangeMin = 1;
const rangeMax = 200;

const category: FilterType[] = [

   {
      id: 'categorFil1',
      value: 'alimento',
      label: 'Alimentos',
   },
   {
      id: 'categorFil2',
      value: 'juguete',
      label: 'Juguetes',
   },
   {
      id: 'categorFil3',
      value: 'accesorio',
      label: 'Accesorios',
   },
   {
      id: 'categorFil4',
      value: 'ropa',
      label: 'Ropa',
   },
   {
      id: 'categorFil5',
      value: 'higiene',
      label: 'Higiene',
   },
   {
      id: 'categorFil6',
      value: 'salud',
      label: 'Salud',
   },
]

const marca: FilterType[] = [
   {
      id: 'marcaFil1',
      value: 'catsoup',
      label: 'Catsoup',
   },
   {
      id: 'marcaFil2',
      value: 'delmeow',
      label: 'DelMeow',
   },
   {
      id: 'marcaFil3',
      value: 'gaty',
      label: 'Gaty',
   },
   {
      id: 'marcaFil4',
      value: 'whiskers',
      label: 'Whiskers',
   },
]

export const Filter = () => {
   const [openFilter, setOpenFilter] = useState(false);
   const router = useRouter();
   const { filter } = useFilter();

   const updateUrlParams = (params: URLSearchParams) => {
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      router.replace(newUrl);
   };

   const onParamPushSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { name, value } = event.currentTarget.elements[0] as HTMLInputElement;
      const currentParams = new URLSearchParams(window.location.search);

      if (value) {
         currentParams.set(name, value.toLowerCase());
      } else {
         currentParams.delete(name);
      }
      updateUrlParams(currentParams);
   };

   const onParamPushRange = (min: number, max: number) => {
      // if (min === priceMin && max === priceMax) return;
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set('min', min.toString());
      currentParams.set('max', max.toString());
      updateUrlParams(currentParams);
   };

   const onParamPushCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, checked } = event.target;
      const currentParams = new URLSearchParams(window.location.search);

      if (checked) {
         currentParams.append(name, value);
      } else {
         const values = currentParams.getAll(name).filter((param) => param !== value);
         currentParams.delete(name);
         values.forEach((param) => currentParams.append(name, param));
      }
      updateUrlParams(currentParams);
   };

   const onOpenInputSearch = () => {
      document.querySelector('.inputSearch')?.classList.toggle('active');
   }
   return (
      <>
         <div className='basis-full m-1 md:hidden'>
            <form onSubmit={onParamPushSearch} className='w-fit ml-auto rounded-lg overflow-hidden relative'>
               <input
                  type="search"
                  placeholder="Buscar producto"
                  name='search'
                  defaultValue={filter.search || ''}
                  autoComplete='off'
                  maxLength={22}
                  className='py-[0.66rem] text-black outline-none align-middle inputSearch'
               />
               <button
                  type='submit'
                  className='p-[0.66rem] align-middle inline-block bg-white ml-auto cursor-pointer'
                  onClick={onOpenInputSearch}
               >
                  <Search className='' color='#48b' />
               </button>
            </form>
         </div>
         {/* ${openFilter ? 'min-w-[55dvw] min-h-[25%] md:min-w-[21%]' : 'min-w-[5%] md:min-w-[21%] min-h-[0%]'} */}
         <section
            className={`md:p-2 bg-bgLateralcolumn rounded-xl animationFilterMovil absolute top-[0.2rem] z-10 md:static w-full md:max-w-[16rem] md:h-fit ${openFilter? 'max-w-[55dvw] max-h-[25%]' :'max-w-[15%] max-h-[2%]'} `}>

            <button className="p-2 bg-bgLateralcolumn rounded-xl" onClick={() => setOpenFilter(!openFilter)}>
               <ListFilter strokeWidth={'3'} size={'2rem'} />
            </button>
            <div className={`flex flex-col gap-2 p-4  ${openFilter ? 'flex' : 'hidden md:flex'}`}>
               <fieldset className='md:space-y-4'>

                  <form onSubmit={onParamPushSearch} className='bg-white rounded-md overflow-hidden hidden md:block'>
                     <input
                        type="search"
                        placeholder="Buscar producto"
                        name='search'
                        defaultValue={filter.search || ''}
                        autoComplete='off'
                        maxLength={22}
                        className='p-2 text-black outline-none align-middle w-[83%]'
                     />
                     <button
                        type='submit'
                        className='align-middle inline-block p-1'
                     >
                        <Search className='' color='#48b' />
                     </button>
                  </form>


                  <RangeSlider
                     minPrice={Number(filter.priceRange.min ?? priceMin)}
                     maxPrice={Number(filter.priceRange.max ?? priceMax)}
                     minRange={rangeMin}
                     maxRange={rangeMax}
                     className='w-[100%]'
                     onParamPushRange={onParamPushRange}
                  />
               </fieldset>
               <fieldset>
                  <legend className="md:text-xl font-semibold">Categorías</legend>
                  {
                     category.map(({ id, value, label }) => (
                        <label key={id} htmlFor={id} className='block cursor-pointer'>
                           <input
                              type="checkbox"
                              id={id}
                              name="category"
                              value={value}
                              className='align-middle'
                              onChange={onParamPushCheck}
                              checked={filter.category.includes(value)}
                           />
                           <span className="ml-2 align-middle">{label}</span>
                        </label>
                     ))
                  }
               </fieldset>
               <fieldset>
                  <legend className='md:text-xl font-semibold'>Marcas</legend>
                  {marca.map(({ id, value, label }) => (
                     <label key={id} htmlFor={id} className='block cursor-pointer'>
                        <input
                           type="checkbox"
                           id={id}
                           name="brand"
                           value={value}
                           className='align-middle'
                           onChange={onParamPushCheck}
                           checked={filter.brand.includes(value)}
                        />
                        <span className="ml-2">{label}</span>
                     </label>
                  ))}
               </fieldset>
            </div>
         </section >
      </>
   );
};
