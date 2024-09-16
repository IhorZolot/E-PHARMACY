import { useEffect, useState } from 'react';
import ImgShopMob from '../../../../assets/images/ImgShopMob.svg'
import ImgShopTab from '../../../../assets/images/ImgShopTab.svg'
import ImgShopDesk from '../../../../assets/images/ImgShopDesk.svg'

const ImageShop = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const selectedShopImg = screenWidth >= 1440 ? ImgShopDesk : screenWidth >= 768 ? ImgShopTab : ImgShopMob
    ;

  return  <div><img src={selectedShopImg} alt='ImgShop'/></div>
}

export default ImageShop