function showContent(section) {
    const content = {
        section1: `Endobot é um bot de whatsapp com informações para mulheres com endometriose e dor crônica. Ele é enriquecido com a nossa experiência pessoal que compartilhamos no <a href="https://www.instagram.com/endopolitica" target="_blank">@endopolitica</a>. Siga-nos!`,
        section2: `Em breve disponibilizaremos um número de whatsapp com o qual você poderá conversar para tirar todas as suas dúvidas.`,
        section3: `O EndoBot é um projeto do Endopolítica, uma organização que visa promover o empoderamento de mulheres que possuem ou desconfiam possuir Endometriose, uma doença que atinge aproximadamente 15% da população global. Siga-nos em <a href="https://www.instagram.com/endopolitica" target="_blank">@endopolitica</a>`,
        section4: `Email de contato: <a href="mailto:hannah@endopolitica.org">hannah@endopolitica.org</a> <br>
        Telefone de contato: <a href="tel:+15557307319">+1 555 730 7319</a> <br>
        Instagram: <a href="https://www.instagram.com/endopolitica" target="_blank">@endopolitica</a>`    };
    document.getElementById("content").innerHTML = content[section];
}
