constante caixaPrincipal = documento.seletor de consulta(".caixa-principal");
constante caixaPerguntas = documento.seletor de consulta(".caixa-perguntas");
constante caixaAlternativas = documento.seletor de consulta(".caixa-alternativas");
constante caixaResultado = documento.seletor de consulta(".caixa-resultado");
constante textoResultado = documento.seletor de consulta(".texto-resultado");

constante perguntas = [
    {
        enunciado:"Assim que saiu da escola você se depara com uma tecnologia nova, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas:[
            {
                texto:"Isso é mentira!",
                afirmação:“No início fiquei com medo do que essa tecnologia pode fazer.”
            },
            {
                texto:"Isso é maravilhoso!",
                afirmação:"Quer saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado:"Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas:[
            {
                texto:"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendimento.",
                afirmação:"Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto:"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmação:"Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado:"Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantada um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você sua posição?",
        alternativas:[
            {
                texto:"Defenda a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmação:"Vem impulsionar a inovação na área de IA e lutar para abrir novos caminhos profissionais com IA."
            },
            {
                texto:“Eu me preocupo com as pessoas que perderão seus empregos para máquinas e defenderão a importância de proteger os trabalhadores.”,
                afirmação:"Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado:"Ao final da discussão, você precisau criar uma imagem no computador que represente o que pensa sobre IA. E agora?",
        alternativas:[
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmação:"Notou também que muitas pessoas ainda não sabem utilizar as ferramentas tradicionais e decidiram compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmação:"Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como usar também!"
            }
        ]
    },
    {
        enunciado:"Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O o que você faz?,
        alternativas:[
            {
                texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema usar o texto inteiro.",
                afirmação:"Infelizmente passou a usar a IA para fazer todas as suas tarefas e agora se sente dependente da IA ​​para tudo."
            },
            {
                texto:"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, para isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmação:"Percebeu que toda IA ​​reproduz orientações baseadas na empresa que programou e muito do que o chat escreveua não refletia o que planejou e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final."
            }
        ]
    },
];


deixar atual = 0;
deixar perguntaAtual;
deixar históriaFinal = "";

função mostraPergunta() {
    se (atual >= perguntas.comprimento) {
        mostraResultado();
        retornar;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textoConteúdo = perguntaAtual.enunciado;
    caixaAlternativas.textoConteúdo = "";
    mostraAlternativas();
}

função mostraAlternativas(){
    para(constante alternativa de perguntaAtual.alternativas) {
        constante botaoAlternativas = documento.criarElemento("botão");
        botaoAlternativas.textoConteúdo = alternativa.texto;
        botaoAlternativas.adicionarEventListener("clique", () => respostaSelecionada(alternativa));
        caixaAlternativas.anexar criança(botaoAlternativas);
    }
}

função respostaSelecionada(opçãoSelecionada) {
    constante afirmações = opçãoSelecionada.afirmação;
    históriaFinal += afirmações + " ";
    atual++;
    mostraPergunta();
}

função mostraResultado() {
    caixaPerguntas.textoConteúdo = "Em 2049...";
    textoResultado.textoConteúdo = históriaFinal;
    caixaAlternativas.textoConteúdo = "";
}

mostraPergunta();