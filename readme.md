# Indeksas
The list of links that is displayed as html is generated based on what is in the indeksas.json file.

The file follows this structure:
```
{
    "groups": [
        {
            "Uni#ffea00": [
                {
                    "name": "LNU",
                    "url": "https://www.lnu.se"
                },
                {
                    "name": "Coursepress SUPERLOOOOONG TITLE",
                    "url": "https://coursepress.slack.com"
                }
            ]
        },
        {
            "My category": [
                {
                    "name": "My website",
                    "url": "http://www.example.com"
                }
            ]
        }
    ]
}
```

Each group is an object with a named array. The name of the array decides the name that will be displayed as link/group header. Each group needs a name, and objects that in turn contains name and url for the link.

If you want the header to be a certain color, follow it with a hex color:

```
"My Group Name#FF0000": [...]
```

each item you add consists of object with a name and a url:

```
{
    "name": "This is my website name",
    "url": "https://www.website.com/path/to/resource"
}
```

The favicon is generated with google favicon API.