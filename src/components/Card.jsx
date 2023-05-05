import React from 'react'

const Card = (props) => {
    let badgeText 
    if(props.item.openSpots === 0){
      badgeText = "SOLD OUT"
    } else if (props.item.location === 'Online') {
      badgeText = 'ONLINE'
    }
  return (
    <div className='w-44 text-xs flex flex-col flex-none relative'>
      {badgeText && <div className='absolute top-1 left-1 py-1.5 px-2 bg-white rounded font-bold'>{badgeText}</div>}
      <img src={props.item.coverImg} alt="card" className='w-full rounded-xl mb-2.5'/>
      <div className='flex items-center'>
        <img src="star.png" alt="star" className='h-3.5' />
        <span>{props.item.stats.rating}</span>
        <span className="text-gray-400">({props.item.stats.reviewCount}) •</span>
        <span className="text-gray-400">{props.item.location}</span>
      </div>
      <p className='overflow-hidden text-ellipsis'>{props.item.title}</p>
      <p className='mt-auto'><span className='font-bold'>From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card