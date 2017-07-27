define({ "api": [
  {
    "type": "get",
    "url": "/sales",
    "title": "List all sales",
    "group": "Sales",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sales",
            "description": "<p>Sale's list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.price",
            "description": "<p>Sale's price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.city",
            "description": "<p>Sale's city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.state",
            "description": "<p>Sale's state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.latitude",
            "description": "<p>Sale's lat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.longitude",
            "description": "<p>Sales's lng</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"price\": \"1500\",\n  \"city\": \"Leeds\",\n  \"state\": \"Yorkshire\"\n  \"latitude\": \"3.7778162\",\n  \"longitude\": \"2-1.574333\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/salesRoutes.js",
    "groupTitle": "Sales",
    "name": "GetSales"
  }
] });
