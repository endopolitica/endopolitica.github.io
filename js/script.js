function showContent(section) {
    const content = {
        section1: `Endobot é um bot de whatsapp com informações para mulheres com endometriose e dor crônica. Ele é enriquecido com a nossa experiência pessoal que compartilhamos no @endopolitica. Siga-nos!`,
        section2: `Em breve disponibilizaremos um número de whatsapp com o qual você poderá conversar para tirar todas as suas dúvidas.`,
        section3: `O EndoBot é um projeto do Endopolítica, uma organização que visa promover o empoderamento de mulheres que possuem ou desconfiam possuir Endometriose, uma doença que atinge aproximadamente 15% da população global. Siga-nos em https://instagram.com/endopolitica`
    };
    document.getElementById("content").innerText = content[section];
}
