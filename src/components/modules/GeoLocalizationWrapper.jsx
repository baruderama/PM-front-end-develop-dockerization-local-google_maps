import React, { lazy, Suspense } from 'react';

// import { GeoLocalization } from './GeoLocalization';
const LazyGeoLocalization = lazy(() => import('./GeoLocalization'));

function GeoLocalizationWrapper() {
  return (
    <>
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyGeoLocalization />
      {/* <GeoLocalization /> */}
    </Suspense>
    </>
  );
}

export {GeoLocalizationWrapper};
