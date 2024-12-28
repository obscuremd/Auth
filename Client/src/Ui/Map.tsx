import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
// import { MapPin } from "iconoir-react"
import React, { useEffect, useState } from "react"
import { 
    // Button, 
    Text } from '../Exports/Exports'

interface MapProps {
    destination: { lat: number; lng: number }
    origin: { lat: number; lng: number }
}

const Map: React.FC<MapProps> = ({ destination, origin }) => {
  
  // Location functions
//   const [map, setMap] = useState<google.maps.Map>()
  const [directionResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null)
//   const [distance, setDistance] = useState('')
//   const [duration, setDuration] = useState('')
  
  const calculateRoute = async () => {
    if (!origin || !destination) {
      alert('Please enter both origin and destination');
      return;
    }

    const directionService = new google.maps.DirectionsService()
    
    const results = await directionService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    })

    setDirectionsResponse(results)
    // setDistance(results.routes[0].legs[0].distance?.text || '')
    // setDuration(results.routes[0].legs[0].duration?.text || '')
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  useEffect(() => {
    if (isLoaded) {
      calculateRoute()
    }
  }, [isLoaded, origin, destination])

  if (!isLoaded) {
    return <Text text='LOADING' />
  }

  return (
    <div className='w-full rounded-xl'>
      {/* <div className="flex flex-col gap-5 pl-[3%] pr-[30%]">
        <div className="flex items-center justify-between">
          <p>ETA: {duration}</p>
          <p>Distance: {distance}</p>
          <Button size='md' color='text' icon_left={<MapPin />} onclick={() => map?.panTo(origin)} />
        </div>
      </div> */}
      <GoogleMap 
        center={origin} 
        zoom={15} 
        mapContainerStyle={{ width: "100%", height: "300px", borderRadius:'16px' }} 
        // onLoad={map => setMap(map)}
        >
        <Marker position={origin} />
        {directionResponse && <DirectionsRenderer directions={directionResponse} />}
      </GoogleMap>
    </div>
  )
}

export default Map
