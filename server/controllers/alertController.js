const axios = require("axios");

exports.sendSOS = async (req, res) => {
  const { location } = req.body;

  try {
    const aiRes = await axios.post("http://localhost:8000/analyze", {
      text: "help me"
    });

    res.json({
      success: true,
      location,
      risk: aiRes.data.risk_level
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};