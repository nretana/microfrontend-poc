
export interface CardProps {
    title: string,
    imgUrl: string
}

export const Card = ({ title, imgUrl }: CardProps) => {

    return(<div className='ui ui-max-w-80 ui-border ui-border-indigo-300 ui-border-solid ui-rounded-md ui-p-3'>
              <div>
                <h5 className='ui-font-semibold'>{title}</h5>
              </div>
              <div className='ui-my-3'>
                <img className='ui-rounded-md' src={imgUrl} alt='' width="100%" height="100%" />
              </div>
              <div>
                <button className='ui-bg-indigo-500 ui-text-white ui-px-3 ui-py-2 ui-rounded-md hover:ui-bg-indigo-600'>See Details</button>
              </div>
           </div>)
}