var APP_DATA = {
  "scenes": [
    {
      "id": "0-current-coffered-ceiling",
      "name": "Current Coffered Ceiling",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5270451611356677,
        "pitch": 0.103077744344791,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.5272201674552122,
          "pitch": 0.524987500002549,
          "rotation": 0,
          "target": "1-proposed-coffered-ceiling"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-proposed-coffered-ceiling",
      "name": "Proposed Coffered Ceiling",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5209131673033376,
        "pitch": 0.09520066271750949,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.5279070951823943,
          "pitch": 0.5186912095974563,
          "rotation": 0,
          "target": "0-current-coffered-ceiling"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "32DV Coffered Ceiling",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
