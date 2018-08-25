# hrSlider

hrSlider is a simple Image slider which is very easy to use.

## Usage
Add the slider.js file.

### Prerequisites
jQuery

### html
```
<div id="hrSlider">
         <ul>
            <li><img src="1.jpg"></li>
            <li><img src="2.jpg"></li>
        </ul>
 </div>
 ```

### js
Write just before the end of the body tag

```
<script>
$("#hrSlider").hrSlider({
          mode:"slide",
          width: 980,
          height: 450,
         duration: 2
});
</script>
```

## Options

1. **mode**: Currently slide mode is available
2. **width**: set width of slider in px, by default 100% 
3. **height**: set height of slider in px, by default 450px
4. **duration**: set duration for slides, by default 2s

## Contribution
Most welcome :)
