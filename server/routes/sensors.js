const express = require('express');
const router = express.Router();
const ParkingSlot = require('../models/ParkingSlot'); // Assuming a ParkingSlot model exists

// Endpoint to update parking slot status from sensor data
router.post('/update-slot', async (req, res) => {
  try {
    const { slotId, status } = req.body; // status: 'occupied' or 'available'

    const slot = await ParkingSlot.findById(slotId);
    if (!slot) {
      return res.status(404).json({ message: 'Parking slot not found' });
    }

    slot.status = status;
    await slot.save();

    res.status(200).json({ message: 'Slot status updated successfully' });
  } catch (error) {
    console.error('Error updating slot status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
