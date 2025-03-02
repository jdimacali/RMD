"use client";

export function Map() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7974765840143!2d-118.2066899!3d34.1276799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1f3a0e4b6b7%3A0x1f0e0f3b0e3b0e3b!2s5019%20Lockhaven%20Ave%2C%20Los%20Angeles%2C%20CA%2090041!5e0!3m2!1sen!2sus!4v1629788000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
