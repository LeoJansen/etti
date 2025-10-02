const CertificationCard = ({
  title,
  description,
}) => {
 

  return (
    <div className="flex flex-col h-full justify-start items-center bg-[#e7ebee] md:bg-transparent p-4 md:p-0 rounded-[4px] md:rounded-0 shadow-[0_2px_4px_rgba(0,0,0,0.41)] md:shadow-none">
        <div className="bg-[#acacac] w-full h-[9px] mb-4 rounded-[2px]"/>
      <h3 className='mb-4 font-medium md:font-semibold text-xl text-[#EB9948] text-center'>{title}</h3>
      <p className="h-full text-[#4b4b4b]">{description}</p>

      <div className="bg-[#acacac] w-full md:h-[9px] mt-4 rounded-[2px]"/>
    </div>
  )
}

export default CertificationCard
