

export const CartPayMethod = () => {
   return (
      <div className="">
         <section>
            <h1>Payment  method</h1>
            <form action="" className="space-y-2">
               <label htmlFor="card" className="space-x-2 block">
                  <input type="radio" name="method" id="card" className="checkboxStyle align-middle"/>
                  <span className="align-middle">Tarjeta de (creadio o debito) </span>
               </label>
               <label htmlFor="yape" className="space-x-2 block">
                  <input type="radio" name="method" id="yape" className="checkboxStyle align-middle"/>
                  <span className="align-middle">Yape</span>
               </label>
               <label htmlFor="plin" className="space-x-2 block">
                  <input type="radio" name="method" id="plin" className="checkboxStyle align-middle"/>
                  <span className="align-middle">Plin</span>
               </label>
               <label htmlFor="cash" className="space-x-2 block">
                  <input type="radio" name="method" id="cash" className="checkboxStyle align-middle"/>
                  <span className="align-middle">En efectivo (Delivery)</span>
               </label>
            </form>
         </section>

      </div>
   )
}
