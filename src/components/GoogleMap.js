export default function GoogleMap({ height = "400px" }) {
  // Simple working Google Maps embed for Apomu, Osun State
  const mapUrl = "https://maps.google.com/maps?q=Awala+Road,+Apomu,+Osun+State,+Nigeria&z=15&output=embed";
  
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map showing hospital location"
        className="rounded-lg"
      />
    </div>
  );
}
