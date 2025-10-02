const CertificationCard = ({
  title,
  description,
}) => {
 

  return (
    <div className="flex flex-col h-full justify-start items-center">
        <div className="bg-[#acacac] w-full h-[9px] mb-4 rounded-[2px]"/>
      <h3 className='mb-4 font-medium md:font-semibold text-xl text-[#EB9948]'>{title}</h3>
      <p className="h-full text-[#4b4b4b]">{description}</p>
      
      <div className="bg-[#acacac] w-full h-[9px] mt-4 rounded-[2px]"/>
    </div>
  )
}

export default CertificationCard
