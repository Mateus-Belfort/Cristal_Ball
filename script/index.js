function getAnswers() {

  time = new Date()
  randominteger = time.getSeconds()

  if (document.input1.textfield.value == "") {
    alert("Seu bobo! Você não perguntou nada para a Bola de Cristal!!")
    return
  }

  if (randominteger <= 3) answer = "Você realmente pensou assim? Hahaha 😂, estou rindo agora de suas chances lamentáveis."
  if ((randominteger >= 4) && (randominteger <= 6)) answer = "Sim, tem 65% de chance disso acontecer."
  if ((randominteger >= 7) && (randominteger <= 9)) answer = "Ok vamos lá! De jeito nenhum!"
  if ((randominteger >= 10) && (randominteger <= 12)) answer = "Tão certo quanto eu ser feito de vidro, é provável que isso aconteça."
  if ((randominteger >= 13) && (randominteger <= 15)) answer = "Por que você está perguntando UMA BOLA DE CRISTAL? Você realmente acredita nas respostas?"
  if ((randominteger >= 16) && (randominteger <= 18)) answer = "Me dê um tempo, me dê um tempo, me tire um pedaço desse NÃO!"
  if ((randominteger >= 19) && (randominteger <= 21)) answer = "Boas chances estão no horizonte."
  if ((randominteger >= 22) && (randominteger <= 24)) answer = "Pergunte-me novamente, estou inquieto e sobrecarregado."
  if ((randominteger >= 25) && (randominteger <= 27)) answer = "Você sabe como funciona a Bola de Cristal? Aí está sua resposta."
  if ((randominteger >= 28) && (randominteger <= 30)) answer = "Como o sol está quente, sua resposta é SIM."
  if ((randominteger >= 31) && (randominteger <= 33)) answer = "Você ficou bêbado no fim de semana passado? Aí está sua resposta."
  if ((randominteger >= 34) && (randominteger <= 36)) answer = "Esqueça isso"
  if ((randominteger >= 37) && (randominteger <= 39)) answer = "Sim, pode acontecer. 80% de chance."
  if ((randominteger >= 40) && (randominteger <= 42)) answer = "Cazuza tem uma chance melhor de ressuscitar dos mortos."
  if ((randominteger >= 43) && (randominteger <= 45)) answer = "Se você realmente pensa assim, então será."
  if ((randominteger >= 46) && (randominteger <= 48)) answer = "Quem disse que respostas ambíguas são ruins? Eu não, então SIM!"
  if ((randominteger >= 49) && (randominteger <= 51)) answer = "Você acha que vou responder isso depois de um dia de trabalho duro? Pergunte novamente mais tarde."
  if ((randominteger >= 52) && (randominteger <= 54)) answer = "Se você tiver um animal de estimação, sim. Caso contrário, não."
  if ((randominteger >= 55) && (randominteger <= 57)) answer = "O sol nascerá no leste e se porá no oeste. Obrigado Capitão Óbvio. SIM!"
  if ((randominteger >= 58) && (randominteger <= 60)) answer = "Estou rindo muito 😂, muito mesmo. É melhor você perguntar novamente."

  var newWindow = window.open("", "Results", "width=350,height=350")
  newWindow.document.write("<html><body bgcolor='#000000' text='#FFFFCC' link='#00FFFF' alink='#000066' vlink='#6666FF'>")
  newWindow.document.write("<P align='center'>Sua pergunta:</P><P></P>")
  newWindow.document.write("<P align='center'>" + document.input1.textfield.value + "</P>")
  newWindow.document.write("<P></P><P></P><P></P><P align='center'>A Grande Bola de Cristal Respondeu:</P><P></P>")
  newWindow.document.write("")
  newWindow.document.write("<P align='center'>" + answer + "</P>")
  newWindow.document.write("<P></P><P></P><P align='center'><A HREF='javascript:window.close()'>Fechar</A></P>")
}
