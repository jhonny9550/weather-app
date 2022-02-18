export const getCurrentLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      geolocation => resolve(geolocation),
      error => reject(error),
      { enableHighAccuracy: true },
    );
  });
}