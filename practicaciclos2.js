let casas = [
    {
      "color": "cafe",
      "tipo": "edificio",
      "registroDia": new Date('2021-07-13'),
      "capacidad": 150
    },
    {
      "color": "negro",
      "tipo": "apartamento",
      "registroDia": new Date('2019-03-23'),
      "capacidad": 7
    }
   

]
let conteo = casas.length

for (let i = 0; i < conteo; i++) {
    document.write(casas[i].tipo +'<br>')
 }







 let motos = [
  {
    "color": "verde",
    "tipo": "enduro",
    "registroDia": new Date('2021-07-13'),
    "capacidad": 2
  },
  {
    "color": "rojo",
    "tipo": "deportivo",
    "registroDia": new Date('2019-03-23'),
    "capacidad": 2
  }
 

]
let conteo = casas.length

for (let i = 0; i < conteo; i++) {
  document.write(motos[i].tipo +'<br>')
}







