import linksData from '../../../../shared/Data/side-link-data'

const SideBar = () => {
  return (
    <div>
      {linksData.map((item, index) =>(
        <span key={index}>{item.name}</span>
      ))}
    </div>
  )
}

export default SideBar