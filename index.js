

        function classificar() {
            // Obtém os valores do input
            const nome = document.getElementById("nomeInput").value;
            const xp = parseInt(document.getElementById("xpInput").value);
            let result = document.getElementById("resultado")
            let classificacao;

            // Classifica com base na quantidade de XP
            if (xp <= 1000) {
                classificacao = "Ferro";
            } else if (xp >=1001 &&xp<=2000) {
                classificacao = "Bronze";
            } else if (xp >=2001 && xp<=5000) {
                classificacao = "Prata";
            } else if (xp >=5001 && xp<=7000) {
                classificacao = "ouro";
            }else if (xp >=7001&&  xp<=8000) {
                    classificacao = "platina";
            }else if (xp >=8001 && xp<=9000) {
                classificacao = "ascendente";}
            else if (xp >=9001 && xp<=10000) {
                    classificacao = "Imortal";}
            else if (xp >10001) {
                        classificacao = "Radiante";

            }         else{
                classificacao =  "xp inválido"
            }   document.getElementById("resultado").innerText = `${nome}, sua classificação é: ${classificacao}`

        }