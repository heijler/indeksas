# Indeksas
---
The list of links is generated based on what is in the indeksas.json file. 

The file follows this structure:
```
{
    "groups": [
        {
            "Uni#ffea00;": [
                {
                    "name": "LNU",
                    "url": "https://www.lnu.se"
                },
                {
                    "name": "Coursepress SUPERLOOOOONG TITLE",
                    "url": "https://coursepress.slack.com"
                },
                {
                    "name": "Github",
                    "url": "https://www.github.com"
                },
                {
                    "name": "Email",
                    "url": "https://www.gmail.com"
                }
            ]
        }
    ]
}
```

Each group is an object with a named array. The name of the array decides the name that will be displayed as link/group header. If you want the header to be a certain color, follow it with a hex color:

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
