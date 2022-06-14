//Se o tratamento da entrada dos dados do arquivo é feito em outros lugares do sistema, podemos isolar essa responsabilidade em uma classe que pode nos ajudar sempre com essa tarefa, um helper
class ArquivoHelper {

    static cria(informacao) {
        return new Arquivo(...informacao.toUpperCase().split('/'));
    }
}