# Plano de Testes de Software


| Caso de teste        | CT01 - Página inicial                                                                                                         |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-01  O site deve apresentar na página inicial as funcionalidades disponíveis para o usuário.                                                                                                               |
| Objetivo do Teste        | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.                                                                        |
| Passos        |1) Acessar o site através da página HireMe (colocar link da página inicial aqui)                                                                                                                          |
|               |2) Visualizar a página inicial                                                                                                                      |
|               |3) Clicar na funcionalidade pretendida.
| Critérios de Êxito        | Após a Página inicial carregar, deve ser possível clicar no botão 'Entrar' no cabeçalho, onde o usuário será redirecionado para a página de Login. Além disso, descendo a página, haverá o botão 'Cadastre-se gratuitamente', o qual, ao ser clicado, deverá redirecionar o usuário para a página de cadastro.                                                |
</br>
</br>


| Caso de teste        | CT02 - Separação de telas entre candidatos e recrutadores                                                                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-02  O site deve ter separação de telas entre usuários que queiram disponibilizar o currículo e os recrutadores que buscam talentos. |     
|                              | RNF-04  O site deve ter opção de cadastro de usuários. |     
| Objetivo do Teste        | Verificar se o site oferece dois ambientes diferentes. Um para quem quer criar e compartilhar seu currículo e outro para quem está em busca de um profissional para a vaga que tem disponível.                                                                      |
| Passos        |1) Acessar a página de cadastro através da página inicial.                                                                                                                       |
|               |2) Preencher os dados pedidos no cadastro e, no final, escolher a opção "Quero criar e cadastrar meu currículo" ou a opção "Quero buscar profissionais".                                                                                                                  |
|               |3) Clicar em Continuar para ser redirecionado para a página de Login.
|               |4) Realizar o Login com o e-mail e senha escolhidos.
| Critérios de Êxito        | Após clicar em Continuar na página de Login, caso tenha escolhido "Quero criar e cadastrar meu currículo", o site deve ser redirecionado para o Perfil do candidato. Caso tenha escolhido "Quero buscar profissionais", o site deve ser redirecionado para o Perfil do recrutador.                             |
</br>
</br>


| Caso de teste        | CT03 - Criação, edição e compartilhamento de currículo                                                                                                 |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-03  O site deve permitir a criação e edição de um currículo pelo usuário. |      
|                             | RF-04  O site deve mostrar os templates de currículos disponíveis para a edição do usuário. |    
|                             | RF-05  O site deve oferecer o recurso de selecionar as experiências e habilidades que deseja colocar em cada currículo para a versão de download, de forma a conseguir personalizar para cada tipo de arquivo. |    
|                             | RF-09  O site deve permitir que o usuário coloque links externos no currículo. |    
| Objetivo do Teste        | Verificar se o site oferece dois ambientes diferentes. Um para quem quer criar e compartilhar seu currículo e outro para quem está em busca de um profissional para a vaga que tem disponível.                                                                      |
| Passos        |1) Fazer Login e acessar a página de Perfil do candidato.                                                                                                            |
|               |2) Clicar no menu principal na opção Criar um currículo.                                                                                                                  |
|               |3) Preencher as informações pedidas para o currículo, como habilidades e experiências.
|               |4) Clicar em .... para ser redirecionado para a página com os modelos de currículos.
|               |5) Escolher um modelo de currículo, clicar em cima dele e clicar em próximo para ser redirecionado para a página de Compartilhamento do currículo.
|               |6) Escolher se irá compartilhar o currículo na plataforma HireMe, fazer download do currículo com o layout escolhido e/ou copiar o link do currículo.
| Critérios de Êxito        | Após clicar em Criar um currículo e preencher todas as informações pedidas, o site deve ser redirecionado para a página de Modelos de currículos para que o usuário possa escolher um layout que mais o agrada. Na página de Modelos de currículos, o usuário deve conseguir clicar em cima do layout para selecioná-lo e, ao clicar no botão de Próximo, o site deve ser redirecionado para a página de compartilhamento. Por fim, na página de compartilhamento, o site deve permitir que o usuário faça download do currículo com o layout escolhido, além de permitir que ele copie o link do currículo criado e que consiga compartilhar seu currículo dentro da plataforma para recrutadores cadastrados.                             |
</br>
</br>

