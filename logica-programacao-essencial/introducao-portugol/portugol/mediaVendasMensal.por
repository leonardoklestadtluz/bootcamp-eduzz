programa
{
	
	funcao inicio()
	{
		cadeia nomeVendedor
		real janeiro, fevereiro, marco, abril, mediaVenda, mediaBonificada, salario, salarioFinal

		escreva("Qual o nome do vendedor? ")
		leia(nomeVendedor)

		escreva("Informe seu salário R$ ")
		leia(salario)

		escreva("-------------\n\n")

		escreva("Informe a venda de janeiro R$ ")
		leia(janeiro)
		escreva("Informe a venda de fevereiro R$ ")
		leia(fevereiro)
		escreva("Informe a venda de marco R$ ")
		leia(marco)
		escreva("Informe a venda de abril R$ ")
		leia(abril)

		mediaVenda = (janeiro + fevereiro + marco + abril) / 4

		escreva("-------------\n\n")

		escreva("Média de venda mensal R$ " + mediaVenda + "\n")

		se(mediaVenda >= 5000) 
		{
			escreva("Parabéns " + nomeVendedor + "! Você receberá um bonus de 10%.\n")
			
			mediaBonificada = mediaVenda * 0.10
			salarioFinal = mediaBonificada + salario
		}
		senao 
		{
			escreva(nomeVendedor + "! Você receberá um bonus de 3%.\n")

			mediaBonificada = mediaVenda * 0.03
			salarioFinal = mediaBonificada + salario
		}

		escreva("-------------\n\n")
		
		escreva("Salário informado R$ " + salario + "\n")
		escreva("Bonus a receber R$ " + mediaBonificada + "\n")
		escreva("Seu salário bruto será R$ " + salarioFinal)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1224; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */