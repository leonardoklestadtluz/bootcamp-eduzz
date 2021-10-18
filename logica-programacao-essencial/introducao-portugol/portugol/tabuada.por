programa
{
	
	funcao inicio()
	{
		inteiro contador, limite, numero, resultado

		contador = 0
		limite = 10

		escreva("** Bem-vindo(a) ao Tabuadão **\n")
		escreva("============\n\n")

		escreva("Qual tabuada você deseja? ")
		leia(numero)
		escreva("\n")

		faca{
			resultado = numero * contador
			escreva(numero + " X " + contador + " = " + resultado + "\n")
			contador++

		}enquanto(contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 260; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */