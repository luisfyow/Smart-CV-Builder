let fotoBase64 = "";

const dadosIA = {
    "desenvolvedor": {
        sobre: "Profissional da área de tecnologia com foco em desenvolvimento de soluções digitais, lógica de programação e criação de sistemas funcionais.",
        habilidades: "HTML, CSS, JavaScript, lógica de programação, Git, resolução de problemas e desenvolvimento web."
    },

    "programador": {
        sobre: "Programador com interesse em desenvolvimento de software, algoritmos, lógica e criação de soluções eficientes por meio da tecnologia.",
        habilidades: "Lógica de programação, algoritmos, linguagem C, JavaScript, organização de código e resolução de problemas."
    },

    "ads": {
        sobre: "Estudante de Análise e Desenvolvimento de Sistemas, com interesse em programação, desenvolvimento web e criação de soluções digitais.",
        habilidades: "HTML, CSS, JavaScript, linguagem C, lógica de programação, Git e aprendizado rápido."
    },

    "vendedor": {
        sobre: "Profissional de vendas com boa comunicação, foco em atendimento ao cliente, negociação e alcance de resultados.",
        habilidades: "Atendimento ao cliente, vendas, comunicação, negociação, persuasão e organização."
    },

    "atendente": {
        sobre: "Profissional com experiência em atendimento ao público, comunicação clara, organização e suporte às necessidades dos clientes.",
        habilidades: "Atendimento ao público, comunicação, cordialidade, organização e resolução de problemas."
    },

    "caixa": {
        sobre: "Operador de caixa responsável e organizado, com atenção aos detalhes, atendimento ao cliente e controle de valores.",
        habilidades: "Operação de caixa, atendimento, organização, atenção, responsabilidade e cálculo básico."
    },

    "administrativo": {
        sobre: "Profissional administrativo com foco em organização de documentos, rotinas internas, atendimento e suporte às atividades da empresa.",
        habilidades: "Pacote Office, organização, atendimento, controle de documentos, comunicação e responsabilidade."
    },

    "eletricista": {
        sobre: "Profissional voltado à área elétrica e de energia, com foco em instalações, manutenção, segurança e funcionamento adequado de sistemas elétricos.",
        habilidades: "Instalações elétricas, manutenção preventiva, segurança elétrica, organização e diagnóstico de falhas."
    },

    "designer": {
        sobre: "Profissional criativo com foco em comunicação visual, identidade de marca, criação de peças digitais e soluções visuais modernas.",
        habilidades: "Design gráfico, criatividade, identidade visual, edição de imagens, composição visual e atenção aos detalhes."
    },

    "professor": {
        sobre: "Profissional dedicado ao ensino e desenvolvimento de pessoas, com boa comunicação, organização e responsabilidade educacional.",
        habilidades: "Comunicação, planejamento, didática, organização, responsabilidade e desenvolvimento de alunos."
    },

    "estagiário": {
        sobre: "Estagiário em busca de aprendizado e crescimento profissional, com disposição para desenvolver habilidades práticas e contribuir com a equipe.",
        habilidades: "Aprendizado rápido, comunicação, organização, responsabilidade, proatividade e trabalho em equipe."
    },

    "jovem aprendiz": {
        sobre: "Jovem Aprendiz com interesse em desenvolvimento profissional, responsabilidade e disposição para aprender novas funções.",
        habilidades: "Comunicação, organização, responsabilidade, trabalho em equipe, aprendizado rápido e proatividade."
    }
};

document.getElementById("foto").addEventListener("change", function () {

    const arquivo = this.files[0];

    if (arquivo) {

        const leitor = new FileReader();

        leitor.onload = function (evento) {
            fotoBase64 = evento.target.result;
            gerarCurriculo();
        };

        leitor.readAsDataURL(arquivo);
    }
});

const campos = document.querySelectorAll("input, textarea, select");

campos.forEach(campo => {
    campo.addEventListener("input", gerarCurriculo);
    campo.addEventListener("change", gerarCurriculo);
});

function gerarCurriculo() {

    let nome = document.getElementById("nome").value;
    let cargo = document.getElementById("cargo").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let modelo = document.getElementById("modelo").value;

    let sobre = document.getElementById("sobre").value;
    let experiencia = document.getElementById("experiencia").value;
    let habilidades = document.getElementById("habilidades").value;
    let cursos = document.getElementById("cursos").value;

    const curriculo = document.getElementById("curriculo");

    curriculo.className = `curriculo ${modelo}`;

    curriculo.innerHTML = `

        <div class="topo-curriculo">

            ${fotoBase64 ? `<img src="${fotoBase64}" class="foto-curriculo">` : ""}

            <div>
                <h1>${nome || "Seu Nome"}</h1>

                <h3>${cargo || "Área desejada"}</h3>

                <p class="info">
                    ${email || "email@exemplo.com"} |
                    ${telefone || "(00) 00000-0000"} |
                    ${cidade || "Cidade"}
                </p>
            </div>

        </div>

        <h2>Resumo Profissional</h2>
        <p>${sobre || "Seu resumo profissional aparecerá aqui."}</p>

        <h2>Experiência Profissional</h2>
        <p>${experiencia || "Suas experiências profissionais aparecerão aqui."}</p>

        <h2>Habilidades</h2>
        <p>${habilidades || "Suas habilidades aparecerão aqui."}</p>

        <h2>Cursos e Formação</h2>
        <p>${cursos || "Seus cursos e formação aparecerão aqui."}</p>
    `;
}

function melhorarTexto() {

    let cargo = document.getElementById("cargo").value.toLowerCase();

    let encontrou = false;

    for (let chave in dadosIA) {

        if (cargo.includes(chave)) {

            document.getElementById("sobre").value =
                dadosIA[chave].sobre;

            document.getElementById("habilidades").value =
                dadosIA[chave].habilidades;

            encontrou = true;

            break;
        }
    }

    if (!encontrou) {

        document.getElementById("sobre").value =
            "Profissional dedicado, organizado e com facilidade para aprender novas funções, buscando crescimento profissional e desenvolvimento constante.";

        document.getElementById("habilidades").value =
            "Comunicação, organização, trabalho em equipe, responsabilidade, proatividade e aprendizado rápido.";
    }

    gerarCurriculo();
}

function baixarPDF() {
    window.print();
}

gerarCurriculo();