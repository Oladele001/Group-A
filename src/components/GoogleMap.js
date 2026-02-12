export default function GoogleMap({ address, height = "400px" }) {
  // Construct the Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}&zoom=15&maptype=roadmap`;
  
  // For demo purposes, we'll use a placeholder URL that shows Apomu, Osun State
  const demoMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d4.123456789!3d7.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMjMuMiJTIDQwrDA3JzI0LjQiIQ!5e0!3m2!1sen!2sng!4v1234567890";

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={demoMapUrl}
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
