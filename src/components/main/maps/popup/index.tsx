// App imports
import { Description } from './description';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ tilesProperties }: any) => {
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