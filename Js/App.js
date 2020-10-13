document.addEventListener('DOMContentLoaded',() =>{
  const vakjes = document.querySelectorAll('#raster div') //haalt de div lijst uit raster op
  const spelerBeurt = document.getElementById('spelerBeurt')// haalt span tag op
  const winsten = [
    [0,1,2,3],[3,4,5,6],[1,2,3,4],[2,3,4,5],[7,8,9,10],[10,11,12,13],[8,9,10,11],[9,10,11,12],[14,15,16,17],[17,18,19,20],[15,16,17,18],[16,17,18,19],[21,22,23,24],[24,25,26,27],[22,23,24,25],[23,24,25,26],[28,29,30,31],[31,32,33,34],
    [29,30,31,32],[30,31,32,33],[35,36,37,38],[38,39,40,41],[36,37,38,39],[37,38,39,40],[0,7,14,21],[7,14,21,28],[14,21,28,35],[3,10,17,24],[10,17,24,31],[17,24,31,38],[6,13,20,27],[1,8,15,22],[8,15,22,29],[15,22,29,36],[4,11,18,25],
    [11,18,25,32],[18,25,32,39],[13,20,27,34],[2,9,16,23],[9,16,23,30],[16,23,30,37],[5,12,19,26],[12,19,26,33],[19,26,33,40],[20,27,34,41],[0,8,16,24],[1,9,17,25],[2,10,18,26],[3,11,19,27],[6,12,18,24],[5,11,17,23],
    [4,10,16,22],[3,9,15,21],[7,15,23,31],[8,16,24,32],[9,17,25,33],[10,18,26,34],[13,19,25,31],[12,18,24,30],[11,17,23,29],[10,16,22,28],[14,22,30,38],[15,23,31,39],[16,24,32,40],[17,25,33,41],[20,26,32,38],[19,25,31,37],[18,24,30,36],[17,23,29,35]]
  let huidigeSpeler = 'rood' //variabel om opte slaan wie aan de beurt is
  let rood = [] // array om opteslaan waar de rooden muntjes staan
  let geel = []// array om opteslaan waar de gelen muntjes staan
  let  controle = () => { for (let y = 0; y < winsten.length; y++) {
      if (rood.includes(winsten[y][0]) & rood.includes(winsten[y][1]) & rood.includes(winsten[y][2]) & rood.includes(winsten[y][3])){
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
  for(let i = 0; i < vakjes.length; i++)  //for loop die door de div raster element lijst heen loopt
  ( function (index){ vakjes[i].onclick = function(){//elk div element in de lijst geef ik dezelfde onclick functie
      if (vakjes[index + 7].classList.contains('vol') && !vakjes[index].classList.contains('vol') ){      //hier controleer ik of het vakje onder het geselecteerde vakje wel vol is
        if (huidigeSpeler === 'rood'){    // met dezen if elseif controleer ik welken speler aande beurt is
          vakjes[index].classList.add('vol','rood')    //het geselecteerde vakje krijgt twee klassen er bij vol en rood
          rood.push(index)            // voeg de index van de geselecteerde index toe aan array rood
          setTimeout(()=> controle(),50)   // dezen functie controleert of er iemand 4 op 1 rij heeft
          huidigeSpeler = 'geel'          //de huidige speler word gewisseld
          spelerBeurt.innerHTML = huidigeSpeler
        }else if (huidigeSpeler === 'geel'){
          vakjes[index].classList.add('vol','geel')
          geel.push(index)
          setTimeout(()=> controle(),500)
          huidigeSpeler = 'rood'
          spelerBeurt.innerHTML =  huidigeSpeler
        }
      }else alert('hier kan  je, je muntje niet plaatsen')
    }
  })(i)
})
