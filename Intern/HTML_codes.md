# HTML code in onze cursus


# Anchor link :anchor:
> Klik op een link & spring naar een andere plek in de pagina

### Plain text anchor link

##### Bron
```html
<a href="#stap1">Inloggen in TestVision</a>
```
##### Destination/anchor
```html
<p>
    <a id="stap1"></a>
</p>
```
### Button anchor link

##### Bron
```html
<p>
    <a class="btn Button" style="margin: 5px;" href="#topmenu">
        <span> Go back to menu </span>
    </a>
</p>
```
##### Destination/anchor
```html
<p>
    <a id="topmenu"></a>
</p>
```


# Menu balk :hash:
> Boven aan iedere pagina
- Content box over de volle breedte van de pagina: cold-md-20
- Grid-demo-element <div> alle buttons naast elkaar in een grid-row </div>
- Canvas icon in iedere button: <i class="icon-home"></i>
```html
<div class="grid-row">
    <div class="col-xs-12 col-md-20">
        <div class="styleguide-section__grid-demo-element">
            <div class="content-box pad-box-mini border border-trbl border-round" style="background-color: #fafafa; text-align: center;">
                <a class="btn Button" style="margin: 5px;" href="https://canvas.uva.nl/courses/8175"><i class="icon-home"></i>
                    <span>&nbsp;Home</span>
                </a>
                <a class="btn Button" style="margin: 5px;" href="https://canvas.uva.nl/courses/8175/pages/a-z" data-api-endpoint="https://canvas.uva.nl/api/v1/courses/8175/pages/a-z" data-api-returntype="Page"><i class="icon-copy-course"></i>
                    <span>&nbsp;View all topics (A-Z)</span>
                </a>
                <a class="btn Button" style="margin: 5px;" href="https://canvas.uva.nl/enroll/N3HMY8" data-api-returntype="Page">&nbsp;<i class="icon-discussion-new">&nbsp;</i>Enroll in this course</a>
                <a class="btn Button" style="margin: 5px;" href="https://canvas.uva.nl/courses/8175/pages/contact" data-api-returntype="Page" data-api-endpoint="https://canvas.uva.nl/api/v1/courses/8175/pages/contact"><i class="icon-group"></i>
                    <span>&nbsp;Contact</span>
                </a>
                <a class="btn Button" style="margin: 5px;" href="https://uvasocialsciences.eu.qualtrics.com/jfe/form/SV_6LN3bIFUlzyJ95k" target="_blank" rel="noopener" data-api-returntype="Page"><i class="icon-compose"></i>
                    <span>&nbsp;</span>Send us your feedback
                </a>
            </div>
        </div>
    </div>
</div>
```
