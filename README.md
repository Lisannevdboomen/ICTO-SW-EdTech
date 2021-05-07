# ICTO Social Sciences
In dit project delen we de HTML pagina's van onze Canvas cursus https://canvas.uva.nl/courses/8175. En je kunt hier basic uitleg vinden over de HTML opbouw en structuur.

## Git & Atom
In Github delen we de bestanden via een ```collaboration``` tussen onze accounts. Canvas pagina's bewerken we met behulp van ```Atom```. Atom is een IDE (codeer editor) van ```Github```.  We kunnen in Atom aan pagina's werken en veranderingen pushen+pullen van en naar Github.
Wij maken gebruik van ```Teletype``` (package) om in Atom "realtime" samen te werken (het idee van een Google Drive). Hierdoor zijn er overdag geen conflicten met oude/nieuwe versie van code omdat iedereen realtime de laatste wijzigingen ziet. Vergeet niet aan het einde van de dag de veranderingen te pushen naar Git.
#### Toegang tot mappen
Eerste keer:
1. Account voor collaboration toevoegen aan Github project
2. In Atom -> login op het Github account en open het project ```https://github.com/Lisannevdboomen/ICTO-SW.git```
Daarna:
1. Klik in Atom links op ```Reopen project``` en selecteer het ICTO-SW project
2. Klik rechts onderin op ```Git```
3. Klik op ```Fetch``` recht onderin de balk
#### Pushen van veranderingen naar Github:
1. ```Save``` file
2. Klik op ```Stage All``` (rechterzijde)
3. Geef een beschrijving van de wijziging onder ```Commit message```
4. Klik op ```Commit to main```
5. Klik op ```Push``` onderin de balk
#### Ophalen van wijzigingen naar Atom:
1. Klik op ```Fetch``` rechts onderin de balk

#### Realtime Samenwerken
1. Klik op het ```antenne icoon``` rechts onderin de balk
2. Klik op ```Share``` en deel de unieke code met collega (of klik op ```Join``` en vul code in)
<br />

## Basis uitleg van verschillende HTML elementen in Canvas cursus:
- [Anchor links](#Anchor-link)
- [Content box](#Content-box)
- [Menu balk](#Menu-balk)


<br /><br /><br />

## Anchor link
:anchor:
> Klik op een link en spring naar een andere plek in de pagina

##### Plain text
```html
<!-- Link -->
<a href="#stap1">Inloggen in TestVision</a>

<!-- Destination -->
<p>
    <a id="stap1"></a>
</p>
```

##### Button
```html
<!-- Link -->
<p>
    <a class="btn Button" style="margin: 5px;" href="#topmenu">
        <span> Go back to menu </span>
    </a>
</p>

<!-- Destination -->
<p>
    <a id="topmenu"></a>
</p>
```

<br /><br />
## Content box
:abc:
> Een simpele content-box met achtergrond
- ```"content-box"``` voor een vierkante box zonder rand
- ```"content-box pad-box-mini border border-trbl border-round"``` voor een ronde afwerking met rand
- ```padding``` voor extra witruimte __binnen__ de content box
- ```margin``` voor extra witruimte __buiten__ de content box

```html
<!-- voorbeeld 1 -->
<div class="content-box" style="padding: 15px; margin-top: 10px; margin-bottom: 20px;">
    <!-- inhoud -->
</div>

<!-- voorbeeld 2 -->
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

        <!-- M.b.v. een grid-demo-element kun je meerdere elementen onder elkaar plaatsen in de kolom -->
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

<br /><br />
## Menu balk
:house:
> Bovenaan iedere pagina een header box met buttons
- Content box over de volle breedte van de pagina = ```cold-md-12```
- In grid-demo-element ```<div> alle buttons naast elkaar </div>```
- Canvas icon in iedere button: ```<i class="icon-home"></i>```
- Ik begin de code met ```grid row``` omdat je hierna weer een nieuwe grid-row kunt maken
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
