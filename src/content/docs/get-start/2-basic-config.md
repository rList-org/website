---
title: Basic Configure
---

Create `config.json` somewhere in your server.

```json
{
  "site_profile": {
    "site_name": "A New rList Site"
  },
  "drives": [
    {
      "driver": "static",
      "config": {
        "name": "root",
        "size": 576,
        "last_modified": "2024-04-21T11:00:00Z",
        "subdirectories": [],
        "files": [
          {
            "name": "rlist.svg",
            "size": 576,
            "last_modified": "2024-04-21T11:00:00Z",
            "links": [
              "https://github.com/rList-org/website/raw/master/public/favicon.svg"
            ]
          }
        ]
      }
    }
  ]
}
```

Refer to the [Config Structure](/get-start/3-config-struct/) for more information.

## Run

Then, run rList with the config file.

```bash
rlist-cli
```

If you are using `systemctl` as daemon manager, you should set `WorkingDirectory` to the directory where `config.json` is located.

```ini
[Unit]
Description=rList
After=network.target
ExectStart=/usr/local/bin/rlist-cli
WorkingDirectory=/path/to/config-json/dir

[Install]
WantedBy=multi-user.target
```


