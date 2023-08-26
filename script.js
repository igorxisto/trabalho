function inserirConteudo() {
    
  // Obter o elemento onde queremos inserir o conteúdo
  const elementoConteudo = document.getElementById("top");
  const elementobd = document.getElementById("mid")

  // Verificar se o elemento foi encontrado
  if (elementoConteudo) {
    // Criar um novo elemento
    //topo da página
    const cincoR = document.createElement("div");
    const table = document.createElement("table");
    const part2 = document.createElement("div");
    const part3 = document.createElement("div");
    //meio da página

    // Adicionar o conteúdo que queremos inserir
    cincoR.innerHTML = `
    <div class="cincor">
    <h2>O que são os 5R'S ?</h2>
    <h4>
      Os 5 rs são um estilo de vida sustentável preocupado com a diminuição
      geração de resíduos no planeta. As cinco palavras, repensar, recusar,
      reduzir, reutilizar e reciclar, ajudam a construir um comportamento
      humano em compromisso com meio ambiente
    </h4>
    <h4>Quais são ?</h4>`;
    table.innerHTML = `
    <tr>
        <th>Repensar</th>
        <th>Cada pessoa deve repensar suas práticas em relação ao meio ambiente. Devemos repensar, por exemplo, nosso consumo e como fazemos o descarte dos nossos resíduos. Repensar é o início dessa mudança.</th>
    </tr>
    <tr>
          <th>Reduzir</th>
          <th>A primeira etapa é reduzir a quantidade de resíduos que produzimos. Isso envolve
          consumir de
          forma
          consciente, comprar apenas o necessário e evitar o desperdício. Ao reduzir, estamos diminuindo a
          quantidade
          de materiais que entram em nosso fluxo de resíduos.</th>
    </tr>
    <tr>
          <th>Reciclar</th>
          <th>A reciclagem envolve o processo de transformar materiais descartados em novos
          produtos. Isso geralmente é feito através da coleta seletiva de resíduos, onde os materiais são separados e enviados
          para instalações de reciclagem. Ao reciclar, estamos economizando recursos naturais e reduzindo a
          quantidade de resíduos que vão para aterros sanitários.</th>
    </tr>
    <tr>
          <th>Reutilizar</th>
          <th>A reutilização é a prática de usar novamente um item antes de descartá-lo. Isso pode
          ser
          feito
          consertando produtos danificados, compartilhando itens com outras pessoas ou encontrando novos
          usos para
          objetos antigos. Ao reutilizar, estamos prolongando a vida útil dos materiais e reduzindo a
          necessidade
          de
          produzir novos itens.</th>
    </tr>
    `;
    part2.innerHTML = `
    <div class="ti-verde">
    <h1>O que é Ti Verde ?</h1>
    <p id="tiverde">
        TI verde, também conhecida como tecnologia da informação verde ou sustentável, refere-se ao uso de
        práticas
        e soluções tecnológicas que visam reduzir o impacto ambiental e promover a sustentabilidade na área de
        Tecnologia da Informação (TI).
    </p>
    <h2>Quais são as estrategias ?</h2>

    <table>
    <tr>
    <th>Eficiência energética</th>
    <th>Implementação de hardware e software com baixo consumo de energia, virtualização de servidores e data centers, uso de técnicas de resfriamento eficientes, entre outros.</th>
    </tr>
    <tr>
    <th>Gerenciamento adequado de resíduos eletrônicos</th>
    <th>Reciclagem e descarte responsável de equipamentos eletrônicos, evitando a contaminação do meio ambiente por substâncias tóxicas presentes nesses dispositivos.</th>
    </tr>
    <tr>
    <th>Uso de energia renovável</th>
    <th>Utilização de fontes de energia limpa e renovável, como energia solar, eólica e hidrelétrica, para alimentar as operações de TI</th>
    </tr>
    <tr>
    <th>Virtualização e computação em nuvem</th>
    <th>Consolidar servidores físicos em máquinas virtuais e migrar para plataformas de computação em nuvem, reduzindo a necessidade de infraestrutura física e o consumo de energia.</th>
    </tr>
    <tr>
    <th>Práticas de impressão sustentável</th>
    <th>Incentivar a digitalização de documentos, imprimir somente quando necessário, utilizar papel reciclado e adotar configurações de impressão econômicas.</th>
    </tr>

</table>
`;
    part3.innerHTML = `
    <div class="esg">
        <h1>O que é ESG ?</h1>
            <p id="esg">
                ESG é uma sigla que representa três critérios ambientais, sociais e de governança utilizados para
                avaliar a
                sustentabilidade e o impacto das práticas empresariais.
            </p>
        <h2>O que cada letra da sigla significa ?</h2>
        <table>
            <tr>
            <th>E</th>
                <th>
                    refere-se a fatores ambientais, como o uso de recursos naturais, emissões de carbono, gestão de resíduos e políticas de conservação.
                </th>
            </tr>
                
            <tr>
            <th>S</th>
                <th>refere-se a fatores sociais, incluindo questões relacionadas aos funcionários, comunidades, diversidade, direitos humanos e saúde e segurança no trabalho.
            </th>
            </tr>   
                
            <tr>
            <th>G</th>
                <th>refere-se a fatores de governança corporativa, como a estrutura de liderança, remuneração dos executivos, transparência, ética e responsabilidade.</th>
            </tr> 
                
                
        </table>

    </div>`;

    // Adicionar o novo elemento ao elemento pai (no caso, o elemento de conteúdo)
    elementoConteudo.appendChild(cincoR);
    elementoConteudo.appendChild(table);
    elementoConteudo.appendChild(part2);
    elementoConteudo.appendChild(part3);
    elementobd.appendChild();
  } else {
    console.error("Elemento de conteúdo não encontrado!");
  }
}


// Chamar a função para inserir o conteúdo quando a página carregar
window.onload = inserirConteudo;
