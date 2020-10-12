document.addEventListener('DOMContentLoaded',() =>{
  //hier worden een aantal constanten aan gemaakt die klase en id's op halen
  const vakjes = document.querySelectorAll('#raster div')
  const resultaat = document.getElementById('resultaat')
  const spelerBeurt = document.getElementById('spelerBeurt')

  const winsten = [
    [0,1,2,3],[3,4,5,6],[1,2,3,4],[2,3,4,5],[7,8,9,10],[10,11,12,13],[8,9,10,11],[9,10,11,12],
    [14,15,16,17],[17,18,19,20],[15,16,17,18],[16,17,18,19],[21,22,23,24],[24,25,26,27],[22,23,24,25],[23,24,25,26],
    [28,29,30,31],[31,32,33,34],[29,30,31,32],[30,31,32,33],[35,36,37,38],[38,39,40,41],[36,37,38,39],[37,38,39,40],
    [0,7,14,21],[7,14,21,28],[14,21,28,35],[3,10,17,24],[10,17,24,31],[17,24,31,38],[6,13,20,27],
    [1,8,15,22],[8,15,22,29],[15,22,29,36],[4,11,18,25],[11,18,25,32],[18,25,32,39],[13,20,27,34],
    [2,9,16,23],[9,16,23,30],[16,23,30,37],[5,12,19,26],[12,19,26,33],[19,26,33,40],[20,27,34,41],
    [0,8,16,24],[1,9,17,25],[2,10,18,26],[3,11,19,27],[6,12,18,24],[5,11,17,23],[4,10,16,22],[3,9,15,21],
    [7,15,23,31],[8,16,24,32],[9,17,25,33],[10,18,26,34],[13,19,25,31],[12,18,24,30],[11,17,23,29],[10,16,22,28],
    [14,22,30,38],[15,23,31,39],[16,24,32,40],[17,25,33,41],[20,26,32,38],[19,25,31,37],[18,24,30,36],[17,23,29,35]
  ]
  // dezen variabelen onthoud welken speler aan de beurt is
  let huidigeSpeler = 'rood'
  // voor rood en geel een array die bij houd waar muntjes geplaatst zijn
  let rood = []
  let geel = []
  // dezen functie controleert of er iemand 4 op 1 rij heeft
  let  controle = () => {
    for (let y = 0; y < winsten.length; y++) {
      if (rood.includes(winsten[y][0]) & rood.includes(winsten[y][1]) & rood.includes(winsten[y][2]) & rood.includes(winsten[y][3]))
      {
          huidigeSpeler = 'rood'
          confirm(huidigeSpeler + ' heeft gewonnen')
          alert('het spel word gereset')
          location.reload()
      }else if(geel.includes(winsten[y][0]) & geel.includes(winsten[y][1]) & geel.includes(winsten[y][2]) & geel.includes(winsten[y][3])){
          huidigeSpeler = 'geel'
          confirm(huidigeSpeler + ' heeft gewonnen')
          alert('het spel word gereset')
          location.reload()
      }
    }
  }
  //de initielen innerHTML voor spelerbeurt
  spelerBeurt.innerHTML = 'de huidigen speler is: ' + huidigeSpeler
  //for loop die door de element lijst heen loopt
  for(let i = 0; i < vakjes.length; i++)
  //elk div element in de lijst geef ik dezelfde onclick functie
  ( function (index){
    vakjes[i].onclick = function(){
      //hier controleer ik of het vakje onder het geselecteerde vakje wel vol is
      //zo niet else krijt de gebruiker een alert
      if (vakjes[index + 7].classList.contains('vol') && !vakjes[index].classList.contains('vol') ){
        //met dezen if en elseif controleer ik wat ik moet gaan doen
        if (huidigeSpeler === 'rood'){
          //het geselecteerde vakje krijgt twee klassen er bij vol en rood
          vakjes[index].classList.add('vol')
          vakjes[index].classList.add('rood')
          // voeg de index van de geselecteerde index toe aan array rood
          rood.push(index)
          setTimeout(()=> controle(),100)
          //de huidige speler word gewisseld
          huidigeSpeler = 'geel'
          //er word een bericht gegeven op de site dat e andere speler aan de beurt is
          spelerBeurt.innerHTML = 'de huidigen speler is: ' + huidigeSpeler
        }else if (huidigeSpeler === 'geel'){
          //het geselecteerde vakje krijgt twee klassen er bij vol en rood
          vakjes[index].classList.add('vol')
          vakjes[index].classList.add('geel')
          // voeg de index van de geselecteerde index toe aan array geel
          geel.push(index)
          setTimeout(()=> controle(),500)
          //de huidige speler word gewisseld
          huidigeSpeler = 'rood'
          //er word een bericht gegeven op de site dat e andere speler aan de beurt is
          spelerBeurt.innerHTML = 'de huidigen speler is: ' + huidigeSpeler
        }
      }else alert('hier kan  je, je muntje niet plaatsen')
    }
  })(i)
})
