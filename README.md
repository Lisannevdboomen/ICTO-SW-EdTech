# ICTO Social Sciences
In dit project delen we de HTML pagina's van onze Canvas cursus https://canvas.uva.nl/courses/8175. En je kunt hier basic uitleg vinden over de HTML opbouw en structuur.



## Samenwerken in Git & Atom
In Github bestanden delen via een ```collaboration``` tussen onze accounts. Canvas pagina's bewerken we met behulp van ```Atom``` (dit is een IDE ofwel codeer editor van ```Github```).  We kunnen in Atom aan pagina's werken en veranderingen pushen + pullen van en naar Github.
We kunnen gebruik maken van ```Teletype``` (package) om in Atom "realtime" samen te werken (het idee van een Google Drive). Hierdoor zijn er overdag geen conflicten met oude/nieuwe versie van code omdat iedereen realtime de laatste wijzigingen ziet. Vergeet niet aan het einde van de dag de veranderingen te pushen naar Git.
#### Toegang tot mappen
###### Eerste keer inloggen in Atom:
1. Account voor collaboration toevoegen aan Github project (Lisanne)
2. In Atom2.0 -> login op Github account en clone het project: ```https://github.com/Lisannevdboomen/ICTO-SW.git```
###### Daarna altijd beginnen met:
1. Klik in Atom links op ```Reopen project``` en selecteer het ICTO-SW project
2. Klik rechts onderin op ```Git```
3. Klik op ```Fetch``` rechts onderin (laatste updates/veranderingen ophalen)
#### Pushen van veranderingen naar Github:
1. ```Save``` file
2. Klik op ```Stage All``` (rechterzijde)
3. Geef een beschrijving van de wijziging onder ```Commit message```
4. Klik op ```Commit to main```
5. Klik op ```Push``` onderin de balk
#### Ophalen van wijzigingen naar Atom:
1. Klik op ```Fetch``` onderin de balk

#### Realtime Samenwerken
1. Klik op het ```antenne icoon``` onderin de balk
2. Klik op ```Share``` en deel de unieke code met een collega (of klik op ```Join``` en vul code in)
<br />



## Basis uitleg van verschillende HTML elementen in Canvas cursus:
- [Grid system](#Grid-system)
- [Anchor links](#Anchor-link)
- [Content box](#Content-box)
- [Menubalk](#Menubalk)


<br /><br /><br />
## Grid system
> Hiermee creëer je een layout en structuur aan de inhoud van je pagina. Wil je bijvoorbeeld een tekstvak over de volle breedte van een pagina plaatsen? Of twee tekstvakken naast elkaar?

##### De volle breedte van een pagina is bij conventie: ```col-md-12 ```
Dus,
- 2 tekstvakken naast elkaar is: ```col-md-6``` & ```col-md-6```
- 3 foto's naast elkaar is: ```col-md-4``` & ```col-md-4``` & ```col-md-4```

##### Volle breedte
```html
<!-- Open een rij -->
<div class="grid-row">

    <!-- Deze rij mag over de volle breedte van de pagina -->
    <div class="col-xs-12 col-md-12">

        <!--  Maak een testvak (content box) -->
        <div class="content-box pad-box-mini border border-trbl border-round" style="background-color: #fafafa; text-align: center;">

            <!-- inhoud -->
            <p>begin content box<p>

                <!-- open de canvas text editor en schrijf hier je tekst -->

            <p>einde content box</p>

        </div>

    </div>

</div>    
```


<br /><br />
## Content box
:abc:
> Een simpele content-box met achtergrond
- ```"content-box"``` voor een vierkante box zonder rand
- ```"content-box pad-box-mini border border-trbl border-round"``` met rand en ronde hoeken
- ```padding``` voor extra witruimte __binnen__ de content box
- ```margin``` voor extra witruimte __buiten__ de content box
- Voeg styling toe zoals een achtergrond #hex color code: ```style="background-color: #fafafa;"```

```html
<!-- voorbeeld 1: -->
<!-- content box zonder opmaak, met padding om tekst simpelweg om een nette plek te krijgen.  -->
<div class="content-box" style="padding: 15px;">
    <!-- inhoud -->
    <p>tekst</p>
</div>

<!-- voorbeeld 2 -->
<!-- content box met achtergrondkleur, border, padding, en margin -->
<div class="content-box pad-box-mini border border-trbl border-round" style="background-color: #fafafa; padding-left: 15px; margin-top: 25px;">
    <!-- inhoud -->
    <p>tekst</p>
</div>
```

> Content boxes naast elkaar plaatsen
- Content boxes zet je naast elkaar door ze binnen dezelfde ```grid-row``` te plaatsen
- De maximale breedte van een pagina is bij conventie: ```col-md-12```
- Voor twee even grote content boxes naast elkaar: ```col-md-6``` & ```col-md-6```

Voorbeeld: content box 3 keer naast elkaar
```html
<!-- Open grid row -->
<div class="grid-row">

    <!-- Kolom 1 -->
    <div class="col-xs-12 col-md-4">

        <!-- M.b.v. een grid-demo-element kun je (eventueel) meerdere elementen onder elkaar plaatsen in deze kolom -->
        <div class="styleguide-section__grid-demo-element">

            <div class="content-box pad-box-mini border border-trbl border-round" style="padding: 15px; height: 410px; background-color: #f6f7f8;">
                <!-- Inhoud -->
                <p>tekst</p>
            </div>

        </div>
    </div>

    <!-- Kolom 2 -->
    <div class="col-xs-12 col-md-4">
        <div class="styleguide-section__grid-demo-element">
            <div class="content-box pad-box-mini border border-trbl border-round" style="padding: 15px; height: 410px; background-color: #f6f7f8;">
                <!-- Inhoud -->
                <p>tekst</p>
            </div>
        </div>
    </div>

    <!-- Kolom 3 -->
    <div class="col-xs-12 col-md-4">
        <div class="styleguide-section__grid-demo-element">
            <div class="content-box pad-box-mini border border-trbl border-round" style="padding: 15px; height: 410px; background-color: #f6f7f8;">
                <!-- Inhoud -->
                <p>tekst</p>
            </div>
        </div>
    </div>

<!-- Sluit grid row -->
</div>        
```


<br /><br />
## Menubalk
:house:
> Bovenaan iedere pagina een header met buttons
- Content box over de volle breedte van de pagina ```cold-md-12```
- Met grid-demo-element ```<div> plaats je alle buttons naast elkaar </div>```
- Er zit een canvas icon in iedere button, bijv ```<i class="icon-home"></i>```
- Ik begin de code met ```grid row``` omdat ik hierna vaak weer met een nieuwe grid-row begin op pagina's
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

<br /><br />
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
