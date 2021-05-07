# Ed-Tech beschrijving
Onderstaand een basis uitleg van de verschillende HTML elementen in onze Canvas cursus
<br /><br /><br />

## Anchor link :anchor:
> Klik op een link en spring naar een andere plek in de pagina

### **_Plain text_**

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
### **_Button_**

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

<br /><br />
## Menu balk :house:
> Bovenaan iedere pagina een content box met buttons
- Content box over de volle breedte van de pagina = ```cold-md-12```
- In grid-demo-element ```<div> alle buttons naast elkaar in een grid-row </div>```
- Canvas icon in iedere button: ```<i class="icon-home"></i>```
```html
<div class="grid-row">
    <div class="col-xs-12 col-md-12">
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
<br /><br />
## Content box :abc:
> Een simpele content-box met achtergrond
- ```"content-box"``` voor een vierkante box zonder rand
- ```"content-box pad-box-mini border border-trbl border-round"``` voor een ronde afwerking met rand
- Gebruik ```margin``` voor extra witruimte __buiten__ de content box en ```padding``` voor extra witruimte __binnen__ de content box
```html
<div class="content-box" style="padding: 15px; margin-top: 10px; margin-bottom: 20px;">
    <!-- inhoud -->
</div>

<div class="content-box pad-box-mini border border-trbl border-round" style="background-color: #fafafa;">
    <!-- inhoud -->
</div>
```

> Content boxes naast elkaar plaatsen
- De maximale breedte van een pagina is bij conventie: ```cold-md-12```
- Voor twee even grote content boxes naast elkaar: ```cold-md-6``` & ```cold-md-6```
- Content boxes naast elkaar plaats je binnen dezelfde ```grid-row```
```html
<!-- Voorbeeld: content box 3 keer naast elkaar -->
<div class="grid-row">

    <!-- Kolom 1 -->
    <div class="col-xs-12 col-md-4">

        <!-- M.b.v. een grid-demo-element kun je meerdere elementen onder elkaar plaatsen in de eerste kolom -->
        <div class="styleguide-section__grid-demo-element">

            <div class="content-box pad-box-mini border border-trbl border-round" style="padding: 15px; height: 410px; background-color: #f6f7f8;">
                <!-- Box 1 -->
            </div>

        </div>
    </div>

    <!-- Kolom 2 -->
    <div class="col-xs-12 col-md-4">
        <div class="styleguide-section__grid-demo-element">
            <div class="content-box pad-box-mini border border-trbl border-round" style="padding: 15px; height: 410px; background-color: #f6f7f8;">
                <!-- Box 2 -->
            </div>
        </div>
    </div>

    <!-- Kolom 3 -->
    <div class="col-xs-12 col-md-4">
        <div class="styleguide-section__grid-demo-element">
            <div class="content-box pad-box-mini border border-trbl border-round" style="padding: 15px; height: 410px; background-color: #f6f7f8;">
                <!-- Box 3 -->
            </div>
        </div>
    </div>

</div>        
```
