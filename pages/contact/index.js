import React, { useState } from "react";
import Image from 'next/image';
import ContactBG from '../../src/img/Pat.jpg';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '98%',
  height: '700px',
  margin: 'auto'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Contact() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQeY2R8aqTqFnGIEfsgs1xrQsZCgvjK_I"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div>
      <div className="h-[35rem] flex justify-center relative bg-gray-300">
        <Image src={ContactBG} className="block w-screen" objectFit='cover' objectPosition='center' alt="Meta Legends" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-medium text-center cw:text-4xl sm:text-2xl">
          <div>
            Contact US
          </div>
          <div className="text-white">
            Ryan@ezphoto.studio
          </div>
        </div>
      </div>
      <div className="justify-center flex p-6">
        <div className="text-center max-w-md font-medium leading-loose">
          It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
          <div className="pt-6">email@example.com</div>
          <div>(555) 555-5555</div>
          <div className="pt-6">123 Demo Street</div>
          <div>New York, NY 12345</div>
        </div>
      </div>
      <div>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
              // onLoad={onLoad}
              // onUnmount={onUnmount}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : <></>
        }
      </div>
    </div>
  )
}