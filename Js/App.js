document.addEventListener('DOMContentLoaded',() =>
{
  //hier worden een aantal constanten aan gemaakt die klase en id's op halen
  const vakjes = document.querySelectorAll('#raster div')
  const resultaat = document.getElementById('resultaat')
  const spelerBeurt = document.getElementById('spelerBeurt')
  // dezen variabelen onthoud welken speler aan de beurt is
  let huidigeSpeler = 'rood'
  //for loop die door de element lijst heen loopt
  for(let i = 0; i < vakjes.length; i++)
  //elk div element in de lijst geef ik dezelfde onclick functie
  ( function (index)
  {
    vakjes[i].onclick = function()
    {
      //hier controleer ik of het vakje onder het geselecteerde vakje wel vol is
      //zo niet else krijt de gebruiker een alert
      if (vakjes[index + 7].classList.contains('vol'))
      {
        //met dezen if en elseif controleer ik wat ik moet gaan doen
        if (huidigeSpeler === 'rood')
        {
          //het geselecteerde vakje krijgt twee klassen er bij vol en rood
          vakjes[index].classList.add('vol')
          vakjes[index].classList.add('rood')
          //de huidige speler word gewisseld
          huidigeSpeler = 'geel'
          //er word een bericht gegeven op de site dat e andere speler aan de beurt is
          spelerBeurt.innerHTML = huidigeSpeler
        }
        else if (huidigeSpeler === 'geel')
        {
          //het geselecteerde vakje krijgt twee klassen er bij vol en rood
          vakjes[index].classList.add('vol')
          vakjes[index].classList.add('geel')
          //de huidige speler word gewisseld
          huidigeSpeler = 'rood'
          //er word een bericht gegeven op de site dat e andere speler aan de beurt is
          spelerBeurt.innerHTML = huidigeSpeler
        }
      }
      else alert('hier kan  je, je muntje niet plaatsen')
    }
  })(i)
})
