import AddToCartButton from "./ui/AddToCartButton"

export default function ProductCard({item}){
    return(
        <>
           <div key={item.name} className="block">
              <div className="relative justify-center flex flex-col">
                <img
                  src={item.image.tablet}
                  srcSet={`${item.image.mobile} 300w, ${item.image.tablet} 768w, ${item.image.desktop} 1280w`}
                  size="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                  alt={item.name}
                  className="rounded-xl"
                />
               <AddToCartButton 
                item={item}
                key={item.name}
               />
              </div>

              <h3 className="mt-2 text-sm">{item.category}</h3>
              <h2 className="font-bold text-base">{item.name}</h2>
              <p>€{item.price}</p>
            </div> 
        </>
        
    )
}