// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { useTiles } from '../../../context/tiles'

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = () => {
  const { tilesProperties } = useTiles();
  const coordinates = tilesProperties?.coordinates;

  if (!coordinates) return <></>

  return (
    <Popup
      longitude={coordinates.lng}
      latitude={coordinates.lat}
      closeButton={false}
      closeOnClick={false}
      offset={10}
    >
      <div className="tooltip-wrapper">
        <Description tilesProperties={tilesProperties}/>
      </div>
    </Popup>
  )
}

CustomPopup.diplayName="CustomPopup";