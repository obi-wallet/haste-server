{
  "host": "0.0.0.0",
  "port": 7777,
  "keyLength": 8,
  "maxLength": 400000,
  "staticMaxAge": 86400,
  "recompressStaticAssets": true,
  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],
  "keyGenerator": {
    "type": "random",
    "keyspace": "0123456789"
  },
  "rateLimits": {
    "categories": {
      "twilio": {
        "totalRequests": 500000,
        "every": 60
      },
      "blacklist": {
        "totalRequests": 0,
        "every": 0
      },
      "normal": {
        "totalRequests": 60,
        "every": 60
      }
    }
  },
  "storage": {
    "type": "file"
  },
  "documents": {
    "about": "./about.md"
  }
}
