# WSH-debuging-logger
WSH (Windows Script Host) JScript debuging function to display structural objects.

## Usage

Demonstration.wsh - plaint text file with "wsh" extension on Windows XP+
```html
<job>
	<script language="JScript" src="./log.js">
	<script language="JScript">
	
		// demontration
		log({
			a: 5,
			b: [0, 1, 2],
			c: function () {},
			d: new Date(),
			e: new RegExp('[a-z]', 'gi'),
			f: null,
			g: undefined,
			h: Number.NaN
		});
		
	</script>
</job>
```

![Printscreen](https://raw.githubusercontent.com/tomFlidr/WSH-debuging-logger/master/printscreen.jpg)
