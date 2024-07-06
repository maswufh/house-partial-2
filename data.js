var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.564048247474787,
          "pitch": 0.42628613588791353,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.267429630271357,
          "pitch": 0.5920065860730528,
          "rotation": 7.853981633974483,
          "target": "1-connecting-space"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6481919407711842,
          "pitch": -0.24704773731358287,
          "title": "TV is not allowed",
          "text": "Cannot be used from 10am to 10pm"
        }
      ]
    },
    {
      "id": "1-connecting-space",
      "name": "Connecting Space",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.7625033690468443,
        "pitch": 0.09012765809478651,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.70898790908298,
          "pitch": 0.6634966834021192,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 2.219878491937914,
          "pitch": 0.5028357492358477,
          "rotation": 1.5707963267948966,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5337492985342784,
        "pitch": 0.1622416731358136,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6018266798270275,
          "pitch": 0.5617974553413685,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.3415770676577985,
          "pitch": 0.31369083276058873,
          "rotation": 4.71238898038469,
          "target": "1-connecting-space"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7671117049329705,
          "pitch": 0.11675079908161834,
          "title": "No cooking allowed",
          "text": "From 10am to 2pm"
        }
      ]
    }
  ],
  "name": "My house partial 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
