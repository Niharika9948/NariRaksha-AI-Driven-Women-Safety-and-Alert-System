import { sendSOS } from "../services/api";

function SOSButton() {

  const handleSOS = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const res = await sendSOS({
        location: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });

      alert("SOS Sent! Risk: " + res.data.risk);
    });
  };

  return (
    <button onClick={handleSOS} style={{ background: "red", color: "white" }}>
      🚨 SOS
    </button>
  );
}

export default SOSButton;